var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["checked"] = false;
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = `<input type='checkbox' class='chckbx'>`;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.city;

}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}


function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.salary;
    selectedRow.cells[4].innerHTML = formData.city;
}


function onDelete() {
    ckList = document.querySelectorAll("input[type=checkbox]:checked");
    if(ckList.length == 0)
        alert('Please select atleast a row to delete!');
    else{
        if (confirm('Are you sure to delete the record(s) ?'))
        {
            ckList.forEach(function(el) {
            el.parentElement.parentElement.remove();
            });
        }
    }
}

//Validate fullName field
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
//validate checkbox for edit ()
function onEdit(){
    //isCheck = false;
    var chk = document.getElementsByClassName('chckbx');
    chkCount = 0;
    for(var i=0;i<chk.length;i++)
    {

        if(chk[i].type == 'checkbox' && chk[i].checked){
                chkCount++;
        }

    }
 if(chkCount === 0)
        alert("Please select an entry");
    else if (chkCount>1) //if more than one chkbox checked,disable edit button
    {
        
        alert("Only one entry can be edited at a time!");
    }
    else
    {
        ckList = document.querySelectorAll("input[type=checkbox]:checked");
        ckList.forEach(function(el) { 
            selectedRow = el.parentElement.parentElement;
            document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
            document.getElementById("email").value = selectedRow.cells[2].innerHTML;
            document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
            document.getElementById("city").value = selectedRow.cells[4].innerHTML;
          });

    }

    

}