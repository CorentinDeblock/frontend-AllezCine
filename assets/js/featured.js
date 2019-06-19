let card = document.querySelector("#card");
let mov = card.content.querySelector("#mov");
let target = document.getElementById("target");

class MovieGUI {
    constructor(api,key) {
        this.api = api.replace("$apiKey",key);
        this.base = this.api;
        this.onProgress = (percent) => {

        }
    }
    searchMovie = (start,count) => {
        let virtualIndex = 0;
        let virtualCount = 0;
        for(let i = 0; i < count;i++){
            if(i + start == start){
                this.api = this.api.replace("$id",start);
            }else{
                this.api = this.api.replace(start + i - 1,start + i);
            }
            console.log(this.api)
            fetch(this.api).then(blob => {
                if(blob.status == 404){
                    return 404;
                }
                return blob.json();
            }).then(result => {
                if(result != 404){
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
                    for(let j = 0;j < result.genres.length;j++){
                        if ( j === result.genres.length - 1){
                            type += result.genres[j].name;
                        } else {
                            type += result.genres[j].name + ', ';
                        }
                    }
            
                    let casting = result.credits.cast;
                    let crew  = result.credits.crew;
                    let vid = result.videos.results;
            
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
            
                    let date = new Date(result.release_date);
            
                    imag.src = "https://image.tmdb.org/t/p/w500" + result.poster_path;
                    h.innerHTML = result.title;
                    year.innerHTML = date.getFullYear();
                    genr.innerHTML = type;
                    motit.innerHTML = result.title;
                    bu.setAttribute("data-target", "#film"+i);
                    idd.id = "film"+i;
                    desc.innerHTML = result.overview;
                    realis.innerHTML = realisator;
                    act.innerHTML = actor;
                    video.src = "https://www.youtube.com/embed/" + vid[vid.length - 1].key;
                    target.appendChild(a);
                    virtualCount++;
                    console.log(virtualCount)
                    this.onProgress(count / 100 * virtualCount)
                }else{
                    virtualIndex++;
                    this.searchMovie(start + count + virtualIndex,1);
                }
            }).catch(error => {
                console.log("Into error")
                console.log(error);
            })
        }
    }
}
let movieGui = new MovieGUI("https://api.themoviedb.org/3/movie/$id?api_key=$apiKey9&append_to_response=videos,credits","b87d7664b3a521ad14526491b0c37dc");
movieGui.searchMovie(10125,40);
