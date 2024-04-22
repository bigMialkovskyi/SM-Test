let phoneErrorStatus = false;
let emailErrorStatus = false;
let firstNameErrorStatus = false;
let lastNameErrorStatus = false;

function showPhoneError(errorText) {
  const mySpan = document.getElementById("phone-error");
  mySpan.innerText = errorText;

  if (errorText) {
    phoneErrorStatus = true;
  } else {
    phoneErrorStatus = false;
  }
}

function showEmailError(errorText) {
  const mySpan = document.getElementById("email-error");
  mySpan.innerText = errorText;

  if (errorText) {
    emailErrorStatus = true;
  } else {
    emailErrorStatus = false;
  }
}

function showFirstNameError(errorText) {
  const mySpan = document.getElementById("first-name-error");
  mySpan.innerText = errorText;

  if (errorText) {
    firstNameErrorStatus = true;
  } else {
    firstNameErrorStatus = false;
  }
}

function showLastNameError(errorText) {
  const mySpan = document.getElementById("last-name-error");
  mySpan.innerText = errorText;

  if (errorText) {
    lastNameErrorStatus = true;
  } else {
    lastNameErrorStatus = false;
  }
}

function phoneValidation(event) {
  const value = event.target.value;
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (phoneRegex.test(value)) {
    showPhoneError("");
  } else {
    window.setTimeout(function () {
      showPhoneError("Formato de telefone incorreto");
    }, 2000);
  }
}

function emailValidation(event) {
  const value = event.target.value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailRegex.test(value)) {
    showEmailError("");
  } else {
    window.setTimeout(function () {
      showEmailError("Formato de email inválido");
    }, 2000);
  }
}

firstNameValidation = (event) => {
  const value = event.target.value;

  if (value.length >= 2) {
    showFirstNameError("");
  } else {
    window.setTimeout(function () {
      showFirstNameError("Nome deve ter no mínimo 2 caracteres");
    }, 2000);
  }
};

lastValidation = (event) => {
  const value = event.target.value;

  if (value.length >= 2) {
    showLastNameError("");
  } else {
    window.setTimeout(function () {
      showLastNameError("Sobrenome deve ter no mínimo 2 caracteres");
    }, 2000);
  }
};

lastNameValidation = (event) => {
  const value = event.target.value;
  const lastNameRegex = /^[a-zA-Z]{2,}$/;

  if (lastNameRegex.test(value)) {
    showLastNameError("");
  } else {
    window.setTimeout(function () {
      showLastNameError("Sobrenome inválido");
    }, 2000);
  }
};

function submitForm(event) {
  //   event.preventDefault();
  let firstName = document.getElementById("input-first-name").value;
  if (firstName.length < 2) {
    showFirstNameError("Nome deve ter no mínimo 2 caracteres");
    return;
  }

  let lastName = document.getElementById("input-last-name").value;
  if (lastName.length < 2) {
    showLastNameError("Sobrenome deve ter no mínimo 2 caracteres");
    return;
  }

  let phone = document.getElementById("input-phone").value;
  if (!phone) {
    showPhoneError("Campo obrigatório");
    return;
  }

  let email = document.getElementById("input-email").value;
  if (!email) {
    showEmailError("Campo obrigatório");
    return;
  }

 if (!phoneErrorStatus && !emailErrorStatus && !firstNameErrorStatus && !lastNameErrorStatus) {
    window.location.href = "next-page.html"; 
  } else {
    alert("Há erros no formulário");
  }
}

function goToArticle () {
    window.location.href = "Zé Celso é internado e entubado após incêndio atingir apartamento em que mora em SP; veja vídeo _ São Paulo _ G1.html";
}

function scrollToForm() {
  // Знаходимо елемент за ID "my-div"
  const targetDiv = document.getElementById("my-form");
  if (targetDiv) {
    // Прокручуємо сторінку до цього елемента
    targetDiv.scrollIntoView({ behavior: "smooth" });
  }
}

handleVisibility = function () {
  const myElement = document.getElementById("hide-element");

  // Перевіряємо, чи ми на самому верху сторінки
  if (window.pageYOffset < 122) {
    myElement.classList.add("hidden"); // Приховуємо
  } else {
    myElement.classList.remove("hidden"); // Відображаємо
  }
};

window.addEventListener("DOMContentLoaded", handleVisibility);
window.addEventListener("scroll", handleVisibility);

////////////////////////////////////////

const phoneInput = document.getElementById("input-phone");
    
const iti = intlTelInput(phoneInput, {
  initialCountry: "auto",
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
  preferredCountries: ["ua", "us"],
  separateDialCode: true,
});