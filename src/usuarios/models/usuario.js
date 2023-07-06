const { DataTypes, Model } = require('sequelize')

const connection = require('../../database/connection');
const dataTypes = require('sequelize/lib/data-types');

class Usuario extends Model {}

Usuario.init({
    id_user:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:dataTypes.STRING,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
},
{
    sequelize: connection,
    modelName: 'usuarios'
})

Usuario.sync()
.then(() => console.log('usuario sincronizado'))
.catch((e) => console.log('Usuario nao sincronizado: ', e))

module.exports = Usuario;
