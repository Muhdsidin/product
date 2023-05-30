const express = require("express")
const app = express()
const PORT = 3005
const ProductList = require("./ProductList.json")
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get("/api/product",(req,res)=>{
    console.log(ProductList)
    res.status(200).json(ProductList)
})
console.log(ProductList)



app.listen(PORT, ()=>{

    console.log(`server is starting in --> ${PORT}`)
})