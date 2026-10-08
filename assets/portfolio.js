(() => {
  document.getElementById("copyrightYear").textContent = new Date().getFullYear();

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  const closeMenu = () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "메뉴 열기");
  };

  navToggle.addEventListener("click", () => {
    const willOpen = !navLinks.classList.contains("is-open");
    navLinks.classList.toggle("is-open", willOpen);
    navToggle.setAttribute("aria-expanded", String(willOpen));
    navToggle.setAttribute("aria-label", willOpen ? "메뉴 닫기" : "메뉴 열기");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-nav")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const filters = [...document.querySelectorAll(".skill-filter")];
  const skills = [...document.querySelectorAll(".skill-tile")];
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const active = button.dataset.filter;
      filters.forEach((filter) => {
        const selected = filter === button;
        filter.classList.toggle("is-active", selected);
        filter.setAttribute("aria-pressed", String(selected));
      });
      skills.forEach((skill) => {
        skill.hidden = active !== "all" && skill.dataset.category !== active;
      });
    });
  });

  let opener = null;
  document.querySelectorAll("[data-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = document.getElementById(`dialog-${button.dataset.dialog}`);
      if (!dialog) return;
      opener = button;
      dialog.showModal();
      dialog.querySelector(".dialog-close").focus();
    });
  });

  document.querySelectorAll(".project-dialog").forEach((dialog) => {
    dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      opener?.focus();
      opener = null;
    });
  });

  if ("IntersectionObserver" in window) {
    const links = [...navLinks.querySelectorAll('a[href^="#"]')];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-25% 0px -62% 0px", threshold: 0 });
    document.querySelectorAll("#about, #skills, #experience, #projects, #education").forEach((section) => observer.observe(section));
  }
})();
