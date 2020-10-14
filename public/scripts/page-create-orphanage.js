// create map
const map = L.map('mapid').setView([-23.6244446,-46.5649414], 15);

// create and add tileLayer
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon  
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})

let marker;

// create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove icon layer
  marker && map.removeLayer(marker)

  // add icon layer
  marker = L.marker([lat, lng], { icon })
  .addTo(map)
})


// add photos/link
function addPhotoField() {
  // get container #images
  const container = document.querySelector('#images')

  // get copy container .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')

  // clone last image
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  
  // verify empty fields
  const input = newFieldContainer.children[0]
    if(input.value == "") {
      return
    }
  // clean clone field
  input.value = ""

  // add clone container images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if(fieldsContainer.length < 2) {
    // clear field value
    span.parentNode.children[0].value = ""
    return
  }
  // remove field
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // remove class .active (buttons)
  document.querySelectorAll('.button-select button')
  .forEach( button => button.classList.remove('active') )
    
  // get clicked button
  const button = event.currentTarget
  button.classList.add('active')

  //update input hidden with select value
  const input = document.querySelector('[name="open_on_weekends"]')

  input.value = button.dataset.value
}
