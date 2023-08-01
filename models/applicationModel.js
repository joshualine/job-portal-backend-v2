module.exports = (sequelize, DataTypes) => {

  const Application = sequelize.define("application", {
      full_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      location: {
          type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      email: {
          type: DataTypes.STRING
      }
  
  })

  return Application

}