var gestionOuvrage = new GestionOuvrage();

var selectRow = null;
var rowId = null;
document.getElementById("showFormBtn").addEventListener("click", function() {
    var formN = document.getElementById('formN')
    formN.classList.toggle("d-none")
})

document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var ouvrage = readOuvrage();
    if (selectRow == null) {
        gestionOuvrage.addOuvrage(ouvrage);
    }
    else
    if (confirm("Êtes-vous sûr de modifier cette œuvre?")){
        ouvrage.id = rowId;
        gestionOuvrage.modifierOuvrage(ouvrage)
    }

    insertNewRow();

    resetForm();
     
})

function resetForm() {
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputAuthor").value = "";
    document.getElementById("inputPrix").value = "";
    document.getElementById("inputDate").value = "";
    document.getElementById("inputLanguage").value = "";
    document.querySelector('input[name="workType"]:checked').checked = false
    selectRow = null;
}


function readOuvrage() {
    var ouvrage = new Ouvrage();
    
    ouvrage.titre = document.getElementById("inputTitle").value;
    ouvrage["auteur"] = document.getElementById("inputAuthor").value;
    ouvrage["prix"] = parseFloat(document.getElementById("inputPrix").value);
    ouvrage["date"]= document.getElementById("inputDate").value;
    ouvrage["langue"] = document.getElementById("inputLanguage").value;
    ouvrage["type"] = document.querySelector('input[name="workType"]:checked').value

    return ouvrage;
}



function insertNewRow() {
    var List = gestionOuvrage.ouvrageList
    console.log(List)
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
   while(tableBody.rows.length > 0){
       tableBody.deleteRow(0);
   }
   for(var i = 0; i < List.length; i++){
    var newRow = tableBody.insertRow(tableBody.length);
    cell1 = newRow.insertCell(0)
    cell1.innerHTML =List[i].id;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = List[i].titre;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = List[i].auteur;
  
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = List[i].prix;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = List[i].date;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = List[i].langue;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = List[i].type;

    cell8 = newRow.insertCell(7);


    var modifierButton = document.createElement("button")
    var suprimerButton = document.createElement("button")

    var modifierContent = document.createTextNode("modifier")
    modifierButton.appendChild(modifierContent)
    modifierButton.setAttribute('onclick', 'modifier(this)')

    var suprimerContent = document.createTextNode('suprimer')
    suprimerButton.appendChild(suprimerContent)
    suprimerButton.setAttribute("onclick", 'suprimer(this)')
 
   cell8.appendChild(modifierButton)  
   cell8.appendChild(suprimerButton)  
  }
  
}

function modifier(buttonReference) {
    selectRow = buttonReference.parentElement.parentElement;
    rowId = selectRow.cells[0].innerHTML
    var ouvrage = new Ouvrage();
    ouvrage = gestionOuvrage.getItem(rowId)
    document.getElementById("inputTitle").value = ouvrage.titre;
    document.getElementById("inputAuthor").value = ouvrage.auteur;
    document.getElementById("inputPrix").value = ouvrage.prix;
    document.getElementById("inputDate").value = ouvrage.date;
    document.getElementById("inputLanguage").value = ouvrage.langue;

    var checkValue = document.getElementsByName("workType");
    for (var i = 0; i < checkValue.length; i++) {
        if (checkValue[i].value == ouvrage.type) {
            checkValue[i].checked = true
        }
    }

}
function suprimer(buttonReference) {
    if (confirm("Êtes-vous sûr de supprimer cette œuvre?")) {
        var row = buttonReference.parentElement.parentElement;
        var rowId = row.cells[0].innerHTML

        document.getElementById("worksTable").deleteRow(row.rowIndex)
        
        gestionOuvrage.suprimerOuvrage(rowId)
        resetForm()
    }
}
function printData()
{
   var divToPrint=document.getElementById("worksTable");
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
}