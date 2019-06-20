let card = document.querySelector("#card");
let mov = card.content.querySelector("#mov");
let target = document.getElementById("target");

class MovieGUI {
    constructor(api) {
        this.api = api
    }
    searchMovie() {
        fetch(this.api).then(blob => {
            return blob.json();
        }).then(result => {
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
            let video = a.querySelector(".video");
    
            imag.src = result.img;
            h.innerHTML = result.name;
            year.innerHTML = result.annee;
            genr.innerHTML = type;
            motit.innerHTML = result.name;
            bu.setAttribute("data-target", "#film"+i);
            idd.id = "film"+i;
            desc.innerHTML = result.descrip;
            realis.innerHTML = result.realisateur;
            act.innerHTML = result.acteur;
            video.src = result.trailer;
            target.appendChild(a);
            
        }).catch(error => {
            console.log("Into error")
            console.log(error);
        })
    }
}
let movieGui = new MovieGUI("assets/js/movies.json");
movieGui.searchMovie();
