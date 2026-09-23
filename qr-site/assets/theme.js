(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".lamp-switch");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const favicon = document.getElementById("favicon");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!toggle) return;

  let saved = null;

  try {
    saved = localStorage.getItem("qr-theme");
  } catch (error) {}

  const initialTheme =
    saved === "dark" || saved === "light"
      ? saved
      : (systemTheme.matches ? "dark" : "light");

  const setFavicon = (theme) => {
    if (!favicon) return;

    const source = theme === "dark"
      ? favicon.dataset.darkSrc
      : favicon.dataset.lightSrc;

    if (source) favicon.setAttribute("href", source);
  };

  const applyTheme = (theme, persist = true) => {
    root.dataset.theme = theme;

    toggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
    toggle.setAttribute(
      "aria-pressed",
      theme === "dark" ? "true" : "false"
    );

    if (themeMeta) {
      themeMeta.setAttribute(
        "content",
        theme === "dark" ? "#151513" : "#f3f2ee"
      );
    }

    setFavicon(theme);

    if (persist) {
      saved = theme;

      try {
        localStorage.setItem("qr-theme", theme);
      } catch (error) {}
    }
  };

  applyTheme(initialTheme, false);

  systemTheme.addEventListener("change", (event) => {
    if (!saved) {
      applyTheme(event.matches ? "dark" : "light", false);
    }
  });

  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

    if (reducedMotion.matches) {
      applyTheme(nextTheme);
      return;
    }

    toggle.classList.remove("activating");
    void toggle.offsetWidth;
    toggle.classList.add("activating");

    window.setTimeout(() => {
      applyTheme(nextTheme);
      toggle.classList.remove("activating");
    }, 170);
  });
})();