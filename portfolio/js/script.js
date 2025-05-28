
const aboutImg = document.getElementById('about-img');

const aboutImgHover = document.createElement('img');
aboutImgHover.src = 'img/img-transicao.jpg'; // Troque para o caminho da imagem de hover
aboutImgHover.alt = 'Sobre mim hover';
aboutImgHover.className = 'about-img about-img-hover';
aboutImg.parentElement.appendChild(aboutImgHover);

let imagemFixa = false;

aboutImg.parentElement.addEventListener('mouseenter', () => {
  if (!imagemFixa) {
    aboutImgHover.classList.remove('fade-out');
    aboutImgHover.classList.add('fade-in');
  }
});

aboutImg.parentElement.addEventListener('mouseleave', () => {
  if (!imagemFixa) {
    aboutImgHover.classList.remove('fade-in');
    aboutImgHover.classList.add('fade-out');
  }
});

// Quando o usuário passar o mouse pela primeira vez, fixa a imagem
aboutImg.parentElement.addEventListener('animationend', (e) => {
  if (e.animationName === 'fadeInImg' && !imagemFixa) {
    imagemFixa = true;
    aboutImgHover.classList.remove('fade-in');
    aboutImgHover.style.opacity = 1; 
  }
});





const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const projetos = [
  {
    titulo: "Projeto Cep",
    descricao:
      "Um projeto que consome uma API de CEP, onde o usuário pode buscar informações sobre um determinado CEP.",
    imagem: "https://localizarcep.com/assets/images/blog/sobre-cep.jpg",
    link: "",
  },
 
 
  {
    titulo: "Projeto Cep",
    descricao:
      "Um projeto que consome uma API de CEP, onde o usuário pode buscar informações sobre um determinado CEP.",
    imagem: "https://localizarcep.com/assets/images/blog/sobre-cep.jpg",
    link: "",
  },

];

const galeriaProjetos = document.getElementById("galeiriaProjetos");
projetos.forEach((projeto) => {
  galeriaProjetos.innerHTML += `   <article class="project-card">
            <div
              class="project-image"
              style="
                background-image: url('${projeto.imagem}');
              "
            ></div>
            <div class="project-info">
              <h3>${projeto.titulo}</h3>
              <p>
                ${projeto.descricao}
              </p>
              <a href="${projeto.link}" class="project-link">Ver Detalhes</a>
            </div>

             
          </article>`
   
})
