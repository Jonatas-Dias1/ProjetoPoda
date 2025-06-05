
import express from 'express';
const router = express.Router();
import multer from 'multer';
var storage = multer.diskStorage({
    filename: function(req, file, cb){
    let nome = Date.now() + "-" + file.originalname
    cb(null, nome)
    },
    destination: function(req, file, cb){
    let path = "./public/img"
    cb(null, path)
    }
    })
    var upload = multer({ storage })
import {
    home,
    //gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
    abreedtusuario,
    edtusuario,
    deletausuario,
    listarusuario,
    filtrarusuario,
    abreaddusuario,
    addusuario,
    //gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
    abreaddjogo,
    addjogo,
    abreedtjogo,
    edtjogo,
    listarjogo,
    filtrarjogo,
    deletajogo,
    //gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
    abreaddchave,
    addchave,
    abreedtchave,
    edtchave,
    listarchave,
    filtrarchave,
    deletachave,
    //ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
    listarloja

 
} from '../controllers/controller.js'
router.get('/', home)


router.get('/admin/usuario/addusuario', abreaddusuario)
router.post('/admin/usuario/addusuario', addusuario)

router.get('/admin/usuario/lstusuario', listarusuario)
router.post('/admin/usuario/lstusuario', filtrarusuario)

router.get('/admin/usuario/delusuario/:id', deletausuario)

router.get('/admin/usuario/edtusuario/:id', abreedtusuario)
router.post('/admin/usuario/edtusuario/:id', edtusuario)
//gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg


router.get('/admin/Jogos/addjogo', abreaddjogo)
router.post('/admin/Jogos/addjogo', upload.single('imagem'), addjogo)

router.get('/admin/Jogos/edtjogo/:id', abreedtjogo)
router.post('/admin/Jogos/edtjogo/:id', upload.single('imagem'), edtjogo)

router.get('/admin/Jogos/lstjogo', listarjogo)
router.post('/admin/Jogos/lstjogo', filtrarjogo)

router.get('/admin/Jogos/deljogo/:id', deletajogo)

//ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg


router.get('/admin/chave/addchave', abreaddchave)
router.post('/admin/chave/addchave', addchave)

router.get('/admin/chave/edtchave/:id', abreedtchave)
router.post('/admin/chave/edtchave/:id',  edtchave)

router.get('/admin/chave/lstchave', listarchave)
router.post('/admin/chave/lstchave', filtrarchave)

router.get('/admin/chave/delchave/:id', deletachave)

//gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

router.get('/admin/Jogos/lstloja', listarloja)



export default router