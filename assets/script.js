// Set "aria-current" on nav items based on current page
(function () {
  const path = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) {
      a.setAttribute("aria-current", "page");
    }
  });

  // Basic download tracking hook (replace with GA/Plausible events later)
  document.querySelectorAll('a[data-track="download"]').forEach(a => {
    a.addEventListener("click", () => {
      console.log("Download clicked:", a.getAttribute("href"));
    });
  });
})();
