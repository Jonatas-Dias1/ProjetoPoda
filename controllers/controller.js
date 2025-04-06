



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
    res.render('admin/usuario/lstusuario');
}

export async function listarusuario(req, res) {
    const resultado = await Usuario.find({}).catch(function(err){console.log(err)});
    res.render('admin/usuario/lstusuario',{Usuarios: resultado});
    res.render('admin/usuario/lstusuario');
}

export async function deletausuario(req, res) {
   res.redirect('/admin/usuario/lstusuario')
}
export async function abreedtusuario(req, res){
   
    res.render('admin/usuario/edtusuario')
}
export async function edtusuario(req, res){
    res.redirect('/admin/usuario/lstusuario')

}

//gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg




export async function abreaddjogo(req, res){
   
    res.render('admin/jogos/addjogo')
}
export async function addjogo(req, res){
    await Jogo.create({
        nome: req.body.nome,
        genero: req.body.genero,
        datadelancamento: req.body.datadelancamento,
        desenvolvedora: req.body.desenvolvedora,
        categoria: req.body.categoria,
        preco: req.body.preco,})


    res.redirect('/admin/jogos/addjogo')
}

export async function abreedtjogo(req, res){
   
    res.render('admin/jogos/edtjogo')
}
export async function edtjogo(req, res){
    res.redirect('/admin/jogos/edtjogo')
}

export async function listarjogo(req, res) {
    const resultado2 = await Jogo.find({}).catch(function(err){console.log(err)});
    res.render('admin/jogos/lstjogo',{Jogo: resultado2});
    res.render('admin/jogos/lstjogo');
}


   


export async function filtrarjogo(req, res){
    res.redirect('/admin/jogos/lstjogo')
}

export async function deletajogo(req, res) {
    res.redirect('/admin/jogos/lstjogo')
 }

 //ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg


 export async function abreaddchave(req, res){
   
    res.render('admin/chave/addchave')
}
export async function addchave(req, res){
    await Chave.create({
        chave: req.body.chave,
      })


    res.redirect('/admin/chave/addchave')
}

export async function abreedtchave(req, res){
   
    res.render('admin/chave/edtchave')
}
export async function edtchave(req, res){
    res.redirect('/admin/chave/edtchave')
}

export async function listarchave(req, res) {
    const mostra = await Chave.find({}).catch(function(err){console.log(err)});
    res.render('admin/chave/lstchave',{Chave: mostra});
    res.render('admin/chave/lstchave');
}


   


export async function filtrarchave(req, res){
    res.redirect('/admin/chave/lstchave')
}

export async function deletachave(req, res) {
    res.redirect('/admin/chave/lstchave')
 }
