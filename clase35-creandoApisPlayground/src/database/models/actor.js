module.exports = (sequelize, DataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.DECIMAL,
        }
    };
    let config = {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
    const actor = sequelize.define(alias, cols, config);

    actor.associate = function (models) {
        actor.belongsToMany(models.Movie, {
            as: "movies",
            through: "actor_movie"
        })
    }

    return actor;
};