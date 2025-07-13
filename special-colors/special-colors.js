(function () {
  const styles = `
    @keyframes glitter {
      0%, 100% { background-position: 0% 0%; }
      50% { background-position: 100% 100%; }
    }

    @keyframes holo {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }

    @keyframes reflect {
      0% { background-position: -100% 0; }
      100% { background-position: 200% 0; }
    }

    .glitter, .holo, .reflect {
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-size: 200% 200%;
      background-repeat: repeat;
      opacity: 0;
      transition: opacity 0.5s ease;
    }

    .active-glitter { animation: glitter linear infinite; opacity: 1; }
    .active-holo { animation: holo linear infinite; opacity: 1; }
    .active-reflect { animation: reflect linear infinite; opacity: 1; }
  `;

  // Inietta gli stili globali
  const styleEl = document.createElement("style");
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);

  // Utility: converte attributo colors in gradient string
  function getGradientFromColors(colorsStr, angle = "45deg") {
    const colors = colorsStr.split(',').map(c => c.trim()).filter(Boolean);
    if (colors.length < 2) return null;
    return `linear-gradient(${angle}, ${colors.join(",")})`;
  }

  // IntersectionObserver per attivare effetti al scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const speed = parseFloat(el.getAttribute("animation-speed")) || 1;
      const userColors = el.getAttribute("colors");
      let gradient = null;

      // Determina il tipo di effetto
      if (el.classList.contains("glitter")) {
        el.classList.add("active-glitter");
        el.style.animationDuration = `${speed}s`;
        gradient = getGradientFromColors(userColors || "#fff,#f0f,#0ff,#fff", "45deg");
      } else if (el.classList.contains("holo")) {
        el.classList.add("active-holo");
        el.style.animationDuration = `${speed}s`;
        gradient = getGradientFromColors(userColors || "#ff00cc,#3333ff,#00ccff,#ffcc00,#ff00cc", "90deg");
      } else if (el.classList.contains("reflect")) {
        el.classList.add("active-reflect");
        el.style.animationDuration = `${speed}s`;
        gradient = getGradientFromColors(userColors || "#ffffff,#cccccc,#ffffff", "to right");
      }

      if (gradient) {
        el.style.backgroundImage = gradient;
      }
    });
  }, { threshold: 0.1 });

  // Applica l'osservatore a tutti gli elementi interessati
  const elements = document.querySelectorAll(".glitter, .holo, .reflect");
  elements.forEach(el => observer.observe(el));
})();