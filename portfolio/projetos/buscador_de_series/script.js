async function buscarSeries() {
    const nome = document.getElementById('search-input').value;
    try {
        const r = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(nome)}`);
        const resultados = await r.json();
        const lista = document.getElementById('series-list');
        lista.innerHTML = ''; 

        resultados.forEach(item => {
            const s = item.show;
            const div = document.createElement('div');
            div.className = 'serie-item';
            div.innerHTML = `
                <img src="${s.image?.medium || ''}" alt="${s.name}" />
                <h3>${s.name}</h3>
                <p>${s.summary || ''}</p>
            `;
            lista.appendChild(div);
        });

        document.querySelector('.error-message').style.display = 'none';
    } catch {
        document.querySelector('.error-message').style.display = 'block';
    }
}