function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag Img
  const img = document.querySelector("#profile img")

  // substituir a Imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "/assests/assets/avatar-light.png")
    img.setAttribute("alt", "foto de rafael, com braços cruzados, encostado em uma saveiro preta")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "/assests/assets/avatar.png")
    img.setAttribute("alt", "foto de rafael, sinalizando beleza, em pé em uma escada")
  }
}
