const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar Pug como motor de vistas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Fortnite - Battle Royale',
    gameModes: [
      {
        name: 'Battle Royale',
        description: 'El modo clásico donde 100 jugadores luchan hasta que solo quede uno. Construye, recolecta armas y sobrevive.',
        icon: '🎮'
      },
      {
        name: 'Zero Build',
        description: 'Battle Royale sin construcción. Enfócate únicamente en la estrategia de combate y posicionamiento.',
        icon: '⚔️'
      },
      {
        name: 'Creative',
        description: 'Crea tus propios mundos, juegos y experiencias. Las posibilidades son infinitas.',
        icon: '🛠️'
      },
      {
        name: 'Save the World',
        description: 'Modo cooperativo PvE donde luchas contra hordas de zombies y defiendes tu base.',
        icon: '🧟'
      }
    ],
    skins: [
      {
        name: 'Jonesy',
        category: 'Icónico',
        description: 'El personaje más icónico de Fortnite'
      },
      {
        name: 'Peely',
        category: 'Icónico',
        description: 'El plátano más famoso del juego'
      },
      {
        name: 'Iron Man',
        category: 'Marvel',
        description: 'Colaboración con Marvel'
      },
      {
        name: 'Naruto',
        category: 'Anime',
        description: 'El ninja más poderoso'
      },
      {
        name: 'Darth Vader',
        category: 'Star Wars',
        description: 'El lado oscuro llega a Fortnite'
      },
      {
        name: 'Travis Scott',
        category: 'Música',
        description: 'Colaboración musical épica'
      }
    ],
    mapEvolution: [
      {
        season: 'Capítulo 1',
        description: 'El mapa original que comenzó todo. Tilted Towers era el punto más caliente.',
        year: '2017-2019'
      },
      {
        season: 'Capítulo 2',
        description: 'Un mapa completamente nuevo con nuevas ubicaciones y mecánicas de agua.',
        year: '2019-2020'
      },
      {
        season: 'Capítulo 3',
        description: 'Introducción de sliding y nuevas áreas como Tilted Towers reimaginado.',
        year: '2021-2022'
      },
      {
        season: 'Capítulo 4',
        description: 'Elementos futuristas, el Doom Slayer y nuevas dimensiones.',
        year: '2023-2024'
      },
      {
        season: 'Capítulo 5',
        description: 'Temática griega mitológica con poderes olímpicos.',
        year: '2024-2025'
      }
    ],
    liveEvents: [
      {
        name: 'Concierto de Travis Scott',
        date: 'Abril 2020',
        description: 'Más de 12 millones de jugadores experimentaron un concierto astronómico en vivo.'
      },
      {
        name: 'Concierto de Ariana Grande',
        date: 'Agosto 2021',
        description: 'Un viaje musical mágico a través del universo de Fortnite.'
      },
      {
        name: 'Evento del Agujero Negro',
        date: 'Octubre 2019',
        description: 'El final del Capítulo 1 que dejó el juego inaccesible por días.'
      },
      {
        name: 'Batalla contra Galactus',
        date: 'Diciembre 2020',
        description: 'Los jugadores pilotaron el Battle Bus en una épica batalla espacial.'
      },
      {
        name: 'The End - Capítulo 3',
        date: 'Diciembre 2022',
        description: 'Una batalla final contra el Chrome que transformó todo el mapa.'
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🎮 Servidor de Fortnite corriendo en http://localhost:${PORT}`);
  console.log(`📁 Directorio de vistas: ${path.join(__dirname, 'views')}`);
});
