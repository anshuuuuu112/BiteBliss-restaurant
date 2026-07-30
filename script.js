document.getElementById("reservationForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let message = document.getElementById("message");

    if(name === "" || email === "" || phone === "")
    {
        message.innerHTML = "Please fill all the details!";
        message.style.color = "red";
    }
    else
    {
        message.innerHTML = "Thank you " + name + "! Your table has been reserved successfully.";
        message.style.color = "green";

        document.getElementById("reservationForm").reset();
    }

});