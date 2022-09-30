'use strict';
module.exports = (sequelize, DataTypes) => {
    let alias = 'Movie'; // esto debería estar en singular
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.DECIMAL,
        },
        awards: {
            type: DataTypes.NUMBER,
        },
        release_date: {
            type: DataTypes.DATE,
        },
        length: DataTypes.NUMBER,
    };
    let config = {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    const movie = sequelize.define(alias, cols, config);

    movie.associate = function (models) {
        movie.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: "genre_id"
        });

        movie.belongsToMany(models.Actor, {
            as: "actors",
            through: "actor_movie"/* ,
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false */
        });
    }

    return movie;
};