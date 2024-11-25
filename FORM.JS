let srno = 1;
function hide_show() {
    let visi = document.getElementById("content");
    let att = visi.getAttribute("style");
    if (att == "visibility:hidden;") {
        visi.setAttribute("style", "visibility:visible;");
    }
    else {
        visi.setAttribute("style", "visibility:hidden;");
    }
    // let add = document.getElementById("add");
    // add.remove();
}
function submit() {
    let degree = document.getElementById("degree").value;
    let regno = document.getElementById("regno").value;
    let year = document.getElementById("year").value;
    let univer = document.getElementById("univer").value;
    if (degree == "" || regno == "" || year == "" || univer == "") {
        alert("Please Fill Empty Fields!!!!");
    }
    let tr = document.createElement("tr");
    let sr = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("button");
    let td6 = document.createElement("button");
    let td7 = document.createElement("button");
    sr.innerText = srno;
    td1.innerText = degree;
    td2.innerText = regno;
    td3.innerText = year;
    td4.innerText = univer;
    td5.innerText = "EDIT";
    td6.innerText = "DELETE";
    td7.innerText = "PRINT";
    td5.style.backgroundColor = "blue";
    td5.style.color = "white";
    td5.setAttribute("onclick", "editRow(this.parentNode)");
    td6.style.backgroundColor = "blue";
    td6.style.color = "white";
    td6.setAttribute("onclick", "deleteRow(this.parentNode)");
    td7.style.backgroundColor = "blue";
    td7.style.color = "white";
    td7.setAttribute("onclick", "printRow()");
    // td5.onclick = function () {
    //     editRow(this.parentNode);
    // };
    tr.appendChild(sr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    document.getElementById("body_row").appendChild(tr);
    hide_show();
    document.getElementById("degree").value = "";
    document.getElementById("regno").value = "";
    document.getElementById("year").value = "";
    document.getElementById("univer").value = "";
    srno++;
};
function editRow(tr) {
    // let tr = row.parentNode.parentNode;
    let index = tr.children[0].innerText;
    let degree = tr.cells[1].innerText;
    let regno = tr.cells[2].innerText;
    let year = tr.cells[3].innerText;
    let univer = tr.cells[4].innerText;
    srno = index;
    document.getElementById("degree").value = degree;
    document.getElementById("regno").value = regno;
    document.getElementById("year").value = year;
    document.getElementById("univer").value = univer;
    hide_show();
    deleteRow(tr);
}

function deleteRow(elem) {
    elem.remove();
}

function printRow() {
    window.print();
}
function reset() {
    document.getElementById("degree").value = "";
    document.getElementById("regno").value = "";
    document.getElementById("year").value = "";
    document.getElementById("univer").value = "";
}
function reload() {
    document.getElementById("add").innerText="RELOAD IN 3 SEC";
    document.getElementById("add").style.color="yellow";
    setTimeout(() => {
        location.reload();
    }, 3000);
}