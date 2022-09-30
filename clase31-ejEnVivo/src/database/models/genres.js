module.exports = (sequelize, dataTypes) => {
   let alias = 'Genres';
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
      name: {
         type: dataTypes.STRING
      },
      ranking: {
         type: dataTypes.INTEGER
      },
      active: {
         type: dataTypes.INTEGER
      } 
   };

   let config = {
      tableName: 'genres',
      timestamps: false
   };
   
   return Genres = sequelize.define(alias,cols,config)
}