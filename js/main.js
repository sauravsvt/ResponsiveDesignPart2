document.getElementById('btns').addEventListener("click", function () {
    document.querySelector('.popup').style.display = "block"
})

document.getElementById('close').addEventListener("click", function () {
    document.querySelector('.popup').style.display = "none";
})

function validateForm() {
    var name = document.myForm.name.value;
    var email = document.myForm.email.value;
    var address = document.myForm.address.value;
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    } else if (!isNaN(name)) {
        alert("Name can't be Number");
        return false;
    }
    else if (email == null || email == "") {
        alert("Email can't be blank");
        return false;
    } else if (!re.test(email)) {
        alert("Email Format is not correct");
    }
    else if (address == null || address == "") {
        alert("Address can't be blank");
        return false;
    } else if (email.length != 0 || name.length != 0 || address.length != 0) {
        alert("Thank You!")
    }
}
