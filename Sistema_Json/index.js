// Módulo do node.js que faz manipulação de arquivos.
const fs = require("fs");

// Caminho do arquivo JSON 2
const json2Path =
    "C:/Users/bgsouza/Desktop/Arquivos Diversos/Brian/Cursos/Sistema_Json/json2.json";

// Lê o arquivo JSON 2
const jsonFile2 = fs.readFileSync(json2Path);

// Faz o parse do arquivo JSON
const json2 = JSON.parse(jsonFile2);

// Função para remover a propriedade paymentModalityComplete
function removePaymentModalityComplete(obj) {
    if (obj.coverageBreakDown && Array.isArray(obj.coverageBreakDown)) {
        obj.coverageBreakDown = [];
    }
    if (obj.paymentModalityComplete) {
        delete obj.paymentModalityComplete;
    }
}

// Itera sobre o objeto JSON e remove o conteúdo dentro de "coverageBreakDown" e a propriedade "paymentModalityComplete"
function iterateJson(obj) {
    if (Array.isArray(obj)) {
        obj.forEach((item) => {
            iterateJson(item);
        });
    } else if (typeof obj === "object" && obj !== null) {
        Object.keys(obj).forEach((key) => {
            if (
                key === "coverageBreakDown" ||
                key === "paymentModalityComplete"
            ) {
                delete obj[key];
            } else {
                iterateJson(obj[key]);
            }
        });
    }
}

iterateJson(json2);

// Converte o JSON modificado para string
const jsonString2Modified = JSON.stringify(json2, null, 2);

// Caminho para o arquivo JSON modificado
const json2ModifiedPath =
    "C:/Users/bgsouza/Desktop/Arquivos Diversos/Brian/Cursos/Sistema_Json/json2_modified.json";

// Grava o JSON modificado em um arquivo
fs.writeFileSync(json2ModifiedPath, jsonString2Modified);

console.log("JSON 2 modificado gerado com sucesso!");
