// Selectionner le template
let cardse = document.querySelector("#cardse");
let movse = cardse.content.querySelector("#ser");

// All
let targetse = document.getElementById("target-se");
let collase = document.getElementById("target_ol-se");

// Aventure
let target2se = document.getElementById("target2-se");
let colla2se = document.getElementById("target2_ol-se");

// Thriller
let target3se = document.getElementById("target3-se");
let colla3se = document.getElementById("target3_ol-se");

// Action
let target4se = document.getElementById("target4-se");
let colla4se = document.getElementById("target4_ol-se");

// Comédie
let target5se = document.getElementById("target5-se");
let colla5se = document.getElementById("target5_ol-se");

// Verif
let verifse = "";
let c = 0;

fetch('assets/js/series.json').then(blob => {
    return blob.json();
}).then(value => {
    let mydat = value;
    for(let i = 0;i < mydat.length; i++){
        let a = document.importNode(movse, true);
        let imag = a.querySelector(".card-img-top");
        let h = a.querySelector(".card__name");
        let desc = a.querySelector(".descri");
        let year = a.querySelector(".card__years");
        let realis = a.querySelector(".reali");
        let genr = a.querySelector(".card__genre");
        let act = a.querySelector(".acteurs");
        let moann = a.querySelector(".annee");
        let mogen = a.querySelector(".genre");
        let motit = a.querySelector(".modal-title");
        let bu = a.querySelector(".btn-hover");
        let idd = a.querySelector(".fademovie");
        let vid = a.querySelector(".card__video");

        
        imag.src = mydat[i].img;
        h.innerHTML = mydat[i].name;
        year.innerHTML = mydat[i].annee;

        // Vérifier le tableau genre
        verifse = mydat[i].genre;

        do{
            let lense = verifse.length;
            let moinsse = lense - 1;
            if (c < moinsse){
                genr.innerHTML += mydat[i].genre[c] + ", ";
            } else {
                genr.innerHTML += mydat[i].genre[c];
            }
            
            y++;
        } while (c < verifse.length);
        
        y = 0;
        
        motit.innerHTML = mydat[i].name;

        bu.setAttribute("data-target", "#film"+i);
        idd.id = "film"+i;

        desc.innerHTML = mydat[i].descrip;
        realis.innerHTML = mydat[i].realisateur;
        act.innerHTML = mydat[i].acteurs;
        moann.innerHTML = mydat[i].annee;
        mogen.innerHTML = mydat[i].genre;
        vid.src = mydat[i].trailerYtb;
        


        if( i < 6){
            targetse.appendChild(a);
        } else{
            collase.appendChild(a);
        }

        // Vérifier le tableau genre
        verifse = mydat[i].genre;
        
        // Si il y a "aventure"
        verifse_ave = verifse.indexOf("aventure");
        
        if(verifse_ave == 0 || verif_ave == 1){
            let cln2se = a.cloneNode(true);
            target2se.appendChild(cln2se);
        }

        // Si il y a "thriller"
        verifse_thr = verifse.indexOf("thriller");

        if(verifse_thr == 0 || verif_thr == 1){
            let cln3se = a.cloneNode(true);
            target3se.appendChild(cln3se);
        }

        // Si il y a "action"
        verifse_act = verifse.indexOf("action");

        if(verifse_act == 0 || verif_act == 1){
            let cln4se = a.cloneNode(true);
            target4se.appendChild(cln4se);
        }

        // Si il y a "comedie"
        verifse_com = verifse.indexOf("comédie");

        if(verifse_com == 0 || verif_com == 1){
            let cln5se = a.cloneNode(true);
            target5se.appendChild(cln5se);
        }
    }

}).catch(error => {
    console.log(error)
})


/*
    var x = document.getElementsByClassName("collapsed"); 
    if (x != null) {
        document.getElementById("btn-collap").innerHTML= "Plus de films";
    } else {
        document.getElementById("btn-collap").innerHTML = "Moins de films";
    }

	
function test(idselect){
    if(document.getElementsByClassName(idselect)){
        document.getElementsByClassName(idselect).innerHTML= "Plus de films";
    } 
}
test("btn-collap");
*/