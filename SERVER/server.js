const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const list = require("./model/product");

const app = express();
app.use(cors());
app.use(express.json());

const mongo ="mongodb+srv://Rayala:prasad333@prasad.lterq.mongodb.net/Ecommerce?retryWrites=true&w=majority";

mongoose.connect(mongo).then((res)=>{
                                 console.log("db-connected")
                                    },
                            (err)=>{
                                console.log(erer,"db connection fail")
                            });

                            
//get request
    app.get('/brand', async (req,res)=>{
        try{
            const allbrands = await list.find()
            return  res.json(allbrands)
        }catch(err){
                console.log(err.message,"get req err")
      
        }
    })

//get by id
    app.get('/brand/:id', async (req,res)=>{
        try{
                const brand = await list.findById(req.params.id);
                return res.json(brand)
        }catch(err){
            console.log(err.message)
        }
    })

    
app.listen(8080,()=>{
    console.log("Server Running on port 8080")
})