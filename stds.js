module.exports = (sequelize, DataTypes) => { 

    const Stds = sequelize.define("stds", {

        topic:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        question:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        stdname:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    return Stds
}