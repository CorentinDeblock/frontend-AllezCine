// Selectionner le template
let card = document.querySelector("#card");
let mov = card.content.querySelector("#mov");

// All
let target = document.getElementById("target");
let colla = document.getElementById("target_ol");

// Aventure
let target2 = document.getElementById("target2");
let colla2 = document.getElementById("target2_ol");

// Thriller
let target3 = document.getElementById("target3");
let colla3 = document.getElementById("target3_ol");

// Verif
let verif = "";
let verif_ave = "";
let y = 0;

fetch('assets/js/movies.json').then(blob => {
    return blob.json();
}).then(value => {
    let mydata = value;
    for(let i = 0;i < mydata.length; i++){
        let a = document.importNode(mov, true);
        let imag = a.querySelector(".card-img-top");
        let h = a.querySelector(".card__name");
        let desc = a.querySelector(".descri");
        let year = a.querySelector(".card__years");
        let realis = a.querySelector(".reali");
        let genr = a.querySelector(".card__genre");
        let act = a.querySelector(".acteurs");
        let motit = a.querySelector(".modal-title");
        let bu = a.querySelector(".btn-hover");
        let idd = a.querySelector(".fademovie");
        let vid = a.querySelector(".card__video");

        
        imag.src = mydata[i].img;
        h.innerHTML = mydata[i].name;
        year.innerHTML = mydata[i].annee;
        genr.innerHTML = mydata[i].genre;
        motit.innerHTML = mydata[i].name;

        bu.setAttribute("data-target", "#film"+i);
        idd.id = "film"+i;

        desc.innerHTML = mydata[i].descrip;
        realis.innerHTML = mydata[i].realisateur;
        act.innerHTML = mydata[i].acteurs;
        vid.src = mydata[i].trailerYtb;
        


        if( i < 6){
            target.appendChild(a);
        } else{
            colla.appendChild(a);
        }

        // Vérifier le tableau genre
        verif = mydata[i].genre;
        
        // Si il y a "aventure"
        verif_ave = verif.indexOf("aventure");

        if(verif_ave == 0 || verif_ave == 1){
            target2.appendChild(a);
            target.appendChild(a);
        }

        // Si il y a "thriller"
        verif_thr = verif.indexOf("thriller");

        if(verif_thr == 0 || verif_thr == 1){
            target3.appendChild(a);
        }
    }

}).catch(error => {
    console.log(error)
})

let aa = "";

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