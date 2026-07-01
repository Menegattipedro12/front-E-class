// BASE_URL aponta para o JSON local enquanto a API não está integrada.
// Quando a API estiver pronta, basta trocar para: '://localhoshttpt:3000/api'
const BASE_URL = '://localhoshttpt:3000/api/';

// Função interna que simula um GET na "API"

// Retorna todos os jogos
async function getJogos() {
    const response = await fetch(`${BASE_URL}/jogos`);
    const data = await response.json();
    return data;
}

// Retorna todos os times
async function getTimes() {
    const response = await fetch(`${BASE_URL}/times`);
    const data = await response.json();
    return data;
}

// Retorna todos os competidores
async function getCompetidores() {
    const response = await fetch(`${BASE_URL}/competidores`);
    const data = await response.json();
    return data;
}

// Retorna todos os confrontos
async function getConfrontos() {
    const response = await fetch(`${BASE_URL}/confrontos`);
    const data = await response.json();
    return data;
}