
function openModal(imageSrc, imageTitle) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");

    modal.style.display = "block";
    modalImage.src = imageSrc;
    modalTitle.textContent = imageTitle;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function changeImage(n) {
    currentIndex += n;
    const pictures = document.querySelectorAll(".gallery__picture");
    
    if (currentIndex >= pictures.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = pictures.length - 1;
    }

    const currentPicture = pictures[currentIndex];
    const imageSrc = currentPicture.querySelectorAll(".gallery__img").src;
    const imageTitle = currentPicture.querySelectorAll(".gallery__img").alt;

    openModal(imageSrc, imageTitle, currentIndex);
}


function openWhatsApp() {
    var messageBox = document.getElementById("whatsapp-message");
    messageBox.classList.toggle("active");
  }
  

// Mostrar el botón cuando el usuario ha bajado 20 píxeles desde la parte superior de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Volver a la parte superior de la página cuando el usuario hace clic en el botón
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}




