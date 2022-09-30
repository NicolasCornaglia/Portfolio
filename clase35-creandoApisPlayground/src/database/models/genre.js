// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        }/* ,
        ranking: {
            type: DataTypes.BIGINT(10).UNSIGNED,
        },
        active: {
            type: DataTypes.BOOLEAN,
        } */
    };
    let config = {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    const genre = sequelize.define(alias, cols, config);

    genre.associate = function (models) {
        genre.hasMany(models.Movie, {
            as: "movies",
            foreignKey: "genre_id"
        });
    }


    return genre;
};