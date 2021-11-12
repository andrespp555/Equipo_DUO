const express = require ("express");

const User = require("../models/user");

const app = express();

app.use( express.urlencoded({extended: false}));
app.use( express.json());

find_user = async (req, res) => {
    const find_u = await User.find({email: req.params.email})
    try{
        if(find_u) return res.status(200).send({find_u});
        else return res.status(500).json({error: true, mensaje: "Falla"});
    }catch(error){
        return res.staus(500).json({error:true, mensaje: error})
    }
};

module.exports = {find_user};