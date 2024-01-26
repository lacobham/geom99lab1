async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const center = { lat: 45.9701, lng: -81.5080 };
  const map = new Map(document.getElementById("map"), {
    zoom: 14,
    center,
    mapId: "4504f8b37365c3d0",
  });

  for (const property of properties) {
    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(property),
      position: property.position,
      title: property.description,
    });

    AdvancedMarkerElement.addListener("click", () => {
      toggleHighlight(AdvancedMarkerElement, property);
    });
  }
}

function toggleHighlight(markerView, property) {
  if (markerView.content.classList.contains("highlight")) {
    markerView.content.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add("highlight");
    markerView.zIndex = 1;
  }
}

function buildContent(property) {
  const content = document.createElement("div");

  content.classList.add("property");
  content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}"></i>
        <span class="fa-sr-only">${property.type}</span>
    </div>
    <div class="details">
        <div class="visit">${property.visit}</div>
        <div class="address">${property.address}</div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
            <span class="fa-sr-only">bedroom</span>
            <span>${property.bed}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
            <span class="fa-sr-only">bathroom</span>
            <span>${property.bath}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
            <span class="fa-sr-only">size</span>
            <span>${property.size} ft<sup>2</sup></span>
        </div>
        </div>
    </div>
    `;
  return content;
}

const properties = [
  { 
    address: "Killarney Mountain Lodge",
    description: "Hotel on Killarney Channel.",
    visit: "Must-visit spot",
    type: "home",
    bed: 3,
    bath: 2,
    size: 450,
    position: {
      lat: 45.970074027456945,
      lng: -81.50804157729885,
    },
  },
  {
    address: "Tar Vat Trail",
    description: "Hiking Trail starting at the Big Dipper",
    visit: "Must-visit spot",
    type: "tree",
    bed: 5,
    bath: 4.5,
    size: 300,
    position: {
      lat: 45.97022665335025,
      lng: -81.49045787753137
    },
  },
    { 
    address: "Killarney Lighthouse",
    description: "End of the Lighthouse Trail",
    visit: "Must-visit spot",
    type: "mountain",
    bed: 3,
    bath: 2,
    size: 450,
    position: {
      lat: 45.96857423595253,
      lng: -81.48900846012069,
    },
  },
    { 
    address: "Sportsman's Inn Restaurant",
    description: "End of the Lighthouse Trail",
    visit: "Can-skip spot",
    type: "utensils",
    bed: 3,
    bath: 2,
    size: 450,
    position: {
      lat: 45.97127504950274,
      lng: -81.51550075043795,
    },
  },
  
];

initMap();
