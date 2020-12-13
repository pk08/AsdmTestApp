const express=require('express')
const db=require("./db")
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()

app.use(bodyParser.json())
app.use(cors('*'))
app.get('/products',(request,response)=>
{
 const statement=`select * from products`
 db.query(statement,(error,result)=>
 {
     if(error)
     {
         response.send({status:'error'})
     }
     else{
         response.send(
             {
                 status:'success',
                 data:result
             }
         )
     }
 })
})

app.listen(4000,'0.0.0.0',()=>
{
    console.log('server started on port 4000')
})
