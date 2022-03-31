window.addEventListener('DOMContentLoaded', (event) => {
    let street = document.getElementById("street");
    let house = document.getElementById("house");
    let municipality = document.getElementById("municipality");
    let zip = document.getElementById("zip");
    let subscribe = document.getElementById("subscribe");
    let email = document.getElementById("email");
    let bear = document.getElementById("bear");
    let keychain = document.getElementById("keychain");
    let submitBtn = document.getElementById("submit-btn");
    let resetBtn = document.getElementById("reset-btn");
    let form = document.getElementById("form");

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    }, false)

    checkSubscribe();

    bear.addEventListener('change', function() {
        checkRadio();
    });
    keychain.addEventListener('change', function() {
        checkRadio();
    });
    resetBtn.addEventListener('click', function(){
        submitBtn.setAttribute("disabled", "");
    })

    house.addEventListener('input', function(){
        checkHouse();
    })
    house.addEventListener('change', function(){
        checkHouse();
    })

    municipality.addEventListener('input', function(){
        checkMunicipality();
    })
    municipality.addEventListener('change', function(){
        checkMunicipality();
    })

    zip.addEventListener('input', function(){
        checkZip();
    })
    zip.addEventListener('change', function(){
        checkZip();
    })

    subscribe.addEventListener('change', function(){
        checkSubscribe();
    })

    email.addEventListener('input', function(){
        checkEmail();
    })
    email.addEventListener('change', function(){
        checkEmail();
    })

    form.addEventListener('submit', function(){
        checkHouse();
        checkMunicipality();
        checkZip();
        checkSubscribe();
        checkEmail();
        checkRadio();
    })

    function checkHouse() {
        if (!isNaN(house.value) && house.value != "") {
            checkValid(house);
        } else {
            checkInvalid(house);
        }
    }

    function checkMunicipality() {
        if (municipality.value != "") {
            checkValid(municipality);
        } else {
            checkInvalid(municipality);
        }
    }

    function checkZip() {
        if (!isNaN(zip.value) && zip.value.length == 5) {
            checkValid(zip);
        } else {
            checkInvalid(zip);
        }
    }

    function checkSubscribe() {
        if (subscribe.checked) {
            email.removeAttribute("disabled");
        } else {
            email.setAttribute("disabled", "");
            email.classList.remove("is-invalid");
            email.classList.remove("is-valid");
            email.value = "";
        }
    }

    function checkEmail() {
        if (email.value != "" && email.value.includes("@")) {
            checkValid(email);
        } else {
            checkInvalid(email);
        }
    }

    function checkRadio() {
        if (keychain.checked || bear.checked) {
            submitBtn.removeAttribute("disabled");
            checkValid(bear);
            checkValid(keychain);
        } else {
            submitBtn.setAttribute("disabled", "");
            checkInvalid(bear);
            checkInvalid(keychain);
        }
    }

    function checkValid(input) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }
    function checkInvalid(input) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
});

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()