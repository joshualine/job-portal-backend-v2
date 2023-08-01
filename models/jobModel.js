module.exports = (sequelize, DataTypes) => {

  const Job = sequelize.define("job", {
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
      },
      location: {
          type: DataTypes.STRING
      }
  
  })

  return Job

}