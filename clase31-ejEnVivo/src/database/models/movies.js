module.exports = (sequelize, dataTypes) => {
   let alias = 'Movies';
   let cols = {
      id: {
         type: dataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      created_at: {
         type: dataTypes.DATE,
         allowNull: true
      },
      updated_at: {
         type: dataTypes.DATE,
         allowNull: true
      },
      title: {
         type: dataTypes.STRING
      },
      rating: {
         type: dataTypes.FLOAT
      },
      awards: {
         type: dataTypes.INTEGER
      },
      release_date: {
         type: dataTypes.DATE
      },
      length: {
         type: dataTypes.INTEGER,
         allowNull: true
      },
      genre_id: {
         type: dataTypes.INTEGER,
         allowNull: true
      }
   };

   let config = {
      tableName: 'movies',
      timestamps: false
   };
   
   return Movies = sequelize.define(alias,cols,config)
}