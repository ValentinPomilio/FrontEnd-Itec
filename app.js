const input = document.getElementById('busquedaInput')
const boton = document.getElementById('buscarBtn')
const contenedor = document.getElementById('albumsContainer')
const homeBtn = document.getElementById('homeBtn')
const profileBtn = document.getElementById('profileBtn')
const mainView = document.getElementById('mainView')
const detailsView = document.getElementById('detailsView')

const DISCOGS_TOKEN = 'eAIENoxlodwXBXuCXDJaAknObYEIHqThsHMkngib'
const BASE_URL = 'https://api.discogs.com/database/search'

boton.addEventListener('click', () => {
    const query = input.value.trim()
    if (!query) return alert('Debes ingresar un artista en el buscador!')
    mostrarVistaPrincipal()
    BuscarAlbums(query);
})

async function BuscarAlbums(query) {
    contenedor.innerHTML = '<p class="text-gray-500 text-center w-full">Cargando...</p>'
    try {
        const url = `${BASE_URL}?q=${query}&type=release&per_page=20&token=${DISCOGS_TOKEN}`
        const res = await fetch(url)
        if (!res.ok) throw new Error('Error en la búsqueda')
        const data = await res.json();
        renderAlbums(data.results);
    } catch (err) {
        contenedor.innerHTML = `<p class="text-red-600 text-center">${err.message}</p>`
    }
}

function renderAlbums(albums){
    contenedor.innerHTML = ''; 

    if (!albums.length){
        contenedor.innerHTML = '<p class="text-gray-500 text-center w-full">No se encontraron álbumes.</p>'
        return;
    }

    albums.forEach(albun => {
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded shadow text-center hover:shadow-lg transition flex flex-col justify-between';

        const portada = albun.cover_image
        const titulo = albun.title || 'Sin Título';
        const id = albun.id;

        card.innerHTML = `
            <div>
                <img src="${portada}" alt="${titulo}" class="w-full h-60 object-cover rounded-md mb-3">
                <h3 class="font-bold text-gray-800 mb-4 line-clamp-2">${titulo}</h3>
            </div>
            <div class="flex items-center justify-between gap-2 mt-auto" data-id="${id}">
                <button class="ver-detalles-btn bg-[#535353] text-white px-3 py-2 rounded-md hover:bg-[#636363] text-sm font-medium flex-grow text-center">
                    Ver detalles
                </button>
                ${crearEstrellaFavoritoHTML(id)}
            </div>
        `;

        contenedor.appendChild(card)
    });
    agregarEventosCards();
}

function crearEstrellaFavoritoHTML(id){
    const esFavorito = obtenerPuntuacion(id) === 1;
    const colorClase = esFavorito ? 'text-yellow-400' : 'text-gray-300';
    return `<span class="estrella cursor-pointer text-3xl transition select-none ${colorClase}">&#9733;</span>`;
}

function agregarEventosCards(){
    const estrellas = document.querySelectorAll('.estrella');
    estrellas.forEach(e => {
        e.onclick = (event) => {
            event.stopPropagation(); //detecta el elemento mas interno (ya que esta dentro de una pantalla, para que no detecte el click en la pantalla)
            const id = e.parentElement.dataset.id;
            const estadoActual = obtenerPuntuacion(id);
            const nuevoEstado = estadoActual === 1 ? 0 : 1;
            
            guardarPuntuacion(id, nuevoEstado);
            e.parentElement.innerHTML = `
                <button class="ver-detalles-btn bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 text-sm font-medium flex-grow text-center">
                    Ver detalles
                </button>
                ${crearEstrellaFavoritoHTML(id)}
            `;
            agregarEventosCards();
        };
    });

    const botonesDetalles = document.querySelectorAll('.ver-detalles-btn');
    botonesDetalles.forEach(b => {
        b.onclick = () => {
            const id = b.parentElement.dataset.id;
            verDetallesAlbum(id);
        };
    });
}

async function verDetallesAlbum(id) {
    mainView.classList.add('hidden'); //oculta la vista principal => hace que ese elemento sea invisible
    detailsView.classList.remove('hidden');
    detailsView.innerHTML = '<p class="text-gray-500 text-center w-full">Cargando detalles...</p>';

    try {
        const res = await fetch(`https://api.discogs.com/releases/${id}?token=${DISCOGS_TOKEN}`);
        if (!res.ok) throw new Error('No se pudieron cargar los detalles del álbum');
        const data = await res.json();
        renderDetalles(data);
    } catch (err) {
        detailsView.innerHTML = `<p class="text-red-600 text-center">${err.message}</p>`;
    }
}

function renderDetalles(album) {
    const titulo = album.title || 'Sin Título';
    const artista = album.artists ? album.artists[0].name : 'Artista Desconocido';
    const portada = album.images ? album.images[0].uri : '';
    const tracklist = album.tracklist || [];

    let cancionesHTML = '';
    if (tracklist.length === 0) {
        cancionesHTML = '<p class="text-gray-400 italic">No hay lista de canciones disponible.</p>';
    } else {
        cancionesHTML = '<ul class="divide-y divide-gray-700">';
        tracklist.forEach(track => {
            cancionesHTML += `
                <li class="py-3 flex justify-between text-gray-300">
                    <span>${track.position}. ${track.title}</span>
                    <span class="text-gray-500">${track.duration || '--:--'}</span>
                </li>
            `;
        });
        cancionesHTML += '</ul>';
    }

    detailsView.innerHTML = `
        <button id="backBtn" class="mb-6 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
            ← Volver
        </button>
        <div class="bg-[#2d2d2d] p-6 rounded-lg shadow-xl flex flex-col md:flex-row gap-6 mb-6">
            ${portada ? `<img src="${portada}" alt="${titulo}" class="w-full md:w-64 h-64 object-cover rounded-md shadow-md">` : ''}
            <div class="flex flex-col justify-center">
                <h2 class="text-3xl font-bold text-white mb-2">${titulo}</h2>
                <p class="text-xl text-blue-400 font-semibold mb-2">${artista}</p>
                <p class="text-gray-400">Año: ${album.year || 'N/A'}</p>
            </div>
        </div>
        <div class="bg-[#2d2d2d] p-6 rounded-lg shadow-xl">
            <h3 class="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Lista de Canciones</h3>
            ${cancionesHTML}
        </div>
    `;

    document.getElementById('backBtn').onclick = mostrarVistaPrincipal;
}

function mostrarVistaPrincipal() {
    detailsView.classList.add('hidden');
    mainView.classList.remove('hidden');
}

function guardarPuntuacion(id, rating){
    const ratings = JSON.parse(localStorage.getItem('ratings') || '{}');
    if (rating === 0) {
        delete ratings[id];
    } else {
        ratings[id] = rating;
    }
    localStorage.setItem('ratings', JSON.stringify(ratings))
}

function obtenerPuntuacion(id){
    const ratings = JSON.parse(localStorage.getItem('ratings') || '{}')
    return ratings[id] || 0;
}

profileBtn.addEventListener('click', async () => {
    mostrarVistaPrincipal()
    const ratings = JSON.parse(localStorage.getItem('ratings') || '{}')
    const ids = Object.keys(ratings).filter(id => ratings[id] === 1);
    
    if (ids.length === 0){
        contenedor.innerHTML = '<p class="text-gray-500 text-center w-full">No tienes ningún álbum en favoritos todavía...</p>'
        return;
    }
    contenedor.innerHTML = '<p class="text-gray-500 text-center w-full">Cargando tus favoritos...</p>'

    try{
        const detallesPromises = ids.map(id => 
            fetch(`${BASE_URL}?release_id=${id}&token=${DISCOGS_TOKEN}`).then(r => r.json())
        );
        const detalles = await Promise.all(detallesPromises)
        const albums = detalles.flatMap(d => d.results || []);
        renderAlbums(albums);
    } catch (err){
        contenedor.innerHTML = `<p class="text-red-600 text-center">${err.message}</p>`
    }
});

homeBtn.addEventListener('click', async () =>{
    mostrarVistaPrincipal()
    async function buscarAlbumsAlAzar() {
        contenedor.innerHTML = '<p class="text-gray-500 text-center w-full">Cargando álbumes...</p>'
        try {
            const randomPage = Math.floor(Math.random() * 100) + 1
            const url = `${BASE_URL}?type=release&page=${randomPage}&per_page=12&token=${DISCOGS_TOKEN}`
            const res = await fetch(url)
            if (!res.ok) throw new Error('Error al obtener álbumes')
            const data = await res.json()
            renderAlbums(data.results)
        } catch (err) {
            contenedor.innerHTML = `<p class="text-red-600 text-center">${err.message}</p>`
        }
    }
    buscarAlbumsAlAzar();
})