const form = document.getElementById("userForm");

form.addEventListener("submit", function(event) {

    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const fatherName = document.getElementById("fatherName").value;
    const contactNo = document.getElementById("contactNo").value;
    const qualification = document.getElementById("qualification").value;   


    document.getElementById("outputName").textContent = "Name: " + name;
    document.getElementById("outputEmail").textContent = "Email: " + email;
    document.getElementById("outputAge").textContent = "Age: " + age;
    document.getElementById("outputFatherName").textContent = "Father's Name: " + fatherName;
    document.getElementById("outputContactNo").textContent = "Contact No: " + contactNo;
    document.getElementById("outputQualification").textContent = "Qualification: " + qualification;     
    

});