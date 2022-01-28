class GestionFilm{
    #_listFilm = [];
    #_compteur = 0 ;
    
    get listFilm(){
        return this.#_listFilm
    }
    addFilm(film){
        this.#_compteur = this.#_compteur + 1
        film.id = this.#_compteur
        this.#_listFilm.push(film)
    
    }
    modiferFilm(film) {
        
        for (var i = 0; i < this.#_listFilm.length; i++) {
            if (film.id == this.#_listFilm[i].id) {
                this.#_listFilm[i] = film
            }
        }
      }
      getItem(id) {
        for (var i = 0; i < this.#_listFilm.length; i++) {
            if (id == this.#_listFilm[i].id) {
                return this.#_listFilm[i]
            }
        }
      }
    
    suprimerfilm(idRow){
        this.#_listFilm =  this.#_listFilm.filter(function(film){
          return film.id != idRow
        })
    }
    }