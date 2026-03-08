export function iniciarTabs() {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");
  const indicator = document.querySelector(".tab-indicator");

  function moveIndicator(element) {
    indicator.style.width = element.offsetWidth + "px";
    indicator.style.left = element.offsetLeft + "px";
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      const target = document.getElementById(tab.dataset.tab + "-content");
      target.classList.add("active");
      moveIndicator(tab);
    });
  });

  window.addEventListener("load", () => {
    moveIndicator(document.querySelector(".tab.active"));
  });
}