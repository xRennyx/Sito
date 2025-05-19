/* Array di oggetti che rappresentano i vari “dischi”,
   ciascuno con nome, immagine e descrizione                */
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

/* Gestione del click sul pulsante con id="mostraDischi"      */
document.getElementById("mostraDischi").addEventListener("click", function() {
    const container = document.getElementById("dischiContainer"); // Dove inserire le card
    const button = this;                                         // Riferimento al pulsante
    
    // Se il container non è vuoto, i dischi sono già visibili
    if (container.innerHTML !== "") {
        container.innerHTML = "";        // Pulisce il contenitore
        button.innerText = "Mostra Dischi";
        return;                          // Esce dalla funzione
    }
    
    /* Altrimenti mostra i dischi con un breve effetto “loading” */
    button.innerText = "Caricamento...";
    button.disabled = true;
    
    let index = 0;
    const interval = setInterval(() => {
        if (index < dischi.length) {
            const disco = dischi[index];
            
            /* Crea la card HTML per il disco corrente           */
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${disco.img}" alt="${disco.nome}">
                <h3>${disco.nome}</h3>
                <p>${disco.descrizione}</p>
            `;
            container.appendChild(card); // Aggiunge la card al DOM
            index++;
        } else {
            clearInterval(interval);     // Quando finiti, ferma setInterval
            button.innerText = "Nascondi Dischi";
            button.disabled = false;
        }
    }, 400);  // Mostra una nuova card ogni 400 ms
});

/* Tooltips automatici per ogni paragrafo che contiene “EP”  */
document.addEventListener('DOMContentLoaded', function() {
    const epElements = document.querySelectorAll('p:contains("EP")'); // Selezione case-insensitive
    
    epElements.forEach(function(ep) {
        const tooltip = document.createElement('div');
        tooltip.className = 'ep-tooltip';
        tooltip.textContent =
            'EP sta per "Extended Play", un disco più lungo di un singolo ma più corto di un album completo.';
        
        /* Stili base del tooltip (se non definiti via CSS)      */
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = '#333';
        tooltip.style.color = 'white';
        tooltip.style.padding = '8px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.fontSize = '14px';
        tooltip.style.zIndex = '100';
        tooltip.style.display = 'none';
        tooltip.style.width = '200px';
        
        ep.parentNode.appendChild(tooltip); // Inserisce il tooltip accanto al paragrafo
        
        /* Mostra il tooltip al passaggio del mouse              */
        ep.addEventListener('mouseover', function(e) {
            tooltip.style.display = 'block';
            tooltip.style.top = (e.pageY - 50) + 'px';
            tooltip.style.left = (e.pageX + 10) + 'px';
        });
        
        /* Nasconde il tooltip quando il mouse esce              */
        ep.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });
});

/* 
   Selettore personalizzato jQuery “:contains” (versione case-insensitive)

   Aggiunge/ridefinisce :contains perché non distingua tra maiuscole e minuscole.
   Per ogni elemento DOM testato (arg. `a`), ricava il suo testo (.text()),
   lo converte in maiuscolo, fa lo stesso con la stringa passata al selettore
   (`m[3]`), quindi usa .indexOf() per verificare se la sottostringa è presente.
   Restituisce true quando trovata (indice ≥ 0), così si possono selezionare
   elementi con, ad es., $('p:contains("EP")') che combacia con “EP”, “ep”, “Ep”, ecc.
*/
jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};