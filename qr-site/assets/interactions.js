(() => {
  const toast = document.querySelector(".toast");
  let toastTimer = null;

  const showToast = (message) => {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("is-visible");

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 1600);
  };

  document.querySelectorAll(".copy-action").forEach((link) => {
    let pressTimer = null;
    let longPress = false;

    const clearPress = () => {
      window.clearTimeout(pressTimer);
      pressTimer = null;
    };

    link.addEventListener("pointerdown", () => {
      longPress = false;
      clearPress();

      pressTimer = window.setTimeout(async () => {
        longPress = true;
        const value = link.dataset.copy;

        try {
          await navigator.clipboard.writeText(value);
          showToast("Copied");
        } catch (error) {
          showToast("Copy unavailable");
        }
      }, 600);
    });

    link.addEventListener("pointerup", clearPress);
    link.addEventListener("pointercancel", clearPress);
    link.addEventListener("pointerleave", clearPress);

    link.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    link.addEventListener("click", (event) => {
      if (longPress) {
        event.preventDefault();
        longPress = false;
      }
    });
  });

  const shareButton = document.querySelector("[data-share-card]");

  if (shareButton) {
    shareButton.addEventListener("click", async () => {
      const shareData = {
        title: "Divij Shah",
        text: "Divij Shah · Litigation · Bombay",
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
          return;
        } catch (error) {
          if (error && error.name === "AbortError") return;
        }
      }

      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast("Card link copied");
      } catch (error) {
        showToast("Share unavailable");
      }
    });
  }
})();