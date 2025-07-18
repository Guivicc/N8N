//variaveis globais
let jogojson ;
let jogo ;
let modoDeJogo;
let jogada;
let quemComeca
let totalJogadas
let dificuldade

//monitoramento do tabuleiro


//variáveis tabuleiro
let A1 = " ";
let A2 = " ";     
let A3 = " ";    
let B1 = " ";
let B2 = " ";
let B3 = " ";
let C1 = " ";
let C2 = " ";
let C3 = " ";


casas = document.querySelectorAll('.casas');
casas.forEach(casa => {
    casa.addEventListener('click', (event) => {
        if(jogada === "Player"){
            let conteudo = event.target.textContent
            if(conteudo === ""){
                event.target.textContent = "X"
                let att = event.target.id 
                

                switch (att) {
                    case 'A1':
                        A1 = "X"
                        jogada = "IA"
                        criarJSON()
                        totalJogadas++
                        validarVitoraNormal()
                        if(jogada !== "fim"){
                            enviarParaN8N()
                        }   
                        break;
                
                    case 'A2':
                        A2 = "X"
                        jogada = "IA"
                        criarJSON()
                        totalJogadas++
                        validarVitoraNormal()
                        if(jogada !== "fim"){
                            enviarParaN8N()
                        }   
                        break;

                    case 'A3':
                        A3 = "X"
                        jogada = "IA"
                        criarJSON()
                        totalJogadas++
                        validarVitoraNormal()
                        if(jogada !== "fim"){
                            enviarParaN8N()
                        }
                        break;
                    case 'B1':
                        B1 = "X"
                        jogada = "IA"
                        criarJSON()
                        totalJogadas++
                        validarVitoraNormal()
                        if(jogada !== "fim"){
                            enviarParaN8N()
                        }
                        break;
                
                    case 'B2':
                        B2 = "X"
                        jogada = "IA"
                        criarJSON()
                        totalJogadas++
                        validarVitoraNormal()
                        if(jogada !== "fim"){
                            enviarParaN8N()
                        }
                        break;

                    case 'B3':
                        B3 = "X"
                        jogada = "IA"
                        criarJSON()
                        totalJogadas++
                        validarVitoraNormal()
                        if(jogada !== "fim"){
                            enviarParaN8N()
                        }
                        break;

                    case 'C1':
                        C1 = "X"
                        jogada = "IA"
                        criarJSON()
                        totalJogadas++
                        validarVitoraNormal()
                        if(jogada !== "fim"){
                            enviarParaN8N()
                        }
                        break;
                
                    case 'C2':        
                        C2 = "X"
                        jogada = "IA"
                        criarJSON()
                        totalJogadas++
                        validarVitoraNormal()
                        if(jogada !== "fim"){
                            enviarParaN8N()
                        }
                        break;

                    case 'C3':
                        C3 = "X"
                        jogada = "IA"
                        criarJSON()
                        totalJogadas++
                        validarVitoraNormal()
                        if(jogada !== "fim"){
                            enviarParaN8N()
                        }
                        break;
                }
            }

        }

    })  
});


function validacao(){


    const errosAviso = document.querySelector('#erros') ;
    const menuJogo = document.querySelector('.opcoes');
    const tabuleiro = document.querySelector('.board')
    

    //validaçoes
    const dificuldadeChecked = document.querySelector('input[name="dificuldade"]:checked');
    const modoDeJogoChecked = document.querySelector('input[name="gameMode"]:checked');
    const primeiroJogadorChecked = document.querySelector('input[name="quemComeca"]:checked');

    if(!dificuldadeChecked || !modoDeJogoChecked || !primeiroJogadorChecked){
        errosAviso.textContent = "Preencha todas as opções";
        return;
    }
    errosAviso.textContent = "" ;

    totalJogadas = 0
    modoDeJogo = modoDeJogoChecked.value;
    jogada = primeiroJogadorChecked.value;
    quemComeca = primeiroJogadorChecked.value;
    dificuldade = dificuldadeChecked.value;

    //criando JSON
    criarJSON()
    
        
    //caso a ia começe 
    if(jogada == 'IA'){
        enviarParaN8N()
    }


    //escondendo menu 
    menuJogo.classList.remove('active'); //remove a classe

    menuJogo.addEventListener('transitionend', (event) => {
        if(event.propertyName === 'opacity'){
            menuJogo.style.display = 'none';
            tabuleiro.style.display = 'flex'
        }
    }, { once: true})

    

    setTimeout(() => {
        //mostando tabuleiro
        tabuleiro.classList.add('active');
    }, 400);

}

async function enviarParaN8N() {
    const webhook = 'https://guivicc.app.n8n.cloud/webhook/8723e698-ddcd-444b-9db9-374bacb44bb1';

    let resposta = await fetch(webhook, {
        method:'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(jogojson)
    })
    //valindado resposta da ia
    if (resposta.ok) {
        try {
            const dadosIA = await resposta.json();
            let jogadaDaIA = dadosIA.output; // Ex: "B2"
            jogadaDaIA = jogadaDaIA.replace(/\s/g, '');
            console.log(jogadaDaIA)

            if (!jogadaDaIA) {
                console.error("Erro: A resposta da IA não contém a propriedade 'jogada'.");
                return;
            }

            console.log("IA sugeriu a jogada:", jogadaDaIA);
            if(jogada === 'IA'){
                
                switch (jogadaDaIA) {
                    case 'A1':
                        if(A1 === " "){
                            A1 = "O"
                            document.getElementById('A1').textContent = "O"
                            totalJogadas++
                            validarVitoraNormal()
                            if(jogada !== "fim"){
                                jogada = "Player"
                            }
                        }
                        else{
                            console.log("lugar ja jogado", A1)
                        }
                        break;
                    case 'A2':
                        console.log(A2)
                            if(A2 === " "){
                                A2 = "O"
                                document.getElementById('A2').textContent = "O"
                                totalJogadas++
                                validarVitoraNormal()
                                if(jogada !== "fim"){
                                jogada = "Player"
                                }
                            }
                            else{
                                console.log("lugar ja jogado", A2)
                            }
                            break;
                    case 'A3':
                        console.log(A3)
                            if(A3 === " "){
                                A3 = "O"
                                document.getElementById('A3').textContent = "O"
                                totalJogadas++
                                validarVitoraNormal()
                                if(jogada !== "fim"){
                                jogada = "Player"
                            }
                            }
                            else{
                                console.log("lugar ja jogado", A1)
                            }
                
                        break;
                    case 'B1':
                        console.log(B1)
                        if(B1 === " "){
                            console.log("entrou no switch case")
                            B1 = "O"
                            document.getElementById('B1').textContent = "O"
                            totalJogadas++
                            validarVitoraNormal()
                            jogada = "Player"
                        }
                        else{
                            console.log("lugar ja jogado", B1)
                        }
                        break;
                
                    case 'B2':
                        console.log(B2)
                        if(B2 === " "){
                            console.log("entrou no switch case")
                            B2 = "O"
                            document.getElementById('B2').textContent = "O"
                            totalJogadas++
                            validarVitoraNormal()
                            jogada = "Player"
                        }
                        else{
                            console.log("lugar ja jogado", B2)
                        }
                        break;
                    case 'B3':
                        console.log(B3)
                        if(B3 === " "){
                            B3 = "O"
                            document.getElementById('B3').textContent = "O"
                            totalJogadas++
                            validarVitoraNormal()
                            jogada = "Player"
                        }
                        else{
                            console.log("lugar ja jogado", B3)
                        }
                        break;
                
                    case 'C1':
                        console.log(C1)
                        if(C1 === " "){
                            C1 = "O"
                            document.getElementById('C1').textContent = "O"
                            totalJogadas++
                            validarVitoraNormal()
                            jogada = "Player"
                        }
                        else{
                            console.log("lugar ja jogado", C1)
                        }
                        break;
                
                    case 'C2':
                        console.log(C2)
                        if(C2 === " "){
                            C2 = "O"
                            document.getElementById('C2').textContent = "O"
                            totalJogadas++
                            validarVitoraNormal()
                            jogada = "Player"
                        }
                        else{
                            console.log("lugar ja jogado", C2)
                        }
                        break;
                    case 'C3':
                        console.log(C3)
                        if(C3 === " "){
                            C3 = "O"
                            document.getElementById('C3').textContent = "O"
                            totalJogadas++
                            validarVitoraNormal()
                            jogada = "Player"
                        }
                        else{
                            console.log("lugar ja jogado", C3)
                        }
                        break;
                
                }
            }
            

               

        } catch (error) {
            console.error("Erro ao processar a resposta da IA.", error);
        }
    } else {
        console.error("Erro na comunicação com o webhook:", resposta.status, resposta.statusText);
    }
}


function criarJSON(){
    jogo = {
        A1, A2, A3, B1, B2, B3, C1, C2, C3,
        modoDeJogo,
        jogada,
        dificuldade   
    }

    jogojson = JSON.stringify(jogo);
}

function validarVitoraNormal(){
    //vitoria em linha
    //X
    if(A1 == 'X' && A2 == 'X' && A3 == 'X'){
        if(modoDeJogo === "normal"){
            document.getElementById('resultado').textContent = "X ganhou na linha 1"
            jogada = 'fim'
            return
        }
        else{
            document.getElementById('resultado').textContent = "X perdeu na linha 1"
            jogada = 'fim'
            return
        }
    }

    if(B1 == 'X' && B2 == 'X' && B3 == 'X'){
        if(modoDeJogo === "normal"){
            document.getElementById('resultado').textContent = "X ganhou na linha 2"
            jogada = 'fim'
            return
        }
        else{
            document.getElementById('resultado').textContent = "X perdeu na linha 2"
            jogada = 'fim'
            return
        }
    }

    if(C1 == 'X' && C2 == 'X' && C3 == 'X'){
        if(modoDeJogo === "normal"){
            document.getElementById('resultado').textContent = "X ganhou na linha 3"
            jogada = 'fim'
            return
        }
        else{
            document.getElementById('resultado').textContent = "X perdeu na linha 3"
            jogada = 'fim'
            return
        }
    }
    //O
        if(A1 == 'O' && A2 == 'O' && A3 == 'O'){
            if(modoDeJogo === "normal"){
                document.getElementById('resultado').textContent = "O ganhou na linha 1"
                jogada = 'fim'
            return
            }
            else{
                document.getElementById('resultado').textContent = "O perdeu na linha 1"
                jogada = 'fim'
                return
            }
    }

    if(B1 == 'O' && B2 == 'O' && B3 == 'O'){
        if(modoDeJogo){
            document.getElementById('resultado').textContent = "O ganhou na linha 2"
            jogada = 'fim'
            return
        }
        else{
            document.getElementById('resultado').textContent = "O perdeu na linha 2"
            jogada = 'fim'
            return
        }
    }

    if(C1 == 'O' && C2 == 'O' && C3 == 'O'){
        if(modoDeJogo === "normal"){
            document.getElementById('resultado').textContent = "O ganhou na  linha 3"
            jogada = 'fim'
            return
        }
        else{
            document.getElementById('resultado').textContent = "O perdeu na linha 3"
            jogada = 'fim'
            return
        }
    }
    //vitória em coluna
    //X
    if(A1 == 'X' && B1 == 'X' && C1 == 'X'){
        if(modoDeJogo === "normal"){
            document.getElementById('resultado').textContent = 'X ganhou na coluna 1'
            jogada = 'fim'
            return
        }
        else{
            document.getElementById('resultado').textContent = "X perdeu na coluna 1"
            jogada = 'fim'
            return
        }
    }

    if(A2 == 'X' && B2 == 'X' && C2 == 'X'){
        if(modoDeJogo === "normal"){
        document.getElementById('resultado').textContent = 'X ganhou na coluna 2'
        jogada = 'fim'
        return
        }
        else{
            document.getElementById('resultado').textContent = "X perdeu na coluna 2"
            jogada = 'fim'
            return
        }
    }

    if(A3 == 'X' && B3 == 'X' && C3 == 'X'){
        if(modoDeJogo === "normal"){
            document.getElementById('resultado').textContent = 'X ganhou na coluna 3'
            jogada = 'fim'
            return
        }
        else{
            document.getElementById('resultado').textContent = "X  perdeu na coluna 3"
            jogada = 'fim'
            return
        }
    }
    //O
    if(A1 == 'O' && B1 == 'O' && C1 == 'O'){
        if(modoDeJogo === "normal"){
        document.getElementById('resultado').textContent = 'O  ganhou na coluna 1'
        jogada = 'fim'
        return
        }
        else{
            document.getElementById('resultado').textContent = "O perdeu na coluna 1"
            jogada = 'fim'
            return
        }
    }

    if(A2 == 'O' && B2 == 'O' && C2 == 'O'){
        if(modoDeJogo === "normal"){
        document.getElementById('resultado').textContent = 'O ganhou na coluna 2'
        jogada = 'fim'
        return
        }
        else{
            document.getElementById('resultado').textContent = "O perdeu na coluna 2"
            jogada = 'fim'
            return
        }
    }

    if(A3 == 'O' && B3 == 'O' && C3 == 'O'){
        if(modoDeJogo === "normal"){
        document.getElementById('resultado').textContent = 'O ganhou na coluna 3'
        jogada = 'fim'
        return
        }
        else{
            document.getElementById('resultado').textContent = "X perdeu na coluna 3"
            jogada = 'fim'
            return
        }
    }
    //diagonal principal
    if(A1 == 'X' && B2 == 'X' && C3 == 'X'){
        if(modoDeJogo === "normal"){
        document.getElementById('resultado').textContent = 'X ganhou na diagonal principal'
        jogada = 'fim'
        return
        }
        else{
            document.getElementById('resultado').textContent = "X perdeu na diagonal principal"
            jogada = 'fim'
            return
        }
    }
    //O
    if(A1 == 'O' && B2 == 'O' && C3 == 'O'){
        if(modoDeJogo==="normal"){
        document.getElementById('resultado').textContent = 'O ganhou na diagonal principal'
        jogada = 'fim'
        return
        }
        else{
            document.getElementById('resultado').textContent = "O perdeu na diagonal principal"
            jogada = 'fim'
            return
        }
    }
    //diagonal secundaria
    if(A3 == 'X' && B2 == "X" && C1 == 'X'){
        if(modoDeJogo === "normal"){
        document.getElementById('resultado').textContent = 'X ganhou na diagonal secundaria'
        jogada = 'fim'
        return
        }
        else{
            document.getElementById('resultado').textContent = "X perdeu na diagonal secundaria"
            jogada = 'fim'
            return
        }
    }

    if(A3 == 'O' && B2 == "O" && C1 == 'O'){
        if(modoDeJogo === "normal"){
        document.getElementById('resultado').textContent = 'O ganhou na diagonal secundaria'
        jogada = 'fim'
        return
        }
        else{
            document.getElementById('resultado').textContent = "O perdeu na diagonal secundaria"
            jogada = 'fim'
            return
        }
    }

    if(totalJogadas === 9){
        document.getElementById('resultado').textContent = 'empate'
        jogada = 'fim'
        return
    }
}

function reset(){
    A1 = ' '
    A2 = ' '
    A3 = ' '
    B1 = ' '
    B2 = ' '
    B3 = ' '
    C1 = ' '
    C2 = ' '
    C3 = ' '

    document.getElementById('A1').textContent = ''
    document.getElementById('A2').textContent = ''
    document.getElementById('A3').textContent = ''
    document.getElementById('B1').textContent = ''
    document.getElementById('B2').textContent = ''
    document.getElementById('B3').textContent = ''
    document.getElementById('C1').textContent = ''
    document.getElementById('C2').textContent = ''
    document.getElementById('C3').textContent = ''
    document.getElementById('resultado').textContent = ''
    jogada = quemComeca
    totalJogadas = 0
    
    if(quemComeca == 'IA'){
        enviarParaN8N()
    }

}