// Script pour l'Observatoire PNR Landes de Gascogne

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Gestion dynamique du lien actif ---
    // Cette fonction vérifie l'URL de la page courante et ajoute
    // la classe 'active' au lien de navigation correspondant.
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Pour les pages d'accueil, cela peut être index.html ou juste '/'
        if (currentPath === '/' || currentPath === '/index.html') {
             if (link.getAttribute('href') === 'index.html') {
                link.classList.add('active');
             } else {
                link.classList.remove('active');
             }
        } 
        // Pour les autres pages (geographie.html, etc.)
        else if (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== 'index.html') {
            link.classList.add('active');
        } 
        // Supprime l'active des autres liens s'il existe
        else {
            if (currentPath.includes(link.getAttribute('href'))) {
                // do nothing
            } else {
                 link.classList.remove('active');
            }
        }
    });

    console.log("Observatoire du Territoire - Chargé de mission actif. Pages structurées.");
});