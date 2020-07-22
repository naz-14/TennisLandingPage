var WORDS_EN = {
  text1: "Home",
  text2: "About Us",
  text3: "History",
  text4: "Contact",
  text5: "Greatest rackets for play <span> Tennis</span>",
  text6: "About Us <span>&#8594</span>",
  text7: "Rackets.Accesories.<br>Balls.",
  text8: "Discover Our rackets and learn to play Tennis like a proffesional",
  text9: "History <span>&#8594</span>",
  text10: `Our <br><span>Rackets</span>`,
  text12: "Discover Our rackets and learn to play Tennis like a proffesional",
  text13: "Another <br><span>Product</span>",
  text15: "Another product description",
  text16: "Home",
  text17: "About Us",
  text18: "History",
  text19: "Contact",
};

var WORDS_ES = {
  text1: "Inicio",
  text2: "Acerca De Nosotros",
  text3: "Historia",
  text4: "Contacto",
  text5: "Las mejores raquetas para Jugar <span>Tennis</span>",
  text6: "Acerca de nosotros <span>&#8594</span>",
  text7: "Raquetas.Accesorios.<br>Pelotas.",
  text8:
    "Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.",
  text9: "Historia <span>&#8594</span>",
  text10: "Nuestras <br><span>Raquetas</span>",
  text12:
    "Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.",
  text13: "Otro <br><span>Producto</span>",
  text15: "Otra descripcion del producto",
  text16: "Inicio",
  text17: "Acerca de Nosotros",
  text18: "Historia",
  text19: "Contacto",
};

window.addEventListener("DOMContentLoaded", init);

const es = document.querySelector("#es");
const en = document.querySelector("#en");

es.addEventListener("click", (e) => {
  e.stopPropagation();
  loadsLanguage("ES");
});
en.addEventListener("click", (e) => {
  e.stopPropagation();
  loadsLanguage("EN");
});

function init() {
  loadsLanguage("ES");
}

function loadsLanguage(lang) {
  const content = document.querySelectorAll(".lang");
  content.forEach(function (content) {
    let LangVar = content.id;
    let text = window["WORDS_" + lang][LangVar];
    if (
      LangVar == "text5" ||
      LangVar == "text6" ||
      LangVar == "text7" ||
      LangVar == "text9" ||
      LangVar == "text10" ||
      LangVar == "text13"
    ) {
      content.innerHTML = text;
    } else {
      content.textContent = text;
    }
  });
}
