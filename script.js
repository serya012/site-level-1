// Função para o botão de rolar para o topo
const scrollToTopBtn = document.getElementById("scrolltop");

if (scrollToTopBtn) {
    // Função para rolar a página para o topo quando o botão for clicado
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "instant" // Rolagem imediata, sem suavização
        });
    });
}
