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

// Action
let target4 = document.getElementById("target4");
let colla4 = document.getElementById("target4_ol");

// Comédie
let target5 = document.getElementById("target5");
let colla5 = document.getElementById("target5_ol");

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
        let moann = a.querySelector(".annee");
        let mogen = a.querySelector(".genre");
        let motit = a.querySelector(".modal-title");
        let bu = a.querySelector(".btn-hover");
        let idd = a.querySelector(".fademovie");
        let vid = a.querySelector(".card__video");

        
        imag.src = mydata[i].img;
        h.innerHTML = mydata[i].name;
        year.innerHTML = mydata[i].annee;

        // Vérifier le tableau genre
        verif = mydata[i].genre;

        do{
            let len = verif.length;
            let moins = len - 1;
            if (y < moins){
                genr.innerHTML += mydata[i].genre[y] + ", ";
            } else {
                genr.innerHTML += mydata[i].genre[y];
            }
            
            y++;
        } while (y < verif.length);
        
        y = 0;
        
        motit.innerHTML = mydata[i].name;

        bu.setAttribute("data-target", "#film"+i);
        idd.id = "film"+i;

        desc.innerHTML = mydata[i].descrip;
        realis.innerHTML = mydata[i].realisateur;
        act.innerHTML = mydata[i].acteurs;
        moann.innerHTML = mydata[i].annee;
        mogen.innerHTML = mydata[i].genre;
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
            let cln2 = a.cloneNode(true);
            target2.appendChild(cln2);
        }

        // Si il y a "thriller"
        verif_thr = verif.indexOf("thriller");

        if(verif_thr == 0 || verif_thr == 1){
            let cln3 = a.cloneNode(true);
            target3.appendChild(cln3);
        }

        // Si il y a "action"
        verif_act = verif.indexOf("action");

        if(verif_act == 0 || verif_act == 1){
            let cln4 = a.cloneNode(true);
            target4.appendChild(cln4);
        }

        // Si il y a "comedie"
        verif_com = verif.indexOf("comédie");

        if(verif_com == 0 || verif_com == 1){
            let cln5 = a.cloneNode(true);
            target5.appendChild(cln5);
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