


var map = L.map('map').setView([-33.01789, -71.55351], 17);
		
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 35,
}).addTo(map);

var locations = [
  { position: [-33.34787728855459, -71.346947425633], number: 1, name: "<strong>Mercado Rio Tinto</strong>", foto: "<a href='https://www.riotintocasablanca.cl/' target='_blank'><img src='img/001_rio_tinto.jpg' alt='Placeholder Image 1'></a>"  },
  { position: [-32.943689652096694, -71.54676003255767], number: 2, name: "<strong>Dunas de Concón</strong>", foto: "<a href='https://www.viagensecaminhos.com/concon-chile/' target='_blank'><img src='img/002_dunas.jpg' alt='Placeholder Image 1'></a>"  },
  { position: [-32.92900261279856, -71.55135075300018], number: 3, name: "<strong>Punta Concón</strong>", foto: "<a href='https://www.viagensecaminhos.com/concon-chile/' target='_blank'><img src='img/003_faro.jpg' alt='Placeholder Image 1'></a>"  },
  { position: [-32.96257639913099, -71.5469362127918], number: 4, name: "<strong>Reñaca Playa</strong>", foto: "<a href='https://dicaschile.com.br/vina-del-mar/praia-renaca-em-vina-del-mar/' target='_blank'><img src='img/004_leao.jpg' alt='Placeholder Image 1'></a>"  },
  { position: [-33.01900373684291, -71.55950851504682], number:5, name: "<strong>Casino de Viña del Mar</strong>", foto: "<a href='https://dicaschile.com.br/vina-del-mar/cassino-municipal-de-vina-del-mar/' target='_blank'><img src='img/005_casino.jpg' alt='Placeholder Image 1'></a>" },
  { position: [-33.0197640060146, -71.54992372252393], number:6, name: "<strong>Estatua Moai - Museo Fonk</strong>", foto: "<a href='https://likechile.com/blog/vina-del-mar-2/museu-fonck/' target='_blank'><img src='img/006_museu_fonk.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.01902684927862, -71.56485371930381], number:7, name: "<strong>Castillo Wulff</strong>", foto: "<a href='https://likechile.com/blog/vina-del-mar-2/castillo-wulff/' target='_blank'><img src='img/007_castelo_wulff.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.02323086163202, -71.567266226511], number:8, name: "<strong>Relógio de Flores</strong>", foto: "<a href='https://likechile.com/blog/vina-del-mar-2/relogio-de-flores-vina-del-mar/' target='_blank'><img src='img/008_relogio_flores.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.04444646444338, -71.60473881212691], number:9, name: "<strong>Jumbo - Shopping Portal Valparaiso</strong>", foto: "<a href='https://dicaschile.com.br/valparaiso/shoppings-em-valparaiso/' target='_blank'><img src='img/009_jumbo_shopping.jpg' alt='Placeholder Image 1'></a>" },
  { position: [-33.043026861348665, -71.60482786508227], number:10, name: "<strong>Ascensor Baron</strong>", foto: "<a href='https://es-m-wikipedia-org.translate.goog/wiki/Ascensor_Bar%C3%B3n?_x_tr_sl=es&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=sc' target='_blank'><img src='img/010_ascensor_baron.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.04220656137469, -71.60412169385239], number:11, name: "<strong>Mirador Baron</strong>", foto: "<a href='https://vlpo.cl/mirador-diego-portales/' target='_blank'><img src='img/011_mirador_baron.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.04445585795568, -71.62044447033308], number:12, name: "<strong>Arco Britânico</strong>", foto: "<a href='https://vlpo.cl/arco-britanico/' target='_blank'><img src='img/012_arco_britanico.jpg' alt='Placeholder Image 1'></a>" },
  { position: [-33.053336992276115, -71.62272192481763], number:13, name: "<strong>La Sebastiana – Pablo Neruda</strong>", foto: "<a href='https://dicaschile.com.br/valparaiso/casa-la-sebastiana-de-pablo-neruda-em-valparaiso/' target='_blank'><img src='img/013_la_sebastiana.jpg' alt='Placeholder Image 1'></a>" },
  { position: [-33.0421535401355, -71.62869758354879], number:14, name: "<strong>Estacionamento Urriola – Maria Pilar</strong>", foto: "<a href='https://www.facebook.com/estacionamientourriola/about/' target='_blank'><img src='img/014_urriola.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.04398499579588, -71.62625545160526], number:15, name: "<strong>Ascensor Reina Victoria</strong>", foto: "<a href='https://es-m-wikipedia-org.translate.goog/wiki/Ascensor_Reina_Victoria?_x_tr_sl=es&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=sc' target='_blank'><img src='img/015_reina_victoria.jpg' alt='Placeholder Image 1'></a>" },
  { position: [-33.04288535015784, -71.62624029017034], number:16, name: "<strong>Escada Piano ( Cerro Alegre )</strong>", foto: "<a href='https://vlpo.cl/escalera-de-piano/' target='_blank'><img src='img/016_escada_piano.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.04254339290081, -71.62534027516584], number:17, name: "<strong>Paseo Atkinson – Mirador</strong>", foto: "<a href='https://vlpo.cl/mirador-paseo-atkinson/' target='_blank'><img src='img/017_paseo_atkinson.jpg' alt='Placeholder Image 1'></a>" },
  { position: [-33.04216969490044, -71.62634799670637], number:18, name: "<strong>Séptima Pasteleria ( Cerro Concepcion )</strong>", foto: "<a href='https://www.instagram.com/septima.pasteleria/' target='_blank'><img src='img/018_septima_pasteleria.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.04119970417488, -71.62670600247357], number:19, name: "<strong>Paseo Gervasoni</strong>", foto: "<a href='https://vlpo.cl/paseo-gervasoni/' target='_blank'><img src='img/019_paseo_gervasoni.jpg' alt='Placeholder Image 1'></a>" },
  { position: [-33.0413359773646, -71.62765840479327], number:20, name: "<strong>Pasaje Gálvez Arte Callejero – Escorregador</strong>", foto: "<a href='https://apuntesyviajes.com/2020/05/07/el-envolvente-pasaje-galvez-del-cerro-concepcion/' target='_blank'><img src='img/020_escorregador.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.04105192713863, -71.6280518540769], number:21, name: "<strong>Escada Colorida – Fisher</strong>", foto: "<a href='https://vlpo.cl/escalera-fischer/' target='_blank'><img src='img/021_escada_colorida.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.04180468367999, -71.62860416881307], number:22, name: "<strong>Porta Vermelha</strong>", foto: "<a href='https://apuntesyviajes.com/2022/02/12/como-llegar-a-la-puerta-roja-en-valparaiso/' target='_blank'><img src='img/022_porta_vermelha.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.0424716740458, -71.63064379907598], number:23, name: "<strong>La Dulceria</strong>", foto: "<a href='https://www.instagram.com/ladulceriavalpo/' target='_blank'><img src='img/023_la_dulceria.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.03846155078051, -71.62880526310168], number:24, name: "<strong>Plaza Sotomayor</strong>", foto: "<a href='https://dicaschile.com.br/valparaiso/plaza-sotomayor-em-valparaiso/' target='_blank'><img src='img/024_plaza.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.02228696125357, -71.6481237208004], number:25, name: "<strong>Faro Punta Angeles</strong>", foto: "<a href='https://likechile.com/blog/valparaiso-2/farol-punta-angeles-o-primeiro-farol-construiido-no-chile/' target='_blank'><img src='img/025_faro_punta_angeles.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.0275506534088, -71.6530909362516], number:26, name: "<strong>Mirador Viento Sur </strong>", foto: "<a href='https://vlpo.cl/mirador-faro-punta-angeles/' target='_blank'><img src='img/026_mirador_faro.jpeg' alt='Placeholder Image 1'></a>" },
  { position: [-33.01773047807142, -71.55303276568115], number:27, name: "<strong>A Mano Gin & Burgers</strong>", foto: "<a href='https://www.instagram.com/a_mano_ginyburgers/' target='_blank'><img src='img/027_mano_gin_burger.jpg' alt='Placeholder Image 1'></a>" },
  { position: [-33.114132851219104, -71.66910590700111], number:28, name: "<strong>Hospedagem - Airbnb</strong>", foto: "<a href='https://www.airbnb.com.br/' target='_blank'><img src='img/028_house.jpg' alt='Placeholder Image 1'></a>" }
  
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
/*  const markers = {
    melbourne: L.marker([-32.94359606470383, -71.54686387893258]),
    sydney: L.marker([-32.92883723251868, -71.55135193824881]),
  };*/

// Função para centralizar o mapa no marcador
  function centerMap(lat, lng) {
    map.setView([lat, lng], 17); // 14   Centraliza e ajusta o zoom do mapa
    for (const marker in markers) {
      if (markers[marker].getLatLng().lat === lat && markers[marker].getLatLng().lng === lng) {
        markers[marker].openPopup(); // Abre o popup do marcador correspondente
        }
      }
  }
