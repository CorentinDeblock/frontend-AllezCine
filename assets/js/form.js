class formCapsule{
    constructor() {
        let form = document.getElementById("form");

        this.title = document.getElementById("title");
        this.image = document.getElementById("image");
        this.year = document.getElementById("year");
        this.genre = document.getElementById("genre");
        this.trailer = document.getElementById("trailer")
        this.desc = document.getElementById("desc");
        this.director = document.getElementById("directors");
        this.actor = document.getElementById("actors");
        this.price = document.getElementById('price');

        this.directors = [];
        this.actors = [];
        this.genres = [];

        this.action = () => {
            this.directors = this.splitter(this.director);
            this.actors = this.splitter(this.actor);
            this.genres = this.splitter(this.genre);
        }

        this.splitter = (element) => {
            if(element.value){
                return element.value.split(",");
            }
            return element.innerText.split(",");
        }

        form.addEventListener("submit",(e) => {
            let data = {
                title: this.title,
                image: this.image,
                year: this.year,
                genre: this.genre,
                trailer: this.trailer,
                desc: this.desc,
                directors: this.director,
                actors: this.actor,
                price: this.price
            }
            this.action();
            fetch("assets/js/movieTemplate.json",{
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: {
                    name:"njdouqndqu"
                }
            }).then(result => {
                console.log(data)
                console.log('oqudqbuds')
                return result.json()
            })
            e.preventDefault();
        });
    }
}
let form = new formCapsule();