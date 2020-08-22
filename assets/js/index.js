window.addEventListener('load', () => {
  findLocation();
});

async function findLocation() {
  const apiUrl = 'https://geoip-db.com/json/';
  const response = await fetch(apiUrl);

  if (response.ok) {
    let data = await response.json();

    // Update DOM with city
    showCity(data.city);
  } else {
    alert('HTTP-Error: ' + response.status);
  }
}

function showCity(city) {
  const cityElement = document.getElementById('city');
  const underlineElement = document.getElementById('underline');

  // Insert city into paragraph element
  cityElement.innerHTML = city;

  // Toggle animations
  cityElement.classList.add('animate-city');
  underlineElement.classList.add('animate-underline');
}
