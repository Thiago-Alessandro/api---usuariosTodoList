const { DataTypes, Model } = require('sequelize')

const connection = require('../../database/connection')

class Group extends Model {}

Group.init({
    id_user:{
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey:true,
        primaryKey: true
    },
    group:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
    }
    
},
{
    sequelize: connection,
    modelName: 'group'
})

Group.sync()
.then(() => console.log('Group sincronizado'))
.catch((e) => console.log('Group nao sincronizado: ', e))

module.exports = Group;
