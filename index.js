document.addEventListener("DOMContentLoaded", function () {
    //acceder al div que tiene la clase containers
  const container = document.querySelector(".containers");
  //creamos el array con los objetos que vamos a usar para crear las cards
  const newCards = [
    {
      title: "Remodelaciones",
      image: "https://imgix.cosentino.com/es/wp-content/uploads/2023/07/Lumire-70-Facade-MtWaverley-vic-1.jpg?auto=format%2Ccompress&ixlib=php-3.3.0",
    },
    {
      title: "Publicaciones",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Llamadas",
      image: "https://via.placeholder.com/150",
    },
  ];
//esta función es para crear la card con los objetos del array
  function createCard(cardData) {
    const card = document.createElement("div");
    card.classList.add("contenedor");

    card.innerHTML = `
      <h1>${cardData.title}</h1>
      <img src="${cardData.image}">
    `
   return card;
  }
//recorremos la lista y agregamos la card al contenedor
  newCards.forEach((cardData) => {
        const card = createCard(cardData)
        container.appendChild(card);
  });


  ///

});
