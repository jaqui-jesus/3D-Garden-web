/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

document.addEventListener("DOMContentLoaded", async function() {
  
  const container = document.getElementById("us-team-cards");

  try {
    const response = await fetch("../assets/data/developers.json"); // Cargar el JSON
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log("JSON:", data);

    data.developers.forEach(dev => {
      const devCard = document.createElement("div");
      devCard.className = " col-12 col-md-6 col-lg-3 mb-2";

      devCard.innerHTML = `
        <div class="card text-center shadow-lg border-0">
          <img src="${dev.img}" class="card-img-top rounded-circle mx-auto mt-3" alt="${dev.name}" style="width: 100px; height: 100px;">
          <div class="card-body">
            <h5 class="card-title">${dev.name}</h5>
            <p class="card-text">${dev.rol}</p>
            <p class="card-text">${dev.bio}</p>
            <div>
              <a href="${dev.linkedin}" target="_blank" class="btn btn-primary btn-sm">LinkedIn</a>
              <a href="${dev.github}" target="_blank" class="btn btn-dark btn-sm">GitHub</a>
            </div>
          </div>
        </div>
      `;

    container.appendChild(devCard);
  });

} catch (error) {
  console.error("Error al cargar los desarrolladores:", error);
}

// Fetch para la línea del tiempo
fetch("../assets/data/story.json")
.then(response => response.json())
.then(data => {
  
  const storyDiv = document.getElementById("us-story-timeline");
  const colors = ["#C6434E", "#BBEE4D", "#37C7BD"]; // Colores a alternar

  data.story.forEach(item => {
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");

    timelineItem.innerHTML = `
        <div class="date-bar"><h2>${item.date}</h2></div>
        <div class="image-container">
            <img src="${item.img}" alt="Evento">
        </div>
        <div class="text-container lead">${item.description}</div>
    `;
      const bars = document.querySelectorAll(".date-bar");


    storyDiv.appendChild(timelineItem);
    bars.forEach((bar, index) => {
      bar.style.backgroundColor = colors[index % colors.length]; // Asigna el color alternando
      });
  });
})
.catch(e => console.log("Error de carga de JSON", e));






});