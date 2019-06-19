let card = document.querySelector("#card");
let mov = card.content.querySelector("#mov");
let target = document.getElementById("target");

fetch("https://api.themoviedb.org/3/movie/157336?api_key=b87d7664b3a521ad14526491b0c37dc9&append_to_response=videos,credits").then(blob => {
    return blob.json();
}).then(value => {
    let mydata = [];
    if(typeof(value) == "array"){
        mydata = value;
    }else{
        mydata.push(value);
    }
    console.log(mydata)
    for(let i = 0;i < mydata.length; i++){
        console.log(mydata[i])
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

        let type = "";
        for(let j = 0;j < mydata[i].genres.length;j++){
            if ( j === mydata[i].genres.length - 1){
                type += mydata[i].genres[j].name;
            } else {
                type += mydata[i].genres[j].name + ', ';
            }
        }

        let casting = mydata[i].credits.cast;
        let crew  = mydata[i].credits.crew;
        let vid = mydata[i].videos.results;

        let actor = [];
        let realisator = [];

        for(let j = 0; j < casting.length;j++){
            if(casting[j].character != undefined){
                actor.push(casting[j].name);
            }
        }
        for(let j = 0; j < crew.length;j++){
            if(crew[j].job == "Director"){
                realisator.push(crew[j].name);
            }
        }

        let date = new Date(mydata[i].release_date);

        imag.src = "https://image.tmdb.org/t/p/w500" + mydata[i].poster_path;
        h.innerHTML = mydata[i].title;
        year.innerHTML = date.getFullYear();
        genr.innerHTML = type;
        motit.innerHTML = mydata[i].title;
        bu.setAttribute("data-target", "#film"+i);
        idd.id = "film"+i;
        desc.innerHTML = mydata[i].overview;
        realis.innerHTML = realisator;
        act.innerHTML = actor;
        video.src = "https://www.youtube.com/embed/" + vid[vid.length - 1].key;
        target.appendChild(a);
    }

}).catch(error => {
    console.log(error)
})

