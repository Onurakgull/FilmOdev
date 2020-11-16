const form =document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardBody=document.querySelectorAll(".card-body")[1];

//Uİ objesini başlatma
const ui=new UI();

//Tüm eventleri yükleme
eventListeners();

//Storage objesi oluşturma
const storage=new Storage();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
     cardBody.addEventListener("click",deleteFilm);
}
function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title === "" || director==="" || url===""){
        //hata
        ui.displayMessages("Tüm alanları doldurun...","danger");
    }
    else{
        //yeni film oluşturma
        const newFilm=new Film(title,director,url);
        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Başarıyla Eklenmiştir...","success")
    }


    ui.clearFilms(titleElement,urlElement,directorElement);
    e.preventDefault();

}
 function deleteFilm(e){
     if(e.target.id === "delete-film"){
         ui.deleteFilmFromUI(e.target);
         storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
         ui.displayMessages("Silme işlemi başarılı...","success");
    
     }
 }