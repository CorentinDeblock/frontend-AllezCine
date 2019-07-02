let result = prompt("Bonjour et bienvenue sur notre site.\nVeuillez confirmer que vous avez bien 18 ans en entrant votre âge.");

if (result >= 18) {
    window.alert(`Bienvenue sur le site.`);
} else {
    window.alert(`Désolé. Tu n'as pas l'âge requis. Redirection...`);
    document.location.href="https://www.imdb.com";
}
