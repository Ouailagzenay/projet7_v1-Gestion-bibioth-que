document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var work = readwork();
    insertNewRow(work);
})


function readwork() {

    var work = {};
    work["title"] = document.getElementById("inputTitle").value;
    work["author"] = document.getElementById("inputAuthor").value;
    work["price"] = parseFloat(document.getElementById("inputPrix").value);
    work["date"] = document.getElementById("inputDate").value;
    work["language"] = document.getElementById("inputLanguage").value;
    var cheackValues = document.getElementsByName("workType");
    for (var i = 0; i < cheackValues.length; i++) {
        if (cheackValues[i].checked) {
            work["type"] = cheackValues[i].value;
            break;
        }
    }
    return work;
}



function insertNewRow(work) {
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = work.title;
    newRow.insertCell(1).innerHTML = work.author;
    newRow.insertCell(2).innerHTML = work.price;
    newRow.insertCell(3).innerHTML = work.date;
    newRow.insertCell(4).innerHTML = work.language;
    newRow.insertCell(5).innerHTML = work.type;
    newRow.insertCell(6)
}