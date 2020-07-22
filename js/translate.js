const navDiv = document.querySelector(".nav"),
  spanish = document.querySelector("#es"),
  english = document.querySelector("#en"),
  hero = document.querySelector(".hero"),
  history = document.querySelector(".right-container"),
  nuestrasRaquetas = document.querySelector("#nuestrasRaquetas"),
  footerNav = document.querySelector(".footer-nav");

spanish.addEventListener("click", spanishContent);
english.addEventListener("click", englishContent);

function spanishContent(e) {
  e.preventDefault();
  navDiv.innerHTML = `<li><a class="option active" href="#">Inicio</a></li>
          <li><a class="option" href="#">Acerca de Nosotros</a></li>
          <li><a class="option" href="#">Historia</a></li>
          <li><a class="option" href="#">Contacto</a></li>
          <li><a href="#" class="option btn-close" id="btnCloseMenu">X</a></li>`;
  hero.innerHTML = `<div class="wrapper">
        <div class="content hero-content es">
          <h1 class="tittle">
            Las mejores raquetas para Jugar <span>Tennis</span>
          </h1>
          <a href="#" class="btn btn-prim"
            >Acerca de nosotros <span>&#8594;</span></a
          >
        </div>`;
  history.innerHTML = `<div class="center">
              <h2 class="subtittle">Raquetas.Accesorios.<br />Pelotas.</h2>
              <p class="description">
                Conoce nuestras raquetas y aprende a jugar Tennis cómo un
                profesional.
              </p>
            </div>
            <div class="right">
              <a href="#" class="btn btn-sec btn-historia"
                >Historia <span>&#8594;</span></a
              >
            </div>`;
  nuestrasRaquetas.innerHTML = `<h2 class="option-tittle">
                    Nuestras <br /><span>Raquetas</span>
                  </h2>
                  <p class="option-description">
                    Conoce nuestras raquetas y aprende a jugar Tennis cómo un
                    profesional.
                  </p>`;
  footerNav.innerHTML = `<li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de Nosotros</a></li>
            <li><a href="#">Historia</a></li>
            <li><a href="#">Contacto</a></li>`;
}
function englishContent(e) {
  e.preventDefault();
  navDiv.innerHTML = `<li><a class="option active" href="#">Home</a></li>
          <li><a class="option" href="#">About Us</a></li>
          <li><a class="option" href="#">History</a></li>
          <li><a class="option" href="#">Contact</a></li>
          <li><a href="#" class="option btn-close" id="btCloseMenu">X</a></li>`;
  hero.innerHTML = `<div class="wrapper">
        <div class="content hero-content es">
          <h1 class="tittle">
            The best rackets to play <span>Tennis</span>
          </h1>
          <a href="#" class="btn btn-prim"
            >About Us<span>&#8594;</span></a
          >
        </div>`;
  history.innerHTML = `<div class="center">
              <h2 class="subtittle">Rackets.Accesories<br />Balls.</h2>
              <p class="description">
                Discover our rackets and learn to play Tennis like a
                professional.
              </p>
            </div>
            <div class="right">
              <a href="#" class="btn btn-sec btn-historia"
                >History <span>&#8594;</span></a
              >
            </div>`;
  nuestrasRaquetas.innerHTML = `<h2 class="option-tittle">
                    Our <br /><span>Rackets</span>
                  </h2>
                  <p class="option-description">
                    Discover our rackets and learn to play Tennis like a
                    professional.
                  </p>`;
  footerNav.innerHTML = `<li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Contact</a></li>`;
}
