// Selectionner le template
let shopcard = document.querySelector("#shop__droite");
let movshopcard = shopcard.content.querySelector("#carousel_shop");


// All
let targetshopcard = document.getElementById("target_shop_card");
let header2 = new Headers();
header2.set("Content-type","application/json")

fetch('assets/js/movies.json',{
    headers:header2
}).then(blob => {
    return blob.json();
}).then(value => {
    let dataval = value;

    for(let y = 0; y < dataval.length; y++){
        let c = document.importNode(movshopcard, true);
        let o = document.querySelector("#carousel_shop");
        
        if(y === 1){
            o.classList.add("active");
        }
        let vid = c.querySelector(".video-card-shop");
        let h = c.querySelector(".shop__name");
        let desc = c.querySelector(".shop__descri");
        let year = c.querySelector(".shop__years");
        let genr = c.querySelector(".shop__genre");
        let pri = c.querySelector(".shop__price");

        
        
        
        h.innerHTML = dataval[y].name;
        year.innerHTML = dataval[y].annee;
        genr.innerHTML = dataval[y].genre;
        pri.innerHTML = dataval[y].prix + " euros";
    
        desc.innerHTML = dataval[y].descrip;
        vid.src = dataval[y].trailerYtb;
        
        targetshopcard.appendChild(c);
        /*
        if(y == 0){
            console.log(o);
            o.classList.add("active");
        }
        */
    }

}).catch(error => {
    console.log(error)
})