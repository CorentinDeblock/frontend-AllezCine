let result = prompt(`BIENVENUE SUR LE SITE ALLOCINE!\n\nAttention, notre site est réservé à un public majeur. Veuillez nous confirmer que vous avez bien plus de 18 ans en entrant votre age dans le champ requis, puis cliquez sur OK.`);

if (result >= 18) {
    window.alert(`Bienvenue.`);
} else {
    window.alert(`Désolé. Tu n'as pas l'âge requis pour accéder au site.\n\nCliquer sur OK te renverra sur une autre page adaptée pour ton âge.`);
    setTimeout(document.location.href = "https://www.imdb.com");
}