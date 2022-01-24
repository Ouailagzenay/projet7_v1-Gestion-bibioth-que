var workManager = new WorkManager();

var selectedRow = null;
var rowId = null;


document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var work = readwork();
    workManager.addWork(work);


    insertNewRow();

    resetForm();
})

function resetForm() {
    document.getElementById("inputTitle").value = "";
    selectedRow = null;
}


function readwork() {
    var work = new Work();

    work.title = document.getElementById("inputTitle").value;
    return work;
}



function insertNewRow() {
    var workList = workManager.getAllItems()
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];

    while (tableBody.rows.length > 0) {
        tableBody.deleteRow(0);
    }


    for (var i = 0; i < workList.length; i++) {
        var newRow = tableBody.insertRow(tableBody.length);
        newRow.insertCell(0).innerHTML = workList[i].id;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = workList[i].title;
        cell3 = newRow.insertCell(2)


        var editButton = document.createElement("button")
        var deleteButton = document.createElement("button")

        var editContent = document.createTextNode("Edit")
        editButton.appendChild(editContent)
        editButton.setAttribute('onclick', 'onEdit(this)')

        var deleteContent = document.createTextNode('Delete')
        deleteButton.appendChild(deleteContent)
        deleteButton.setAttribute("onclick", 'onDelete(this)')

        cell3.appendChild(editButton)
        cell3.appendChild(deleteButton)
    }

}




