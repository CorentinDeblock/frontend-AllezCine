// FEATURED MOVIES
// Selectionner le template
let card = document.querySelector(".card");
let mov = document.getElementById("templateMov");

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

// All
let targetshop = document.getElementById("target_shop");


// Verif
let verif = "";
let verif_ave = "";
let y = 0;


function templateCopy(tmp,data){
    let a = tmp.content.cloneNode(true);
    let imag = a.getElementById("imgMov");
    let h = a.querySelector(".card__name");
    let desc = a.querySelector(".descri");
    let year = a.querySelector(".card__years");
    let realis = a.querySelector(".reali");
    let act = a.querySelector(".acteurs");
    let motit = a.querySelector(".modal-title");

    let moann = a.querySelector(".annee");
    let mogen = a.querySelector(".genre");
    //let prix = a.querySelector("shop__price");

    imag.src = data.img;
    h.innerHTML = data.name;
    year.innerHTML = data.annee;
    //prix.innerHTML = mya.prix + " euros";
    desc.innerHTML = data.descrip;
    realis.innerHTML = data.realisateur;
    act.innerHTML = data.acteurs;
    moann.innerHTML = data.annee;
    mogen.innerHTML = data.genre;
    motit.innerHTML = data.name;

    // Vérifier le tableau genre
    verif = data.genre;

    // ToggleData 1
    /*
    let element = a.querySelector("#toggleData");   

    element.onclick = function() {
        let test = a.querySelector(".modal-body");
        let ifra = "<iframe class='card__video' width='460' height='270' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        test.innerHTML += ifra;
        let vid = a.querySelector(".card__video");
        vid.src = data.trailerYtb;
    };*/
    // ToggleData2
    return a;
}

let header = new Headers();
header.set("Content-type","application/json")

fetch('assets/js/movies.json',{
    headers:header
}).then(blob => {
    return blob.json();
}).then(value => {
    let mydata = value;
    for(let i = 0;i < mydata.length; i++){
        let a = templateCopy(mov,mydata[i])

        let bu = a.querySelector(".btn-hover");
        let element2 = a.getElementById("toggleData");
        let genr = a.querySelector(".card__genre");
        let idd = a.querySelector(".fademovie");

        element2.onclick = function() {
            let test = a.querySelector(".modal-body");
            let ifra = "<iframe class='card__video' width='460' height='270' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            test.innerHTML += ifra;
            let vid = a.querySelector(".card__video");
            vid.src = mydata[i].trailerYtb;
        };

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
        
        // Ajouter le data-target et un id
        bu.setAttribute("data-target", "#film"+i);
        idd.id = "film"+i;

        // Ajouter sur featured movies les films
        if( i < 6){
            target.appendChild(a);
        } else{
            colla.appendChild(a);
        }

        
        // Ajouter sur shop movies
        if (i < 8){
            let cloneshop = a.cloneNode(true);
            targetshop.appendChild(templateCopy(mov,mydata[i])); 
        }
        

        // Vérifier le tableau genre
        verif = mydata[i].genre;
        
        // Si il y a "aventure"
        verif_ave = verif.includes("aventure");
        
        if(verif_ave){
            target2.appendChild(templateCopy(mov,mydata[i]));
        }

        // Si il y a "thriller"
        verif_thr = verif.includes("thriller");

        if(verif_thr){
            target3.appendChild(templateCopy(mov,mydata[i]));
        }

        // Si il y a "action"
        verif_act = verif.includes("action");

        if(verif_act){
            target4.appendChild(templateCopy(mov,mydata[i]));
        }

        // Si il y a "comedie"
        verif_com = verif.includes("comédie");

        if(verif_com){
            let copy = a;
            console.log(a);
            target5.appendChild(templateCopy(mov,mydata[i]));
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