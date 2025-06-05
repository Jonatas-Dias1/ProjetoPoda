

import conexao from "../config/conexao.js";


const jogoSchema = new conexao.Schema({
    
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
    imagem:{
        type:String, 
        required:false
    }
  
 
});

const Jogo = conexao.model("Jogo", jogoSchema);

export default Jogo;

