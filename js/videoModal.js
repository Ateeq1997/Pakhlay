// js/videoModal.js
export function setupVideoModal() {
  const videoModal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const previewVideo = document.getElementById("previewVideo");

  if (!videoModal || !modalVideo) return;

  // When modal is shown → play video
  videoModal.addEventListener("shown.bs.modal", function () {
    modalVideo.play();
  });

  // When modal is hidden → stop and reset video
  videoModal.addEventListener("hidden.bs.modal", function () {
    modalVideo.pause();
    modalVideo.currentTime = 0;
  });

  // Keep preview video paused (if exists)
  if (previewVideo) {
    previewVideo.pause();
  }
}
