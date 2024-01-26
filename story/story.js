async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const { Place } = await google.maps.importLibrary("places");
  const map = new Map(document.getElementById("map"), {
    center: {lat: 45.9701, lng: -81.5080},
    zoom: 14,
    mapId: "4504f8b37365c3d0",
  });
  const parser = new DOMParser();
  // A marker customized using a place icon and color, name, and geometry.
  const place = new Place({
    id: "ChIJBWXVQVZzLk0RDaSVKMHkanE",
  });

  // Call fetchFields, passing the desired data fields.
  await place.fetchFields({
    fields: [
      "location",
      "displayName",
      "svgIconMaskURI",
      "iconBackgroundColor",
    ],
  });

  const pinElement = new PinElement({
    background: place.iconBackgroundColor,
    glyph: new URL(String(place.svgIconMaskURI)),
  });
  const placeIconMarkerView = new AdvancedMarkerElement({
    map,
    position: place.location,
    content: pinElement.element,
    title: place.displayName,
  });
  // A marker with a with a URL pointing to a PNG.
  const dinnerplateImg = document.createElement("img");

  dinnerplateImg.src =
    "dinner.jpg";
  const dinnerplateMarkerView = new AdvancedMarkerElement({
    map,
    position: {lat: 45.971284876286475, lng: -81.51550012822338},
    content: dinnerplateImg,
    title: "A marker using a custom PNG Image",
  });
  // A marker with a custom SVG glyph.
  const glyphImg = document.createElement("img");

  glyphImg.src = "hotel.svg";

  const glyphSvgPinElement = new PinElement({
    glyph: glyphImg,
  });
  const glyphSvgMarkerView = new AdvancedMarkerElement({
    map,
    position: {lat: 45.970074027456945, lng: -81.50804157729885},
    content: glyphSvgPinElement.element,
    title: "A marker using a custom SVG for the glyph.",
  });
}
initMap();
