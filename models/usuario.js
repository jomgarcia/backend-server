var mongose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')


var Schema = mongose.Schema;

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no se un role permitido'
}


var usuarioSchema = new Schema({
  
    nombre: { type: String, required: [true, 'El nombre es necesario']},
    email: { type: String, unique:true, required: [true, 'El correo es necesario']},
    password: { type: String, required: [true, 'La contraseña es necesaria']},
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos}
    
});

usuarioSchema.plugin( uniqueValidator, { message: '{PATH} debe se único'})

module.exports = mongose.model('Usuario', usuarioSchema );