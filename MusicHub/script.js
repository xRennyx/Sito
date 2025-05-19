const dischi = [
    { nome: "Disco d'Oro", img: "https://img.pixers.pics/pho_wat(s3:700/FO/62/20/51/45/700_FO62205145_cf87e6746076eaf9a4afd527553b5d8d.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/poster-premio-disco-music-disco-d-39-oro-isolato-su-nero.jpg.jpg", descrizione: "Album: Più di 25.000 copie vendute\n Singolo: Più di 100.000 copie vendute" },
    { nome: "Platino 1x", img: "https://img.freepik.com/vettori-premium/disco-di-platino_131362-6.jpg", descrizione: "Album: Più di 50.000 copie vendute\n Singolo: Più di 200.000 copie vendute" },
    { nome: "Platino 2x", img: "https://img.freepik.com/vettori-premium/disco-di-platino_131362-6.jpg", descrizione: "Album: Più di 100.000 copie vendute\n Singolo: Più di 400.000 copie vendute" },
    { nome: "Platino 3x", img: "https://img.freepik.com/vettori-premium/disco-di-platino_131362-6.jpg", descrizione: "Album: Più di 150.000 copie vendute\n Singolo: Più di 600.000 copie vendute" },
    { nome: "Platino 4x", img: "https://img.freepik.com/vettori-premium/disco-di-platino_131362-6.jpg", descrizione: "Album: Più di 200.000 copie vendute\n Singolo: Più di 800.000 copie vendute" },
    { nome: "Platino 5x", img: "https://img.freepik.com/vettori-premium/disco-di-platino_131362-6.jpg", descrizione: "Album: Più di 250.000 copie vendute\n Singolo: Più di 1.000.000 copie vendute" },
    { nome: "Platino 6x", img: "https://img.freepik.com/vettori-premium/disco-di-platino_131362-6.jpg", descrizione: "Album: Più di 300.000 copie vendute\n Singolo: Più di 1.200.000 copie vendute" },
    { nome: "Platino 7x", img: "https://img.freepik.com/vettori-premium/disco-di-platino_131362-6.jpg", descrizione: "Album: Più di 350.000 copie vendute\n Singolo: Più di 1.400.000 copie vendute" },
    { nome: "Platino 8x", img: "https://img.freepik.com/vettori-premium/disco-di-platino_131362-6.jpg", descrizione: "Album: Più di 400.000 copie vendute\n Singolo: Più di 1.600.000 copie vendute" },
    { nome: "Platino 9x", img: "https://img.freepik.com/vettori-premium/disco-di-platino_131362-6.jpg", descrizione: "Album: Più di 450.000 copie vendute\n Singolo: Più di 1.800.000 copie vendute" },
    { nome: "Disco di Diamante", img: "https://gexachile.cl/cdn/shop/files/Discodiamanteessenceweb.jpg?v=1685127240", descrizione: "Album: Più di 500.000 copie vendute\n Singolo: Più di 2.000.000 copie vendute" },
];

document.getElementById("mostraDischi").addEventListener("click", function () {
    const container = document.getElementById("dischiContainer");
    
    // Verifica se i dischi sono già stati mostrati
    if (container.innerHTML !== "") {
        // Se sì, nascondi il contenuto
        container.innerHTML = "";
        this.innerText = "Mostra Dischi"; // Rinnova il testo del bottone
    } else {
        // Se no, mostra i dischi
        dischi.forEach(disco => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${disco.img}" alt="${disco.nome}">
                <h3>${disco.nome}</h3>
                <p>${disco.descrizione}</p>
            `;
            container.appendChild(card);
        });
        this.innerText = "Nascondi Dischi"; // Modifica il testo del bottone
    }
});