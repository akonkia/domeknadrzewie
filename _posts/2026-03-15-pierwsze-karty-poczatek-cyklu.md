---
layout: default
---
<article class="post">
  <style>
    /* Kontener całego posta */
    .post {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    /* Nagłówek: Data i Tytuł */
    .post-header {
      margin-bottom: 24px;
      text-align: center;
    }

    .post-date {
      color: #678760; 
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.75rem;
      font-weight: 700;
      margin-bottom: 12px;
      display: block;
    }

    .post h1 {
      margin: 0 auto;
      max-width: 800px;
      font-size: clamp(1.8rem, 4vw, 2.6rem);
      line-height: 1.1;
      text-transform: uppercase;
      color: #243126;
      font-family: 'Bodoni Moda', serif;
    }

    /* Stylizacja linków wewnątrz tekstu */
    .post-body a {
      color: #678760;
      text-decoration: none;
      border-bottom: 1px solid rgba(103, 135, 96, 0.3);
      transition: all 0.3s ease;
    }

    .post-body a:hover {
      background-color: rgba(103, 135, 96, 0.05);
      border-bottom: 1px solid #678760;
    }

    /* Sekcja zdjęcia */
    .post-cover-wrap {
      margin: 0 0 40px 0;
      display: flex;
      justify-content: center;
    }

    .post-cover-frame {
      width: 100%;
      max-width: 650px;
      aspect-ratio: 21 / 9;
      border-radius: 12px;
      border: 1px solid rgba(36,49,38,0.06);
      box-shadow: 0 10px 25px rgba(36,49,38,0.05);
      overflow: hidden;
      background: linear-gradient(180deg, #f8f5ee 0%, #efe9de 100%);
    }

    .post-cover-frame.placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }

    .post-cover-frame.placeholder img {
      width: 120px;
      height: auto;
      opacity: 0.4;
      filter: grayscale(1);
    }

    .post-cover-frame.has-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* Główna treść artykułu */
    .post-body {
      max-width: 720px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(103, 135, 96, 0.1);
      border-radius: 16px;
      padding: 45px;
      line-height: 1.8;
      color: #243126;
      box-shadow: 0 15px 35px rgba(36, 49, 38, 0.04);
      font-family: 'Inter', sans-serif;
    }

    .post-body h2 {
      margin-top: 2.2em;
      margin-bottom: 0.8em;
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #3e4a3f;
      border-bottom: 1px solid rgba(103, 135, 96, 0.15);
      padding-bottom: 8px;
    }

    /* Sekcja "Polecane" pod artykułem */
    .post-footer-nav {
      margin-top: 40px;
      padding-top: 30px;
      border-top: 1px solid rgba(36,49,38,0.08);
    }

    .nav-card {
      display: block;
      background: #f8f6f2;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 15px;
      text-decoration: none !important;
      border: 1px solid rgba(103, 135, 96, 0.1);
      transition: transform 0.3s ease;
    }

    .nav-card:hover {
      transform: translateY(-3px);
      border-color: #678760;
    }

    .nav-card span {
      display: block;
      font-size: 0.7rem;
      text-transform: uppercase;
      color: #678760;
      font-weight: 800;
      margin-bottom: 5px;
    }

    .nav-card strong {
      color: #243126;
      font-size: 1rem;
    }

    @media (max-width: 600px) {
      .post-body { padding: 25px; border-radius: 0; box-shadow: none; border: none; background: transparent; }
      .post-cover-frame { aspect-ratio: 16 / 9; }
    }
  </style>

  {% assign default_cover = '/assets/img/blog/default-cover.png' %}
  {% assign cover_image = page.cover | default: default_cover %}
  {% assign cover_alt = page.cover_alt | default: page.title %}
  {% assign is_placeholder = cover_image == default_cover %}

  <header class="post-header">
    <span class="post-date">{{ page.date | date: "%-d %B %Y" }}</span>
    <h1>{{ page.title }}</h1>
  </header>

  <div class="post-cover-wrap">
    <div class="post-cover-frame {% if is_placeholder %}placeholder{% else %}has-image{% endif %}" aria-label="{{ cover_alt }}">
      <img src="{{ cover_image }}" alt="{{ cover_alt }}">
    </div>
  </div>

  <div class="post-body">
    {{ content }}

    <div class="post-footer-nav">
      <a href="https://domeknadrzewie.edu.pl/materialy/kapiele_miejskie/#tydzien-11" class="nav-card">
        <span>Aktualna praktyka</span>
        <strong>Tydzień 11: Pobierz kartę uważności 🌿</strong>
      </a>
      
      <a href="https://domeknadrzewie.edu.pl/blog/2026/04/03/Miejskie-kapiele-lesne-jak-praktykowac-Shinrin-yoku-bez-wyjezdzania-z-miasta/" class="nav-card">
        <span>Artykuł</span>
        <strong>Przewodnik: Miejskie kąpiele leśne w praktyce 📖</strong>
      </a>
    </div>
  </div>
</article>
