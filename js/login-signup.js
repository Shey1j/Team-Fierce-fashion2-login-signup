let signupbtn = document.getElementById("new-member");
let loginbtn = document.getElementById("member");

let login = document.getElementById("sign-in");
let signup = document.getElementById("sign-up");

signupbtn.addEventListener('click', displaySignUp);
loginbtn.addEventListener('click', displaySignIn);

function displaySignUp() {
    signup.style.display = "block";
    login.style.display = "none";
}

function displaySignIn() {
    signup.style.display = "none";
    login.style.display = "block";
}

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  