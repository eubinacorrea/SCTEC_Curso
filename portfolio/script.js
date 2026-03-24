function changeTab(section) {
    const box = document.getElementById('content-box');
    const grid = document.getElementById('gridBg');
    const text = document.getElementById('text-content'); // Mantém o título na box
    const backBtn = document.getElementById('back-button');
    const corpo = document.getElementById('corpo-do-site'); // Onde a mágica acontece agora

    // Efeito visual de transição na box de menu
    box.classList.add('glitch-effect');

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
            backBtn.classList.add('hidden');
            corpo.innerHTML = ""; // Limpa o corpo quando volta pra home
        } else {
            backBtn.classList.remove('hidden');
        }

        // --- TROCA DE CONTEÚDO ---
        
        if (section === 'bio') {
            text.innerHTML = "<h2>Olá,</h2><p>o que você quer saber primeiro sobre mim?</p>";
        }
        
        else if (section === 'skills') {
            // No menu deixamos apenas o título
            text.innerHTML = "<h2>Sobre Mim</h2>";
            
            // No CORPO DO SITE (quadrado vermelho) colocamos a sua história
            corpo.innerHTML = `
                <div class="sessao-livre">
                    <img src="eu.png" class="minha-foto" style="float: left; margin-right: 20px;">
                    <p>Olá! Eu sou a Sabrina, estudante de Desenvolvimento Web...</p>
                    <p>Aqui você pode escrever parágrafos longos, contar sobre sua transição de carreira, 
                    sua experiência com suporte técnico e seus planos para o futuro pós-SCTEC.</p>
                    <p>Como esse espaço não tem caixa, ele pode crescer o quanto você precisar!</p>
                </div>`;
        }
        
        else if (section === 'lab') {
            text.innerHTML = "<h2>Projetos</h2>";
            corpo.innerHTML = `
                <div class="sessao-livre">
                    <div class="projeto-item">
                        <h3>🛒 Comparador de Preços - Blumenau</h3>
                        <p>App criado para monitorar preços nos mercados Giassi, Cooper e Bistek.</p>
                        <a href="https://github.com/eubinacorrea" target="_blank" style="color: #00fff0;">[ Ver Código no GitHub ]</a>
                    </div>
                    <hr style="margin: 20px 0; opacity: 0.2;">
                    <div class="projeto-item">
                        <h3>💻 Projeto SCTEC</h3>
                        <p>Desenvolvido durante o curso da Sesi Senai.</p>
                    </div>
                </div>`;
        }
        
        else if (section === 'contato') {
            text.innerHTML = "<h2>Contato</h2>";
            corpo.innerHTML = `
                <div class="sessao-livre">
                    <p>Vamos conversar? Você pode me encontrar aqui:</p>
                    <form style="display: flex; flex-direction: column; gap: 10px; max-width: 400px;">
                        <input type="text" placeholder="Seu nome" style="padding: 10px; background: rgba(0,0,0,0.3); color: white; border: 1px solid #fff;">
                        <textarea placeholder="Sua mensagem" style="padding: 10px; background: rgba(0,0,0,0.3); color: white; border: 1px solid #fff; height: 100px;"></textarea>
                        <button type="submit" class="btn-nav"><span>Enviar</span></button>
                    </form>
                    <div style="margin-top: 20px;">
                        <p>Ou pelas redes:</p>
                        <a href="#" style="color: #00fff0;">LinkedIn</a> | <a href="#" style="color: #00fff0;">GitHub</a>
                    </div>
                </div>`;
        }

        box.classList.remove('glitch-effect');
    }, 400);
}