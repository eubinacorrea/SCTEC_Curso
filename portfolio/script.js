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
            logoFundo.style.opacity = "0.8";
        }// Valor para a home/bio

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
                    <img src="eu.png" class="minha-foto" style="float: left; margin-right: 20px;">
                    <p id="sobre">Olá! Me chamo Sabrina, estudo Desenvolvimento Web com o projeto do SESI/SENAI - SCTEC.</p>
                    <hr style="margin: px 0; opacity: 0.5;">
                    <p id="sobre2">Após a finalização do meu curso atual ja estou me programando para iniciar um novo curso profissionalizante ou ensino superior na área.</p>
                     <p id="sobre2">Venho da área de atendimento, trabalhei em loja de moda praia e fitness, escola de inglês, e-commerce e também numa instituição financeira, como terceirizada, apoiando no processo de acordos financeiros de clientes inadimplentes. Por último consegui uma oportuinidade em uma empresa de T.I focada em sistema para gerenciamento de empresas, onde atuei como suporte tecnico.</p>
                    
                </div>`;
        }

        else if (section === 'lab') {
            text.innerHTML = "<h2></h2>";
            corpo.innerHTML = `
                <div class="sessao-livre">
                    <div class="projeto-item">
                        <h3>💻 Projeto SCTEC</h3>
                        <p>Todos os projetos abaixo foram desenvolvidos durante o curso SCTEC-SESI/SENAI.</p>
                        <a href="https://github.com/eubinacorrea/SCTEC_Curso/" target="_blank" style="color: #ffffff;">[ Ver Códigos no GitHub ]</a>
                    </div>
                    <hr style="margin: 20px 0; opacity: 0.3;">
                
                    <p>Portfólio ainda em construção, em breve imagem com link para todos os projetos realizados </p><img src="construindo.png" alt="construção" id="construcao">
                    

                </div>`;
        }// COLOCAR AS IMAGENS DOS PROJETOS ACIMA

        else if (section === 'contato') {
            text.innerHTML = "<h2></h2>";
            corpo.innerHTML = `
                <div class="sessao-livre" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                    <p>Vamos conversar? <br> Você pode me enviar uma mensagem:</p>                    
                    
                    <form onsubmit="alert('Mensagem enviada com sucesso!'); this.reset(); return false;" 
                          style="display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 400px; margin-bottom: 30px;">

                        <input type="text" placeholder="Seu nome" style="padding: 10px; background: rgba(0, 0, 0, 0.16); color: white; border: 6px solid #ffffff60; border-radius: 5px;" required>

                        <input type="email" placeholder="Seu e-mail" style="padding: 10px; background: rgba(0, 0, 0, 0.16); color: white; border: 6px solid #ffffff60; border-radius: 5px;" required>

                        <textarea placeholder="Sua mensagem" style="padding: 10px; background: rgba(0,0,0,0.16); color: white; border: 6px solid #ffffff60; border-radius: 5px; height: 100px; resize: none;" required></textarea>

                        <button type="submit" class="btn-nav" style="align-self: center; width: 150px;"><span>Enviar</span></button>
                    </form>

                    <div style="width: 100%;">
                        <p style="margin-bottom: 15px;">Ou me contatar pelas redes:</p>
                        <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
                            <a href="https://www.linkedin.com/in/biinaa-correa/" target="_blank"><img src="icon_linkedin_1.svg" alt="LinkedIn" style="width: 40px; height: 40px;"></a>
                            <span style="opacity: 0.3;">|</span>
                            <a href="https://github.com/eubinacorrea" target="_blank"><img src="icon_github.svg" alt="GitHub" style="width: 40px; height: 40px;"></a>
                            <span style="opacity: 0.3;">|</span>
                            <a href="https://api.whatsapp.com/send?phone=5547996132914" target="_blank"><img src="icon_whats.svg" alt="Whatsapp" style="width: 40px; height: 40px;"></a>
                        </div>
                    </div>
                </div>`;
        }

        box.classList.remove('glitch-effect');
    }, 400);
}

const formulario = document.getElementById('meuFormContato');
if (formulario) {
    formulario.onsubmit = function (event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
        formulario.reset();
    };
}
