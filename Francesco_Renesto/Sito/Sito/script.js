<script>
    const dischi = [
        { nome: "Disco d'Oro", img: "https://cdn-icons-png.flaticon.com/512/2583/2583424.png", descrizione: "Più di 25.000 copie vendute" },
        { nome: "Platino 1x", img: "https://cdn-icons-png.flaticon.com/512/2583/2583428.png", descrizione: "Più di 50.000 copie vendute" },
        { nome: "Platino 2x", img: "https://cdn-icons-png.flaticon.com/512/2583/2583445.png", descrizione: "Più di 100.000 copie vendute" },
        { nome: "Platino 3x", img: "https://cdn-icons-png.flaticon.com/512/2583/2583442.png", descrizione: "Più di 150.000 copie vendute" },
        { nome: "Platino 4x", img: "https://cdn-icons-png.flaticon.com/512/2583/2583421.png", descrizione: "Più di 200.000 copie vendute" },
        { nome: "Platino 5x", img: "https://cdn-icons-png.flaticon.com/512/2583/2583435.png", descrizione: "Più di 250.000 copie vendute" },
        { nome: "Platino 6x", img: "https://cdn-icons-png.flaticon.com/512/2583/2583448.png", descrizione: "Più di 300.000 copie vendute" },
        { nome: "Platino 7x", img: "https://cdn-icons-png.flaticon.com/512/2583/2583431.png", descrizione: "Più di 350.000 copie vendute" },
        { nome: "Platino 8x", img: "https://cdn-icons-png.flaticon.com/512/2583/2583440.png", descrizione: "Più di 400.000 copie vendute" },
        { nome: "Platino 9x", img: "https://cdn-icons-png.flaticon.com/512/2583/2583436.png", descrizione: "Più di 450.000 copie vendute" },
        { nome: "Disco di Diamante", img: "https://cdn-icons-png.flaticon.com/512/2583/2583422.png", descrizione: "Più di 500.000 copie vendute" },
    ];

    document.getElementById("mostraDischi").addEventListener("click", function() {
        const container = document.getElementById("dischiContainer");
        container.innerHTML = ""; // pulisce il contenuto se già cliccato

        dischi.forEach(disco => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${disco.img}" alt="${disco.nome}">
                <h3>${disco.nome}</h3>
                <p>${disco.descrizione}</p>
                <a href="#" class="card-button">Scopri di più</a>
            `;
            container.appendChild(card);
        });

        this.disabled = true; // disabilita il pulsante dopo il primo clic
    });
</script>
