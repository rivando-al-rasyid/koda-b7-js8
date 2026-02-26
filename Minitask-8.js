// 1. data object Film
let Film = {id: 1, title: "Inception",gambar: "inception.jpg",
  genre: ["Sci-Fi" ,"Thriller"],
  cast: [{"name": "Leonardo DiCaprio", "role": "Cobb"},
    {"name": "Joseph Gordon-Levitt", "role": "Arthur"},
     {"name": "Ellen Page", "role": "Ariadne"}],

    getTitle : function(){
        return this.title;
     },
     getGambar : function(){
        return this.gambar;
     },
     getGenre : function(){
        return `Genre : ${this.genre}`;
     },
      getCast : function(){
        for(let i = 0; i < this.cast.length; i++){
          let castName = this.cast[i].name;
          let castRole = this.cast[i].role;
          console.log(`cast = name :${castName} role: ${castRole} `);
        }
     },
     setTitle(newTitle){
        this.title = newTitle;
     },
     setGambar(newGambar){
        this.gambar = newGambar;
     }
}

console.log(Film.getTitle());
console.log(Film.getGambar());
console.log(Film.getGenre());
console.log(Film.getCast());
// Film.setTitle("Interstellar");
// Film.setGambar("interstellar.jpg");
// console.log(Film.getTitle());
// console.log(Film.getGambar());