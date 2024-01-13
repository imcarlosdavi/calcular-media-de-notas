//exercício de While

let mediaGeral = 0
let qtdDeHomens = 0
let qtdDemulheres = 0
let mulheresComMaiorNota = 0
let maiorNotaHomens = 0
let contador = 1

while(contador <= 10){
    nota = parseInt(prompt("Qual sua nota? "+contador+" Aluno"))
    sexo = prompt("Qual seu sexo? (M/F)")

    if(sexo == "M"){
       if(nota > maiorNotaHomens){
        maiorNotaHomens = nota
       }
       qtdDeHomens++;
    }
    
    if(sexo == "F" && nota > 7){
        mulheresComMaiorNota++;
    }

    if(sexo == "F"){
        qtdDemulheres++;
    }

    mediaGeral += nota;
    contador++
}

mediaGeral = mediaGeral / 10

document.body.innerHTML += `A média geral dos alunos é:  ${mediaGeral}\n 
Quantidade de homens cadastrados: ${qtdDeHomens}\n Quantidade de mulheres cadastradas: ${qtdDemulheres}\n 
Mulheres com nota acima de 7: ${mulheresComMaiorNota}\n Maior nota entre os homens: ${maiorNotaHomens}`