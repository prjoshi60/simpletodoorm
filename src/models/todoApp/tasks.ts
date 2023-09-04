
const defineTasks = (sequellize:any, DataTypes: any) => {
    const Task = sequellize.define('Tasks', {
        // Model attributes are defined here
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false, 
        },
        status: {
          type: DataTypes.BOOLEAN,
          default: false
          // allowNull defaults to true
        }
      }, {
       
        tableName: 'tblTasks'
        // Other model options go here
      });
    return Task;
}

export default defineTasks;