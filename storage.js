function Storage(){


}
Storage.prototype.addFilmToStorage=function(newFilm){
    console.log(newFilm);
    let films=this.getFilmsFromStorage();

    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));


}


Storage.prototype.getFilmsFromStorage=function(newFilm){


     let films;
     if (localStorage.getItem("films") === null){
         films=[];
     }
     else{
         films=JSON.parse(localStorage.getItem("films"));
     }
     return films;
}
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films=this.getFilmsFromStorage();
    films.forEach(function(film,index){
        if(film.title===filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
}