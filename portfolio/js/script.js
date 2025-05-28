const aboutImg = document.getElementById('about-img')
const imgUser="./img/ne que ficou bom.png"
const imgHover="./img/img-transicao.jpg"

aboutImg.addEventListener('mouseenter',()=>{
  aboutImg.style.opacity= 0;
  setTimeout(()=>{
    aboutImg.src=imgHover;
    aboutImg.style.opactity = 1;
  }, 300);
})

aboutImg.addEventListener("mouseleave", ()=>{
  aboutImg.style.opacity=0;
  setTimeout(()=>{
    aboutImg.src=imgUser;
    aboutImg.style.opacity=1;
  }, 300);
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
