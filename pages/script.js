document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //validar que el nombre tenga minimo cinco letras y maximo 50
    const nameInput = document.getElementById("name").value;
    if (nameInput.length < 5 || nameInput.length > 50) {
      alert("El nombre debe tener mínimo cinco letras y máximo 50");
      return;
    }

    //Validar que el corre tenga minimo 10 letras maximo 40
    const emailInput = document.getElementById("email").value;
    if (emailInput.length < 10 || emailInput.length > 40) {
      alert("El correo electrónico debe tener entre 5 y 50 caracteres.");
      return;
    }

    //Validar que sea mayor de edad
    const dateInput = document.getElementById("date").value;
    const birthDate = new Date(dateInput)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()


    if (monthDifference < 0 ||
        (monthDifference===0 && today.getDate() < birthDate.getDate() ) ) {
        age--; 
    }

  

    if (age < 18) {
        alert("Debes ser mayor de 18 años.");
        return;
    }

    //Validar que NO sea mayor de 60años

  });
