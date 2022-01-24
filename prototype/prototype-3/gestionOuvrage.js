class GestionOuvrage {

    #ouvrageList = [];
    #compteur = 0;
    
   get ouvrageList() {
       return this.#ouvrageList;
   }

   addOuvrage(ouvrage) {
       this.ouvrir()
       this.#compteur = this.#compteur + 1
       ouvrage.id = this.#compteur
       this.#ouvrageList.push(ouvrage)
       this.enregistrer()

   }
   modifierOuvrage(ouvrage) {
       this.ouvrir()
       for (var i = 0; i < this.#ouvrageList.length; i++) {
           if (ouvrage.id == this.#ouvrageList[i].id) {
               this.#ouvrageList[i] = ouvrage
               this.enregistrer()
           }
       }
   }
   getItem(id) {
       for (var i = 0; i < this.ouvrageList.length; i++) {
           if (id == this.ouvrageList[i].id) {
               return this.ouvrageList[i]
           }
       }
   }
   suprimerOuvrage(id) {
       this.#ouvrageList =  this.#ouvrageList.filter(function(ouvrage){
           return ouvrage.id !=  id
       })
       this.enregistrer()
   }
  
   
   enregistrer(){

       var stringList = JSON.stringify(this.#ouvrageList)

       localStorage.setItem('ouvrageList', stringList)
       console.log(JSON.parse(localStorage.getItem("ouvrageList")))


       localStorage.setItem('compteur', this.#compteur)
   }

   ouvrir(){
       this.#ouvrageList = JSON.parse(localStorage.getItem("ouvrageList") || "[]")
       this.#compteur = parseInt(localStorage.getItem('compteur') || 0)
       console.log(this.#ouvrageList)
       console.log(localStorage.getItem("ouvrageList"))

   }

}