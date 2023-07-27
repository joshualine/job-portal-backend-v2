module.exports = (sequelize, DataTypes) => {

  const Application = sequelize.define("application", {
      first_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      last_name: {
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