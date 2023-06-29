const { DataTypes, Model } = require('sequelize')

const connection = require('../../database/connection')

class Usuario extends Model {}

Usuario.init({
    id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    groups:{
        type: DataTypes.STRING,//apartir daq era p ser um array de string o type
        allowNull: false,
    },
    cardPermissions:{
        type:DataTypes.STRING,//pelo q vi tem q criar uma tabela auxiliar relacionando usuario com suas permissoes tem q ver
        allowNull: false
    },
    propertiesPermissions:{
        type:DataTypes.STRING,
        allowNull: false
    }
    
},
{
    sequelize: connection,
    modelName: 'users'
})

Usuario.sync()
.then(() => console.log('usuario sincronizado'))
.catch((e) => console.log('Usuario nao sincronizado: ', e))

module.exports = Usuario;
