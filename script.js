/* ===== Story Navigation Functions ===== */
function nextScene(sceneNumber) {
  // Hide all scenes
  let scenes = document.querySelectorAll(".scene");
  scenes.forEach(scene => scene.classList.remove("active"));

  // Show chosen scene
  let next = document.getElementById("scene" + sceneNumber);
  next.classList.add("active");
}

function restartStory() {
  nextScene(1);
}
