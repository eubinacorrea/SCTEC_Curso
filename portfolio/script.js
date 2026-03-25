function changeTab(section) {
    const box = document.getElementById('content-box');
    const grid = document.getElementById('gridBg');
    const text = document.getElementById('text-content'); // Mantém o título na box
    const backBtn = document.getElementById('back-button');
    const corpo = document.getElementById('corpo-do-site'); // Onde a mágica acontece agora
    const logoFundo = document.getElementsByClassName('vertical')[0];

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
     if (section === 'skills' || section === 'lab' || section === 'contato') {
            logoFundo.style.top = "50%"; 
            logoFundo.style.opacity = "0.04";
        } else {
            logoFundo.style.top = "50%"; 
            logoFundo.style.opacity = "0.8"; }// Valor para a home/bio

        // --- LÓGICA DO BOTÃO VOLTAR ---
        if (section === 'bio') {
            backBtn.classList.add('hidden');
            corpo.innerHTML = ""; // Limpa o corpo quando volta pra home
        } else {
            backBtn.classList.remove('hidden');
        }

        // --- TROCA DE CONTEÚDO ---
        
        if (section === 'bio') {
            
        }
        
        else if (section === 'skills') {
            // No menu deixamos apenas o título
            text.innerHTML = "<h2></h2>";
            
            // No CORPO DO SITE (quadrado vermelho) colocamos a sua história
            corpo.innerHTML = `
                <div class="sessao-livre">
                    <img src="eu.png" class="minha-foto" style="float: left; margin-right: 30px;">
                    <p>Olá! Eu sou a Sabrina, estudo Desenvolvimento Web...</p>
                    <p>Aqui você pode escrever parágrafos longos, contar sobre sua transição de carreira, 
                    sua experiência com suporte técnico e seus planos para o futuro pós-SCTEC.</p>
                    <p>Como esse espaço não tem caixa, ele pode crescer o quanto você precisar!</p>
                    
                </div>`;
        }
        
        else if (section === 'lab') {
            text.innerHTML = "<h2></h2>";
            corpo.innerHTML = `
                <div class="sessao-livre">
                    <div class="projeto-item">
                        <h3>💻 Projeto SCTEC</h3>
                        <p>Todos os projetos abaixo foram desenvolvidos durante o curso SCTEC - SESI/SENAI.</p>
                        <a href="https://github.com/eubinacorrea/SCTEC_Curso/" target="_blank" style="color: #ffffff;">[ Ver Códigos no GitHub ]</a>
                    </div>
                    <hr style="margin: 20px 0; opacity: 0.3;">
                
                    <img src="" alt="noem do projeto" id="">

                </div>`;
        }// COLOCAR AS IMAGENS DOS PROJETOS ACIMA
        
        else if (section === 'contato') {
            text.innerHTML = "<h2></h2>";
            corpo.innerHTML = `
                <div class="sessao-livre" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                    <p>Vamos conversar? <br> Você pode me enviar uma mensagem:</p>                     
                    
                    <form style="display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 400px;">
                        <input type="text" placeholder="Seu nome" style="padding: 10px; background: rgba(0, 0, 0, 0.16); color: white; border: 6px solid #ffffff60; border-radius: 5px;">
                        <input type="email" placeholder="Seu e-mail" style="padding: 10px; background: rgba(0, 0, 0, 0.16); color: white; border: 6px solid #ffffff60; border-radius: 5px;">
                        <textarea placeholder="Sua mensagem" style="padding: 10px; background: rgba(0,0,0,0.16); color: white; border: 6px solid #ffffff60; border-radius: 5px; height: 100px; resize: none;"></textarea>
                        <button type="submit" class="btn-nav" style="align-self: center; width: 150px;"><span>Enviar</span></button>
                    </form>

                    <div style="margin-top: 30px;">
                        <p>Ou me contatar pelas redes:</p>
                        <div style="display: flex; justify-content: center; align-items: center; gap: 15px;">
                            <a href="https://www.linkedin.com/in/biinaa-correa/"><img src="icon_linkedin_1.svg" alt="LinkedIn" id="contato"></a>
                            <span style="opacity: 0.3;">|</span>
                            <a href="https://github.com/eubinacorrea"><img src="icon_github.svg" alt="GitHub" id="contato"></a>
                            <span style="opacity: 0.3;">|</span>
                            <a href="https://api.whatsapp.com/send?phone=5547996132914"><img src="icon_whats.svg" alt="Whatsapp" id="contato"></a>
                        </div>
                    </div>
                </div>`;
        }

        box.classList.remove('glitch-effect');
    }, 400);
}

