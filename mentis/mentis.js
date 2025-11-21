// ===== OBJETO DE PROYECTOS =====
const projects = {
  1: {
    images: [
      "img/afiches/brasil.png",
      "img/afiches/italia.png",
      "img/afiches/francia.png",
      "img/afiches/alemania.png"
    ],
    description:
      "Proyecto de afiches urbanos para la promoción del C.L.E. (Centro de Lenguas Extranjeras), desarrollado con una estética inspirada en el artista Ikko Tanaka, caracterizada por el uso de colores planos y figuras geométricas. Cada afiche incorpora el animal nacional y una frase representativa de la cultura correspondiente, con el objetivo de invitar y motivar a las personas a inscribirse en el centro.",
    link: "afiches/afiches.html" // 🔹 ruta al HTML del proyecto
  },
  2: {
    images: [
      "img/portadas/el principito.png",
      "img/portadas/mokup.png",
      "img/portadas/mokuplibro.png",
      "img/portadas/mokupanashe.png"
    ],
    description: "Proyecto de rediseño editorial de un libro infantil clásico.",
    link: "proyecto/libros/libros.html"
  },
  3: {
    images: [
      "img/kakaw/amargo.png",
      "img/kakaw/blanco.png",
      "img/kakaw/diabetico.png"
    ],
    description:
      "Diseño de identidad visual para marca de chocolates artesanales, con un enfoque natural y sobrio.",
    link: "proyecto/kakaw/kakaw.html"
  },

    4: {
    images: [
      "img/kakaw/amargo.png",
      "img/kakaw/blanco.png",
      "img/kakaw/diabetico.png"
    ],
    description:
      "Diseño de identidad visual para marca de chocolates artesanales, con un enfoque natural y sobrio.",
    link: "proyecto/mentis/mentis.html"
  },
    5: {
    images: [
      "img/kakaw/amargo.png",
      "img/kakaw/blanco.png",
      "img/kakaw/diabetico.png"
    ],
    description:
      "Diseño de identidad visual para marca de chocolates artesanales, con un enfoque natural y sobrio.",
    link: "proyecto/kakaw/kakaw.html"
  },
    6: {
    images: [
      "img/kakaw/amargo.png",
      "img/kakaw/blanco.png",
      "img/kakaw/diabetico.png"
    ],
    description:
      "Diseño de identidad visual para marca de chocolates artesanales, con un enfoque natural y sobrio.",
    link: "proyecto/kakaw/kakaw.html"
  }
};

// ===== SELECCIÓN DE ELEMENTOS =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("carousel-img");
const description = document.getElementById("project-description");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const projectLink = document.getElementById("project-link"); // 🔹 CORRECTO ID

let currentProject = null;
let currentIndex = 0;

// ===== ABRIR MODAL =====
document.querySelectorAll(".work").forEach((work) => {
  work.addEventListener("click", () => {
    const projectId = work.dataset.project;
    currentProject = projects[projectId];
    currentIndex = 0;

    // Mostrar primera imagen y descripción
    modalImg.src = currentProject.images[currentIndex];
    description.textContent = currentProject.description;

    // Actualizar el botón de enlace
    if (currentProject.link) {
      projectLink.href = currentProject.link;
      projectLink.style.display = "inline-block";
    } else {
      projectLink.style.display = "none";
    }

    // Mostrar modal
    modal.style.display = "flex";
  });
});

// ===== CERRAR MODAL =====
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// ===== CARRUSEL MANUAL =====
nextBtn.onclick = () => changeImage(1);
prevBtn.onclick = () => changeImage(-1);

function changeImage(dir) {
  currentIndex =
    (currentIndex + dir + currentProject.images.length) %
    currentProject.images.length;
  modalImg.src = currentProject.images[currentIndex];
}
