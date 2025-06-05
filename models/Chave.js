import conexao from "../config/conexao.js";

const chaveSchema = new conexao.Schema({
  chave: {
    type: String,
    required: true,
  },
  jogo: {
    type: conexao.Schema.Types.ObjectId,
    ref: "Jogo",
    required: true,
  },
});

const Chave = conexao.model("Chave", chaveSchema);

export default Chave;
