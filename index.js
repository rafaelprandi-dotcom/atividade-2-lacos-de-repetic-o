const readline = require('readline');

// Configura a interface de leitura do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta a temperatura inicial
rl.question('Digite a temperatura inicial em Celsius: ', (inicialInput) => {
    
    // Pergunta a temperatura final
    rl.question('Digite a temperatura final em Celsius: ', (finalInput) => {
        
        let tempInicial = parseInt(inicialInput);
        let tempFinal = parseInt(finalInput);

        // Validação simples caso os dados não sejam números
        if (isNaN(tempInicial) || isNaN(tempFinal)) {
            console.log("Por favor, digite valores numéricos válidos.");
            rl.close();
            return;
        }

        // Garante que o laço funcione mesmo se o usuário digitar o maior primeiro
        if (tempInicial > tempFinal) {
            console.log("A temperatura inicial era maior que a final. Invertendo os valores para o cálculo...\n");
            let aux = tempInicial;
            tempInicial = tempFinal;
            tempFinal = aux;
        }

        let tabelaConversao = [];

        // Laço de repetição FOR
        for (let c = tempInicial; c <= tempFinal; c++) {
            let f = (c * 9 / 5) + 32;
            
            tabelaConversao.push({
                "Celsius (°C)": c,
                "Fahrenheit (°F)": parseFloat(f.toFixed(1))
            });
        }

        // Exibe o resultado formatado em tabela no terminal
        console.table(tabelaConversao);

        // Fecha a interface do terminal
        rl.close();
    });
});