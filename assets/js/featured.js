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

// SHOP MOVIES
let mov2 = document.getElementById("shop-gauche");

let targetshop = document.getElementById("target_shop");


// Verif
let verif = "";
let verif_ave = "";
let y = 0;


function templateCopy(tmp,data){
    let a = tmp.content.cloneNode(true);
    let imag = a.querySelector(".card-img-top");
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
        let b = templateCopy(mov2,mydata[i])
    
        let bu = a.querySelector(".btn-hover");
        let element2 = a.querySelector(".btn-mod");
        element2.className = "movi"+i;
        let el2 = a.querySelector(".movi"+i);

        let genr = a.querySelector(".card__genre");
        let idd = a.querySelector(".fademovie");

        let bb = b.querySelector(".card__prix");
        let element3 = b.querySelector("#toggleData2");
        
        let test = a.querySelector(".video_modal");

        // Ajouter le data-target et un id
        bu.setAttribute("data-target", "#film"+i);
        idd.id = "film"+i;
    
        el2.onclick = function(e) {
            if(!e.target.isEnable){
                let ifrm = document.createElement('iframe');
                ifrm.style.width = "100%";
                ifrm.style.height = "250px";
                ifrm.style.border = "0";

                // Placer dans le HTML
                let el = document.querySelector(`${bu.getAttribute("data-target")} .video_modal`);
                el.prepend(ifrm)

                // Mettre la src
                ifrm.src = mydata[i].trailerYtb;
                e.target.isEnable = true;    
            }
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

        // Ajouter sur featured movies les films
        if( i < 12){
            target.appendChild(a);
        } else{
            colla.appendChild(a);
        }

        
        // Ajouter sur shop movies
        if (i < 8){
            bb.innerHTML += mydata[i].prix;
            targetshop.appendChild(templateCopy(mov2,mydata[i])); 
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

let movserie = document.getElementById("templateMov2");

// All
let targets = document.getElementById("target-s");
let collas = document.getElementById("target_ol-s");

// Aventure
let target2s = document.getElementById("target2-s");
let colla2s = document.getElementById("target2_ol-s");

// Thriller
let target3s = document.getElementById("target3-s");
let colla3s = document.getElementById("target3_ol-s");

// Action
let target4s = document.getElementById("target4-s");
let colla4s = document.getElementById("target4_ol-s");

// Comédie
let target5s = document.getElementById("target5-s");
let colla5s = document.getElementById("target5_ol-s");

// SERIES
fetch('assets/js/series.json',{
    headers:header
}).then(blob => {
    return blob.json();
}).then(value => {
    let mydataserie = value;
    for(let i = 0;i < mydataserie.length; i++){
        let a = templateCopy(movserie,mydataserie[i])
    
        let bu = a.querySelector(".btn-hover");
        let element2 = a.querySelector(".btn-mod");
        element2.className = "movi"+i;
        let el2 = a.querySelector(".movi"+i);

        let genr = a.querySelector(".card__genre");
        let idd = a.querySelector(".fademovie");
        
        let test = a.querySelector(".video_modal");

        // Ajouter le data-target et un id
        bu.setAttribute("data-target", "#serie"+i);
        idd.id = "serie"+i;
    
        el2.onclick = function(e) {
            if(!e.target.isEnable){
                let ifrm = document.createElement('iframe');
                ifrm.style.width = "100%";
                ifrm.style.height = "250px";
                ifrm.style.border = "0";

                // Placer dans le HTML
                let el = document.querySelector(`${bu.getAttribute("data-target")} .video_modal`);
                el.prepend(ifrm)

                // Mettre la src
                ifrm.src = mydataserie[i].trailerYtb;
                e.target.isEnable = true;    
            }
        };

        do{
            let len = verif.length;
            let moins = len - 1;
            if (y < moins){
                genr.innerHTML += mydataserie[i].genre[y] + ", ";
            } else {
                genr.innerHTML += mydataserie[i].genre[y];
            }
            
            y++;
        } while (y < verif.length);
        
        y = 0;

        // Ajouter sur featured movies les films
        if( i < 12){
            targets.appendChild(a);
        } else{
            collas.appendChild(a);
        }


        // Vérifier le tableau genre
        verif = mydataserie[i].genre;
        
        // Si il y a "aventure"
        verif_ave = verif.includes("aventure");
        
        if(verif_ave){
            target2s.appendChild(templateCopy(movserie,mydataserie[i]));
        }

        // Si il y a "thriller"
        verif_thr = verif.includes("thriller");

        if(verif_thr){
            target3s.appendChild(templateCopy(movserie,mydataserie[i]));
        }

        // Si il y a "action"
        verif_act = verif.includes("action");

        if(verif_act){
            target4s.appendChild(templateCopy(movserie,mydataserie[i]));
        }

        // Si il y a "comedie"
        verif_com = verif.includes("comédie");

        if(verif_com){
            target5s.appendChild(templateCopy(movserie,mydataserie[i]));
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