import conexao from "../config/conexao.js";
import chave from "./Chave.js";

const Jogo = conexao.Schema({

    nome: {
        type: String,
        required: true,
    },
    genero:{
        type: String,
        required: true,
    },
    datadelancamento:{
        type: Date,
        required: true,
    },
    desenvolvedora:{
        type: String,
        required: true,
    },
    categoria:{
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },

    chave: {
        type: String,
        required: true,
    },
  
  

})

export default conexao.model("Jogo", Jogo);