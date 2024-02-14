function calcularNivel(nVitorias, nDerrotas) {
    // Calcula numero de vitorias menos o numero de derrotas
    const saldoDeVitorias = nVitorias - nDerrotas;
    let nivel; // Variável para armazenar o nível do jogador

    // Verificando por meio de if independente o número de vitórias
    if (nVitorias < "10") {
        nivel = "Ferro"; 
    }

    
    if (nVitorias >= "11" && nVitorias <= "20") {
        nivel = "Bronze"; 
    }

    
    if (nVitorias >= "21" && nVitorias <= "50") {
        nivel = "Prata"; 
    }

    
    if (nVitorias >= "51" && nVitorias <= "80") {
        nivel = "Ouro"; 
    }

    
    if (nVitorias >= "81" && nVitorias <= "90") {
        nivel = "Diamante"; 
    }

    
    if (nVitorias >= "91" && nVitorias <= "100") {
        nivel = "Lendário"; 
    }

    // Caso nenhum dos anteriores sejam verdadeiros
    if (!nivel) {
        nivel = "Imortal";
    }

    return { saldoDeVitorias, nivel }; // Retorna o saldo e o nível
}

// Definindo quantidade de vitorias e derrotas
const quantidadeVitorias = "80"; 
const quantidadeDerrotas = "20"; 

// Chama a função calcularNivel com as quantidades de vitórias e derrotas
const { saldoDeVitorias, nivel } = calcularNivel(quantidadeVitorias, quantidadeDerrotas);

// printa mensagem de saldo e nivel que o Herói possui
console.log(`O Herói tem de saldo de ${saldoDeVitorias} e está no nível de ${nivel}`);
