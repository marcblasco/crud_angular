const router = require('express').Router()
const conexion = require('./config/conexion')



//---------- agregamos rutas--------
//get libros
router.get('/',(req, res)=>{
    let sql ='select * from libros'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//get libros/id

router.get('/:id',(req, res)=>{
    const {id}= req.params
    let sql ='select * from libros where id=?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

module.exports= router;