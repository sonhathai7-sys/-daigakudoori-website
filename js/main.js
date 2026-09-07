document.addEventListener("DOMContentLoaded", () => {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  const menuMount = document.getElementById("mobile-menu-mount");
  const active = document.body.dataset.active || "";

  if (headerMount) headerMount.innerHTML = renderHeader(active);
  if (footerMount) footerMount.innerHTML = renderFooter();
  if (menuMount) menuMount.innerHTML = renderMobileMenu();

  const openBtn = document.getElementById("menu-open-btn");
  const closeBtn = document.getElementById("menu-close-btn");
  const menu = document.getElementById("mobile-menu");

  if (openBtn && menu) {
    openBtn.addEventListener("click", () => {
      menu.classList.add("open");
      document.documentElement.style.overflow = "hidden";
    });
  }
  if (closeBtn && menu) {
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("open");
      document.documentElement.style.overflow = "";
    });
  }
});
