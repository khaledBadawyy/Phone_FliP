window.addEventListener("orientationchange", handleOrientationChange);

function handleOrientationChange() {
  const video = document.getElementById("video");

  if (window.innerWidth < window.innerHeight) {
    
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }
    else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
 }
}