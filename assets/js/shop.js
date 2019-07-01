// Selectionner le template
let shop = document.querySelector("#shop__gauche");
let movshop = shop.content.querySelector("#shop-gauche");

// All
let targetshop = document.getElementById("target_shop");

fetch('assets/js/movies.json').then(blob => {
    return blob.json();
}).then(value => {
    let myda = value;
    for(let i = 0;i < 8; i++){
        let b = document.importNode(movshop, true);
        let imag = b.querySelector(".card-img-top");
        let h = b.querySelector(".card__name");
        let desc = b.querySelector(".descri");
        let year = b.querySelector(".card__prix");
        let realis = b.querySelector(".reali");
        let annee = b.querySelector(".card__years");
        let act = b.querySelector(".acteurs");
        let motit = b.querySelector(".modal-title");
        let bu = b.querySelector(".btn-hover");
        let idd = b.querySelector(".fademovie");
        let vid = b.querySelector(".card__video");

        
        imag.src = myda[i].img;
        h.innerHTML = myda[i].name;
        year.innerHTML = myda[i].prix + " euros";
        annee.innerHTML = myda[i].annee;
        motit.innerHTML = myda[i].name;

        bu.setAttribute("data-target", "#film"+i);
        idd.id = "film"+i;

        desc.innerHTML = myda[i].descrip;
        realis.innerHTML = myda[i].realisateur;
        act.innerHTML = myda[i].acteurs;
        vid.src = myda[i].trailerYtb;
        
        targetshop.appendChild(b);
        
    }

}).catch(error => {
    console.log(error)
})


// SHOP CARD



