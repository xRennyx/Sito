const dischi = [
    { nome: "Disco d'Oro", img: "https://media.gettyimages.com/id/124678796/it/vettoriale/disco-doro.jpg?s=612x612&w=gi&k=20&c=YgcEzxp1PhtMeTfnwLExouqu2qi6L-8Or4KSyFKnOlk=", descrizione: "Album: Più di 25.000 copie vendute\n Singolo: Più di 100.000 copie vendute" },
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
    container.innerHTML = ""; // pulisce il contenuto se già cliccato

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

    this.disabled = true; // disabilita il pulsante dopo il primo clic
});