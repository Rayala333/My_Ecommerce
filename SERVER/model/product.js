const mongoose = require("mongoose");

const mypoducts = new mongoose.Schema({

                    name:{
                        type:String,
                        require:true
                        },
                    brand:{
                        type:String,
                        require:true
                        },
                    rating:{
                        type:Number,
                        require:true
                    },
                    image:{
                        type:String,
                        require:true
                    },
                    review:{
                        type:Number,
                        require:true
                    }

            })

module.exports = mongoose.model("products",mypoducts)