



import Jogo from '../models/Jogo.js';
import Usuario from '../models/Usuario.js';
import Chave from '../models/Chave.js';
export async function home(req,res){
    res.render('admin/index')
}
export async function abreaddusuario(req, res) {
    res.render('admin/usuario/addusuario')
}
export async function addusuario(req, res) {
    await Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,})
        

    res.redirect('/admin/usuario/addusuario')
    
}
export async function filtrarusuario(req, res) {
  const resposta = await Usuario.find({nome: new RegExp(req.body.pesquisar,"i")})
     res.render('admin/usuario/lstusuario',{Usuarios: resposta});
}

export async function listarusuario(req, res) {
    const resultado = await Usuario.find({}).catch(function(err){console.log(err)});
    res.render('admin/usuario/lstusuario',{Usuarios: resultado});
    res.render('admin/usuario/lstusuario');
}

export async function deletausuario(req, res) {
    await Usuario.findByIdAndDelete(req.params.id);
    res.redirect("/admin/usuario/lstusuario");
}

export async function abreedtusuario(req, res) {
  const usuario =  await Usuario.findById(req.params.id)
  res.render("admin/usuario/edtusuario.ejs", { "Usuario": usuario })
}

export async function edtusuario(req, res) {
    const usuario = await Usuario.findById(req.params.id)
    usuario.nome = req.body.nome
    usuario.email = req.body.email
    usuario.senha = req.body.senha
  
    await usuario.save()
    res.redirect("/admin/usuario/lstusuario")
  
  }

//gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg




export async function abreaddjogo(req, res){
   
    res.render('admin/Jogos/addjogo')
}
export async function addjogo(req, res){
    var imagemupload
if(req.file!=null)
{
imagemupload=req.file.filename
}
else
{
imagemupload=null
}
    await Jogo.create({
        nome: req.body.nome,
        genero: req.body.genero,
        datadelancamento: req.body.datadelancamento.toLocaleString("pt-BR"),
        desenvolvedora: req.body.desenvolvedora,
        categoria: req.body.categoria,
        imagem: imagemupload,
        preco: req.body.preco,
        })


    res.redirect('/admin/Jogos/addjogo')
}

export async function abreedtjogo(req, res){
   
    const jogo =  await Jogo.findById(req.params.id)
    res.render("admin/Jogos/edtjogo", { "Jogo": jogo })
}
export async function edtjogo(req, res){
  var imagemupload;

  if (req.file != null) {
    imagemupload = req.file.filename;
  }

  const jogo = await Jogo.findById(req.params.id);

  jogo.nome = req.body.nome;
  jogo.genero = req.body.genero;
  jogo.datadelancamento = req.body.datadelancamento;
  jogo.desenvolvedora = req.body.desenvolvedora;
  jogo.categoria = req.body.categoria;

  if (imagemupload != null) {
    jogo.imagem = imagemupload;
  }

  jogo.preco = req.body.preco;

  await jogo.save();
  res.redirect("/admin/Jogos/lstjogo");
}
  


export async function listarjogo(req, res) {
    const resultado2 = await Jogo.find({}).catch(function(err){console.log(err)});
    res.render('admin/Jogos/lstjogo',{Jogo: resultado2});
    res.render('admin/Jogos/lstjogo');
}




export async function filtrarjogo(req, res) {
  const resposta = await Jogo.find({nome: new RegExp(req.body.pesquisar,"i")})
     res.render('admin/Jogos/lstjogo',{Jogo: resposta});
}

export async function deletajogo(req, res) {
    await Jogo.findByIdAndDelete(req.params.id);
    res.redirect("/admin/Jogos/lstjogo");
 }

 //ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg



   
    export async function abreaddchave(req, res){
        const jogos = await Jogo.find();
        res.render('admin/chave/addchave', { Jogo: jogos }); 
    }
    

    export async function addchave(req, res){
        
            await Chave.create({
                chave: req.body.chave,
                jogo: req.body.jogo,
            });
            res.redirect('/admin/chave/addchave');
        } 
    
 

export async function abreedtchave(req, res){
    const chave =  await Chave.findById(req.params.id)
    res.render("admin/chave/edtchave", { "Chave": chave })
    
}
export async function edtchave(req, res){
    const chave = await Chave.findById(req.params.id)
    chave.chave = req.body.chave
  
    await chave.save()
    res.redirect("/admin/chave/lstchave")
  
  }
    
 export async function listarchave(req, res) {
        const mostra = await Chave.find().populate('jogo'); 
        res.render('admin/chave/lstchave', { Chave: mostra });
    }
    

export async function filtrarchave(req, res){
      const resposta = await Chave.find({nome: new RegExp(req.body.pesquisar,"i")})
     res.render('admin/chave/lstchave',{Chave: resposta});
}

export async function deletachave(req, res) {
    await Chave.findByIdAndDelete(req.params.id);
    res.redirect("/admin/chave/lstchave");
 }

 //ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

 export async function listarloja(req, res) {
      const resultado3 = await Jogo.find({}).catch(function(err){console.log(err)});
    res.render('admin/Jogos/lstloja',{Jogo: resultado3});
   
    
    
}