// Selectionner le template
let shop = document.querySelector("#shop__gauche");
let movshop = shop.content.querySelector("#shop-gauche");

// All
let targetshop = document.getElementById("target_shop");
let header1 = new Headers();
header1.set("Content-type","application/json")

fetch('assets/js/movies.json',{
    headers:header1
}).then(blob => {
    return blob.json();
}).then(value => {
    let myda = value;
    for(let i = 0;i < 8; i++){
        let b = document.importNode(movshop, true);

        
        
    }

}).catch(error => {
    console.log(error)
})


// SHOP CARD



