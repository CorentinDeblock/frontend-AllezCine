let card = document.querySelector("#card");
let mov = card.content.querySelector("#mov");
let target = document.getElementById("target");

fetch('assets/js/movies.json').then(blob => {
    return blob.json();
}).then(value => {
    let mydata = value;


    for(let i = 0;i < mydata.length; i++){
        let a = document.importNode(mov, true);
        let imag = a.querySelector(".card-img-top");
        let h = a.querySelector(".card__name");
        let year = a.querySelector(".card__years");
        let genr = a.querySelector(".card__genre");
        let motit = a.querySelector(".modal-title");
        let idd = a.querySelector(".fademovie");
        let bu = a.querySelector(".btn-primary");
        let desc = a.querySelector(".descri");
        let realis = a.querySelector(".reali");
        let act = a.querySelector(".acteurs");
        let vid = a.querySelector(".video");


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
        target.appendChild(a);
    }

}).catch(error => {
    console.log(error)
})

