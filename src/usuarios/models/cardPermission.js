const { DataTypes, Model } = require('sequelize')

const connection = require('../../database/connection')

class CardPermission extends Model {}

CardPermission.init({
    id_user:{
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey:true,
        primaryKey: true
    },
    permission:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
    }
    
},
{
    sequelize: connection,
    modelName: 'cardPermission'
})

CardPermission.sync()
.then(() => console.log('CardPermission sincronizado'))
.catch((e) => console.log('CardPermission nao sincronizado: ', e))

module.exports = CardPermission;
