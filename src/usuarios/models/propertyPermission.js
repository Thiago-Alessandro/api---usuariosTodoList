const { DataTypes, Model } = require('sequelize')

const connection = require('../../database/connection')

class PropertyPermission extends Model {}

PropertyPermission.init({
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
    modelName: 'propertyPermission'
})

PropertyPermission.sync()
.then(() => console.log('PropertyPermission sincronizado'))
.catch((e) => console.log('PropertyPermission nao sincronizado: ', e))

module.exports = PropertyPermission;
