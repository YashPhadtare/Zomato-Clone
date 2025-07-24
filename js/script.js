document.addEventListener("DOMContentLoaded", () => {
  // Add hover effect to grid items
  const gridItems = document.querySelectorAll("main section:nth-child(2) div");

  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.boxShadow = "0 8px 15px rgba(255, 0, 0, 0.6)";
    });

    item.addEventListener("mouseout", () => {
      item.style.boxShadow = "none";
    });
  });

  // Animate main logo on click
  const mainLogo = document.querySelector("main section:first-child img");
  mainLogo.addEventListener("click", () => {
    mainLogo.style.animation = "bounce 0.6s";
    setTimeout(() => {
      mainLogo.style.animation = ""; // Reset animation
    }, 600);
  });

  // Bounce animation definition
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(
    `
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `,
    styleSheet.cssRules.length
  );
});
