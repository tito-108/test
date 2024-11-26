// Data for the photo and text sets
const data = {
  1: [
      { text: "Photo 1 - Set 1", image: "https://via.placeholder.com/500?text=1-1" },
      { text: "Photo 2 - Set 1", image: "https://via.placeholder.com/500?text=1-2" },
      { text: "Photo 3 - Set 1", image: "https://via.placeholder.com/500?text=1-3" },
      { text: "Photo 4 - Set 1", image: "https://via.placeholder.com/500?text=1-4" },
      { text: "Photo 5 - Set 1", image: "https://via.placeholder.com/500?text=1-5" }
  ],
  2: [
      { text: "Photo 1 - Set 2", image: "https://via.placeholder.com/500?text=2-1" },
      { text: "Photo 2 - Set 2", image: "https://via.placeholder.com/500?text=2-2" },
      { text: "Photo 3 - Set 2", image: "https://via.placeholder.com/500?text=2-3" },
      { text: "Photo 4 - Set 2", image: "https://via.placeholder.com/500?text=2-4" },
      { text: "Photo 5 - Set 2", image: "https://via.placeholder.com/500?text=2-5" }
  ]
};

// Function to show a set of photos and text
function showSet(setNumber) {
  const container = document.getElementById("sub-buttons");
  container.innerHTML = ""; // Clear existing buttons
  const set = data[setNumber];

  set.forEach((item, index) => {
      const button = document.createElement("button");
      button.innerText = `Option ${index + 1}`;
      button.onclick = () => updateContent(item);
      container.appendChild(button);
  });

  // Set initial content
  if (set.length > 0) {
      updateContent(set[0]);
  }
}

// Function to update the main photo and text
function updateContent(item) {
  document.getElementById("main-text").innerText = item.text;
  document.getElementById("main-image").src = item.image;
}

// Initialize with the first set
showSet(1);
