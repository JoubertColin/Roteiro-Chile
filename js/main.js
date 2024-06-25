


var map = L.map('map').setView([-33.01789, -71.55351], 13);
		
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
}).addTo(map);

var locations = [
  { position: [-33.34787728855459, -71.346947425633], number: 1, name: "<strong>Mercado Rio Tinto</strong>", foto: "<a href='https://www.riotintocasablanca.cl/' target='_blank'><img src='img/001_rio_tinto.jpg' alt='Placeholder Image 1'></a>"  },
  { position: [-32.943689652096694, -71.54676003255767], number: 2, name: "<strong>Dunas de Concón</strong>", foto: "<a href='https://www.viagensecaminhos.com/concon-chile/' target='_blank'><img src='img/002_dunas.jpg' alt='Placeholder Image 1'></a>"  },
  { position: [-32.92900261279856, -71.55135075300018], number: 3, name: "<strong>Punta Concón</strong>", foto: "<a href='https://www.viagensecaminhos.com/concon-chile/' target='_blank'><img src='img/003_faro.jpg' alt='Placeholder Image 1'></a>"  },
  { position: [-32.96257639913099, -71.5469362127918], number: 4, name: "<strong>Reñaca Playa</strong>", foto: "<a href='https://prefiromochilar.com.br/roteiro-vina-del-mar-e-arredores/#:~:text=A%20Playa%20Re%C3%B1aca%20possui%20a,raz%C3%A3o%20%C3%B3bvia%20da%20nossa%20visita).' target='_blank'><img src='img/004_leao.jpg' alt='Placeholder Image 1'></a>"  }
];

locations.forEach(function(location) {
  var customIcon = L.divIcon({
    html: '<div class="custom-marker">' + location.number + '</div>',
    className: '',
    iconSize: [30, 30]
  });

  L.marker(location.position, { icon: customIcon }).addTo(map)
  .bindPopup(location.name + location.foto);
});

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

/*const map = L.map('map').setView([-33.01789, -71.55351], 10);*/
// Adiciona uma camada de mapa base (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

// Adiciona marcadores
  const markers = {
    melbourne: L.marker([-32.94359606470383, -71.54686387893258]),
    sydney: L.marker([-32.92883723251868, -71.55135193824881]),
  };

// Função para centralizar o mapa no marcador
  function centerMap(lat, lng) {
    map.setView([lat, lng], 14); // Centraliza e ajusta o zoom do mapa
    for (const marker in markers) {
      if (markers[marker].getLatLng().lat === lat && markers[marker].getLatLng().lng === lng) {
        markers[marker].openPopup(); // Abre o popup do marcador correspondente
        }
      }
  }
