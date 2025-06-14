 function abrirImagem(img) {
    const modal = document.getElementById("modal-imagem");
    const imagemAmpliada = document.getElementById("imagem-ampliada");
    imagemAmpliada.src = img.src;
    modal.style.display = "flex";
  }

  function fecharImagem() {
    document.getElementById("modal-imagem").style.display = "none";
  }