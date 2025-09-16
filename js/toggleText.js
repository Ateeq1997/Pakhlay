// js/toggleText.js
export function toggleText(event) {
  const moreText = document.getElementById("moreText");
  const btn = event.target;

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}
