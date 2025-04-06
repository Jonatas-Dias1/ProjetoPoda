
import express from 'express';
const router = express.Router();
import {
    home,
    //ggggggggggggggggggggggggggg
    abreedtusuario,
    edtusuario,
    deletausuario,
    listarusuario,
    filtrarusuario,
    abreaddusuario,
    addusuario,
    //gggggggggggggggggggggggggggggggggggggggg
    abreaddjogo,
    addjogo,
    abreedtjogo,
    edtjogo,
    listarjogo,
    filtrarjogo,
    deletajogo,
    //ggggggggggggggggggggggggggggggggggggggggg
    abreaddchave,
    addchave,
    abreedtchave,
    edtchave,
    listarchave,
    filtrarchave,
    deletachave

 
} from '../controllers/controller.js'
router.get('/', home)
//time
//create do modelo time (create)
router.get('/admin/usuario/addusuario', abreaddusuario)
router.post('/admin/usuario/addusuario', addusuario)
//rotas do modelo time (read)
router.get('/admin/usuario/lstusuario', listarusuario)
router.post('/admin/usuario/lstusuario', filtrarusuario)
//rota do modelo time (delete)
router.get('/admin/usuario/delusuario/:id', deletausuario)
//rota do modelo time (editar)
router.get('/admin/usuario/edtusuario/:id', abreedtusuario)
router.post('/admin/usuario/edtusuario/:id', edtusuario)
//gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg


router.get('/admin/jogos/addjogo', abreaddjogo)
router.post('/admin/jogos/addjogo', addjogo)

router.get('/admin/jogos/edtjogo', abreedtjogo)
router.post('/admin/jogos/edtjogo', edtjogo)

router.get('/admin/jogos/lstjogo', listarjogo)
router.post('/admin/jogos/lstjogo', filtrarjogo)

router.get('/admin/jogos/lstjogo', deletajogo)

//ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg


router.get('/admin/chave/addchave', abreaddchave)
router.post('/admin/chave/addchave', addchave)

router.get('/admin/chave/edtchave', abreedtchave)
router.post('/admin/chave/edtchave', edtchave)

router.get('/admin/chave/lstchave', listarchave)
router.post('/admin/chave/lstchave', filtrarchave)

router.get('/admin/chave/lstchave', deletachave)



export default router