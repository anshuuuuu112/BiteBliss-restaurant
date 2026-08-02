
function showMenu(category){

    let menus = document.querySelectorAll(".menu-items");

    menus.forEach(function(menu){

        menu.style.display = "none";

    });

    document.getElementById(category).style.display = "block";

}
window.onload = function(){

    if(document.getElementById("pizza")){
        showMenu("pizza");
    }

};

const reservationForm = document.getElementById("reservationForm");

if(reservationForm){

    reservationForm.addEventListener("submit", function(event){

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message");

        if(name === "" || email === "" || phone === ""){

            message.innerHTML = "Please fill all the details.";
            message.style.color = "red";

        }

        else{

            message.innerHTML = "Thank you " + name + "! Your table has been reserved successfully.";
            message.style.color = "green";

            reservationForm.reset();

        }

    });

}
function placeOrder(foodName){

    document.getElementById("popupMessage").innerHTML =
        "Your order for <b>" + foodName + "</b> has been placed successfully!<br><br>Thank you for choosing BiteBliss Restaurant.";

    document.getElementById("orderPopup").style.display = "block";

}

function closePopup(){

    document.getElementById("orderPopup").style.display = "none";

}