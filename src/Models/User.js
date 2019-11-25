const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email: String,
    senha: String,
    nome: String,
    celular: String,
    primeiro_login:{
        type: String,
        dafault: "true",
    },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);