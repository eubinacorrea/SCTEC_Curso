function changeTab(section) {
    const box = document.getElementById('content-box');
    const grid = document.getElementById('gridBg');
    const text = document.getElementById('text-content');
    const backBtn = document.getElementById('back-button'); // Captura o botão

    // Adiciona o efeito de transição
    box.classList.add('glitch-effect');

    // Cores do fundo (quadriculado)
    const colors = {
        bio: 'rgba(255, 0, 193, 0.15)',
        skills: 'rgba(0, 255, 240, 0.15)',
        lab: 'rgba(112, 0, 255, 0.15)',
        contato: 'rgba(255, 255, 255, 0.1)'
    };
    if (grid) grid.style.backgroundColor = colors[section];

    setTimeout(() => {
        // --- LÓGICA DO BOTÃO VOLTAR ---
        if (section === 'bio') {
            backBtn.classList.add('hidden'); // Esconde na Bio
        } else {
            backBtn.classList.remove('hidden'); // MOSTRA em qualquer outra
        }

        // --- TROCA DE CONTEÚDO ---
        if (section === 'bio') {
            text.innerHTML = "<h2>Olá,</h2><p>o que você quer saber primeiro sobre mim?</p>";
        } 
        else if (section === 'skills') {
            text.innerHTML = `
                <div class="sobre-container">
                    <img src="eu.png" class="minha-foto" alt="Sabrina">
                    <div class="descricao-scroll">
                        <h2>Sobre Mim</h2>
                        <p>bla bla bla bla bla bla bvla bla bla bla</p>
                        <p>Role para baixo para ler mais!</p>
                    </div>
                </div>`;
        } 
        else if (section === 'lab') {
            text.innerHTML = "<h2>Projetos</h2><p>Conteúdo dos seus projetos e laboratórios.</p>";
        } 
        else if (section === 'contato') {
            text.innerHTML = "<h2>Contato</h2><p>Envie uma mensagem ou me encontre nas redes!</p>";
        }

        box.classList.remove('glitch-effect');
    }, 400);
}