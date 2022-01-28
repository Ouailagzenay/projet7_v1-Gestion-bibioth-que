var gestionFilm = new GestionFilm();
var selectRow = null ;
var idRow ;

document.getElementById("formSubmit").addEventListener('submit' , function(event){
event.preventDefault();
var film = raedFilm();
if(selectRow == null){
    gestionFilm.addFilm(film);
}else
if(confirm('etes vous sur de modifer cet film'))
film.id = idRow
gestionFilm.modiferFilm(film)
insertNewRow()
resetForm();
})


function raedFilm(){
    var film = new Film();
 film.name = document.getElementById('name').value
 film.type = document.getElementById('type').value
 return film ;


}
function resetForm(){
    document.getElementById('name').value = ''
    document.getElementById('type').value = ''
    SelectRow = null
}

function insertNewRow(){
    var list = gestionFilm.listFilm
    var tableBody = document.getElementById('tableList').getElementsByTagName('tbody')[0];
    while(tableBody.rows.length > 0){
        tableBody.deleteRow(0);
    }
    for(var i = 0 ; i <list.length ; i++){
        var newRow = tableBody.insertRow(tableBody.length)
        newRow.insertCell(0).innerHTML = list[i].id
        cell2 = newRow.insertCell(1)
        cell2.innerHTML = list[i].name
        cell3 = newRow.insertCell(2)
        cell3.innerHTML = list[i].type
        cell4 = newRow.insertCell(3)

        var modiferButten = document.createElement('button')
        var modiferContent = document.createTextNode('modifer')
        modiferButten.appendChild(modiferContent)
        modiferButten.setAttribute('onClick' , 'modifer(this)')
        cell4.appendChild(modiferButten)

        var suprimerButten = document.createElement('button')
        var suprimerContent = document.createTextNode('suprime')
        suprimerButten.appendChild(suprimerContent)
        suprimerButten.setAttribute('onClick' , 'suprimer(this)')
        cell4.appendChild(suprimerButten)
        
    }
}
function modifer(buttonReference){ 
    selectRow = buttonReference.parentElement.parentElement
    idRow =  selectRow.cells[0].innerHTML;
   var film = new Film();
   film = gestionFilm.getItem(idRow)
   document.getElementById('name').value = film.name
   document.getElementById('type').value = film.type
}
function suprimer(buttonReference){
    if(confirm('etes vous sur de suprime cet film')){
    var row = buttonReference.parentElement.parentElement
    idRow = row.cells[0].innerHTML;
     
    document.getElementById("tableList").deleteRow(row.rowIndex);
    gestionOuvrage.suprimerfilm(idRow)
    resetForm();

}
}