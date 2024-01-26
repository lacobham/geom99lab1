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
        <div class="address">${property.address}</div>
        <div class="visit">${property.visit}</div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa fa-question fa-lg question" title="desc"></i>
            <span class="fa-sr-only">desc</span>
            <span>${property.question}</span>
        </div>
      </div>
    </div>
    `;
  return content;
}

const properties = [
  { 
    visit: "Must-visit spot",
    description: "Hotel on Killarney Channel.",
    address: "Killarney Mountain Lodge",
    type: "home",
    question: "Lodge with a great view.",
    position: {
      lat: 45.970074027456945,
      lng: -81.50804157729885,
    },
  },
  {
    visit: "Must-visit spot",
    description: "Hiking Trail starting at the Big Dipper",
    address: "Tar Vat Trail",
    type: "tree",
    question: "Approx 6km hike up to the lighthouse.",
    position: {
      lat: 45.97022665335025,
      lng: -81.49045787753137
    },
  },
    { 
    visit: "Must-visit spot",
    description: "End of the Lighthouse Trail",
    address: "Killarney Lighthouse",
    type: "mountain",
    question: "Lighthouse with a view of Georgian Bay.",
        position: {
      lat: 45.96857423595253,
      lng: -81.48900846012069,
    },
  },
    { 
    visit: "Can-skip spot",
    description: "End of the Lighthouse Trail",
    address: "Sportsman's Inn Restaurant",
    type: "utensils",
    question: "Classic bar and grill.",
        position: {
      lat: 45.97127504950274,
      lng: -81.51550075043795,
    },
  },
  
];

initMap();
