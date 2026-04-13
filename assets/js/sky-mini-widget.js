(function () {
  if (window.__dndSkyMiniWidgetInit) return;
  window.__dndSkyMiniWidgetInit = true;

  function initSkyMiniWidgets() {
    if (!window.SunCalc) return;

    const widgets = [...document.querySelectorAll('.js-sky-mini')].map((scene) => {
      const widget = {
        scene,
        sun: scene.querySelector('.sky-mini-sun'),
        moon: scene.querySelector('.sky-mini-moon'),
        stars: scene.querySelector('.sky-mini-stars'),
        rain: scene.querySelector('.sky-mini-rain'),
        snow: scene.querySelector('.sky-mini-snow'),
        clouds: scene.querySelector('.sky-mini-clouds'),
        birds: scene.querySelector('.sky-mini-birds'),
        label: scene.querySelector('.sky-mini-label'),
        hook: scene.querySelector('.sky-mini-hook'),
        labelPrefix: scene.dataset.labelPrefix || 'Niebo dziś'
      };

      if (!widget.sun || !widget.moon || !widget.stars || !widget.rain || !widget.snow || !widget.clouds || !widget.birds || !widget.label || !widget.hook) {
        return null;
      }

      return widget;
    }).filter(Boolean);

    if (!widgets.length) return;

    const FALLBACK_LOCATION = {
      name: 'Wrocław',
      latitude: 51.1079,
      longitude: 17.0385,
      timezone: 'Europe/Warsaw',
      source: 'fallback'
    };

    const SUPPORTED_CITIES = [
      { name: 'Wrocław', latitude: 51.1079, longitude: 17.0385, timezone: 'Europe/Warsaw' },
      { name: 'Warszawa', latitude: 52.2297, longitude: 21.0122, timezone: 'Europe/Warsaw' },
      { name: 'Kraków', latitude: 50.0647, longitude: 19.9450, timezone: 'Europe/Warsaw' },
      { name: 'Poznań', latitude: 52.4064, longitude: 16.9252, timezone: 'Europe/Warsaw' },
      { name: 'Gdańsk', latitude: 54.3520, longitude: 18.6466, timezone: 'Europe/Warsaw' },
      { name: 'Sopot', latitude: 54.4416, longitude: 18.5601, timezone: 'Europe/Warsaw' },
      { name: 'Ostrów Wielkopolski', latitude: 51.6550, longitude: 17.8069, timezone: 'Europe/Warsaw' },
      { name: 'Jarocin', latitude: 51.9727, longitude: 17.5026, timezone: 'Europe/Warsaw' },
      { name: 'Łódź', latitude: 51.7592, longitude: 19.4550, timezone: 'Europe/Warsaw' },
      { name: 'Szczecin', latitude: 53.4285, longitude: 14.5528, timezone: 'Europe/Warsaw' },
      { name: 'Lublin', latitude: 51.2465, longitude: 22.5684, timezone: 'Europe/Warsaw' },
      { name: 'Katowice', latitude: 50.2649, longitude: 19.0238, timezone: 'Europe/Warsaw' }
    ];

    let locationData = { ...FALLBACK_LOCATION };

    function clearChildren(el) {
      while (el.firstChild) el.removeChild(el.firstChild);
    }

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function toRadians(deg) {
      return deg * Math.PI / 180;
    }

    function haversineDistance(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = toRadians(lat2 - lat1);
      const dLon = toRadians(lon2 - lon1);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    }

    function findNearestSupportedCity(lat, lon) {
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) return FALLBACK_LOCATION;

      let nearest = SUPPORTED_CITIES[0];
      let minDistance = haversineDistance(lat, lon, nearest.latitude, nearest.longitude);

      for (const city of SUPPORTED_CITIES.slice(1)) {
        const distance = haversineDistance(lat, lon, city.latitude, city.longitude);
        if (distance < minDistance) {
          minDistance = distance;
          nearest = city;
        }
      }

      return nearest;
    }

    function saveLocation(loc) {
      try {
        localStorage.setItem('dnd-sky-mini-location', JSON.stringify({
          ...loc,
          savedAt: Date.now()
        }));
      } catch (e) {}
    }

    function loadSavedLocation() {
      try {
        const raw = localStorage.getItem('dnd-sky-mini-location');
        if (!raw) return null;

        const parsed = JSON.parse(raw);
        if (!parsed) return null;

        const maxAge = 1000 * 60 * 60 * 24 * 7;
        if (!parsed.savedAt || Date.now() - parsed.savedAt > maxAge) return null;
        if (!Number.isFinite(Number(parsed.latitude)) || !Number.isFinite(Number(parsed.longitude))) return null;

        return parsed;
      } catch (e) {
        return null;
      }
    }

    function buildLocalNoon(date, timezone) {
      const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).formatToParts(date);

      const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
      return new Date(
        Number(map.year),
        Number(map.month) - 1,
        Number(map.day),
        12, 0, 0, 0
      );
    }

    function getTimePartsInTimezone(timezone) {
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h23'
      }).formatToParts(new Date());

      const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
      return {
        hour: Number(map.hour),
        minute: Number(map.minute),
        second: Number(map.second)
      };
    }

    function getAstronomyForDay(date, latitude, longitude, timezone) {
      const localNoon = buildLocalNoon(date, timezone);
      const sunTimes = window.SunCalc.getTimes(localNoon, latitude, longitude);

      return {
        sunrise: sunTimes.sunrise || null,
        sunset: sunTimes.sunset || null
      };
    }

    function getBodyAltitudes(date, latitude, longitude) {
      const sunPos = window.SunCalc.getPosition(date, latitude, longitude);
      const moonPos = window.SunCalc.getMoonPosition(date, latitude, longitude);

      return {
        sunAltitude: sunPos ? sunPos.altitude * 180 / Math.PI : null,
        moonAltitude: moonPos ? moonPos.altitude * 180 / Math.PI : null
      };
    }

    function getSceneFromNow(now, sunriseDate, sunsetDate, timezone) {
      const timeParts = getTimePartsInTimezone(timezone);
      const hourValue = timeParts.hour + (timeParts.minute / 60);

      const localNoon = buildLocalNoon(now, timezone);
      const localProbe = new Date(
        localNoon.getFullYear(),
        localNoon.getMonth(),
        localNoon.getDate(),
        timeParts.hour,
        timeParts.minute,
        timeParts.second || 0,
        0
      );

      if (hourValue < 6 || hourValue >= 20) return 'night';
      if (sunriseDate && localProbe <= new Date(sunriseDate.getTime() + 90 * 60 * 1000)) return 'dawn';
      if (sunsetDate && localProbe >= new Date(sunsetDate.getTime() - 90 * 60 * 1000)) return 'dusk';
      return 'day';
    }

    function getSkyPalette(scene) {
      return {
        dawn: { skyTop: '#bcd7e6', skyBottom: '#f4cda8', sunOpacity: 1, moonOpacity: 0.2, stars: 0.08, birds: 0.55, clouds: 0.58 },
        day: { skyTop: '#c4e0ef', skyBottom: '#f5dfbf', sunOpacity: 1, moonOpacity: 0.04, stars: 0, birds: 1, clouds: 0.44 },
        dusk: { skyTop: '#809ec4', skyBottom: '#eda96e', sunOpacity: 0.9, moonOpacity: 0.24, stars: 0.18, birds: 0.35, clouds: 0.52 },
        night: { skyTop: '#1c2940', skyBottom: '#374e73', sunOpacity: 0.03, moonOpacity: 1, stars: 1, birds: 0, clouds: 0.32 }
      }[scene];
    }

    function populateStars(widget) {
      clearChildren(widget.stars);
      for (let i = 0; i < 14; i += 1) {
        const star = document.createElement('span');
        star.className = 'sky-mini-star';
        star.style.left = `${8 + Math.random() * 82}%`;
        star.style.top = `${8 + Math.random() * 46}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        widget.stars.appendChild(star);
      }
    }

    function populateRain(widget) {
      clearChildren(widget.rain);
      for (let i = 0; i < 14; i += 1) {
        const drop = document.createElement('span');
        drop.className = 'sky-mini-drop';
        drop.style.left = `${8 + Math.random() * 84}%`;
        drop.style.top = `${18 + Math.random() * 42}%`;
        drop.style.animationDelay = `${Math.random() * 1.2}s`;
        drop.style.animationDuration = `${0.9 + Math.random() * 0.5}s`;
        widget.rain.appendChild(drop);
      }
    }

    function populateSnow(widget) {
      clearChildren(widget.snow);
      for (let i = 0; i < 40; i += 1) {
        const flake = document.createElement('span');
        flake.className = 'sky-mini-flake';
        const size = 3 + Math.random() * 5;
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        flake.style.left = `${4 + Math.random() * 92}%`;
        flake.style.top = `${-20 - Math.random() * 80}px`;
        flake.style.opacity = `${0.45 + Math.random() * 0.5}`;
        flake.style.animationDelay = `-${Math.random() * 7}s`;
        flake.style.animationDuration = `${5 + Math.random() * 6}s`;
        widget.snow.appendChild(flake);
      }
    }

    function applyMiniScene(widget, scene, now, sunriseDate, sunsetDate) {
      const palette = getSkyPalette(scene);
      widget.scene.style.background =
        `linear-gradient(180deg, ${palette.skyTop} 0%, ${palette.skyBottom} 70%, rgba(245,241,232,0.14) 100%)`;

      const daylightTotal =
        (sunriseDate && sunsetDate)
          ? Math.max(1, sunsetDate.getTime() - sunriseDate.getTime())
          : 1;

      const daylightProgress =
        (sunriseDate && sunsetDate)
          ? clamp((now.getTime() - sunriseDate.getTime()) / daylightTotal, 0, 1)
          : 0.5;

      const bodyAltitudes = getBodyAltitudes(now, locationData.latitude, locationData.longitude);
      const sunVisible = typeof bodyAltitudes.sunAltitude === 'number' ? bodyAltitudes.sunAltitude > -0.8 : scene !== 'night';
      const moonVisible = typeof bodyAltitudes.moonAltitude === 'number' ? bodyAltitudes.moonAltitude > -0.8 : scene === 'night';

      const sunLeft = 10 + daylightProgress * 76;
      const sunTop = 132 - Math.sin(Math.PI * clamp(daylightProgress, 0, 1)) * 88;
      widget.sun.style.left = `${sunLeft}%`;
      widget.sun.style.top = `${sunTop}px`;
      widget.sun.style.opacity = sunVisible ? palette.sunOpacity : 0;

      const timeParts = getTimePartsInTimezone(locationData.timezone);
      const moonSeed = (timeParts.hour + timeParts.minute / 60) / 24;
      const moonLeft = 12 + moonSeed * 72;
      const moonTop = 126 - Math.sin(Math.PI * clamp(moonSeed, 0, 1)) * 80;
      widget.moon.style.left = `${moonLeft}%`;
      widget.moon.style.top = `${moonTop}px`;
      widget.moon.style.opacity = moonVisible ? palette.moonOpacity : 0;

      widget.stars.style.opacity = palette.stars;
      widget.rain.style.opacity = 0;
      widget.snow.style.opacity = 0;
      widget.birds.style.opacity = palette.birds;

      [...widget.clouds.children].forEach((cloud, index) => {
        cloud.style.opacity = Math.max(0, palette.clouds - index * 0.14);
      });

      widget.label.textContent = `${widget.labelPrefix} · ${locationData.name}`;

      if (scene === 'night') widget.hook.textContent = 'Nocny podgląd — otwórz pełny widok';
      else if (scene === 'dawn') widget.hook.textContent = 'Poranne niebo — otwórz pełny widok';
      else if (scene === 'dusk') widget.hook.textContent = 'Wieczorne niebo — otwórz pełny widok';
      else widget.hook.textContent = 'Dzisiejsze niebo — otwórz pełny widok';
    }

    function renderMiniWidgets() {
      const now = new Date();
      const astronomy = getAstronomyForDay(now, locationData.latitude, locationData.longitude, locationData.timezone);
      const scene = getSceneFromNow(now, astronomy.sunrise, astronomy.sunset, locationData.timezone);
      widgets.forEach((widget) => applyMiniScene(widget, scene, now, astronomy.sunrise, astronomy.sunset));
    }

    async function detectApproximateLocationByIP() {
      try {
        const response = await fetch('https://ipwho.is/');
        if (!response.ok) throw new Error('IP lookup failed');

        const data = await response.json();
        if (!data || data.success === false) throw new Error('No IP location data');

        const lat = Number(data.latitude);
        const lon = Number(data.longitude);
        if (!Number.isFinite(lat) || !Number.isFinite(lon)) throw new Error('Invalid coordinates');

        const nearestCity = findNearestSupportedCity(lat, lon);
        locationData = {
          ...nearestCity,
          timezone: (data.timezone && data.timezone.id) ? data.timezone.id : nearestCity.timezone || 'Europe/Warsaw',
          source: 'ip'
        };

        saveLocation(locationData);
        renderMiniWidgets();
      } catch (error) {
        locationData = { ...FALLBACK_LOCATION };
        saveLocation(locationData);
        renderMiniWidgets();
      }
    }

    function initMiniLocationLogic() {
      const saved = loadSavedLocation();

      if (saved) {
        locationData = {
          name: saved.name || FALLBACK_LOCATION.name,
          latitude: Number(saved.latitude) || FALLBACK_LOCATION.latitude,
          longitude: Number(saved.longitude) || FALLBACK_LOCATION.longitude,
          timezone: saved.timezone || FALLBACK_LOCATION.timezone,
          source: saved.source || 'fallback'
        };
        renderMiniWidgets();
        return;
      }

      locationData = { ...FALLBACK_LOCATION };
      renderMiniWidgets();
      detectApproximateLocationByIP();
    }

    widgets.forEach((widget) => {
      populateStars(widget);
      populateRain(widget);
      populateSnow(widget);
    });

    initMiniLocationLogic();
    window.setInterval(renderMiniWidgets, 60000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSkyMiniWidgets);
  } else {
    initSkyMiniWidgets();
  }
})();
