const { strict } = require('assert');
const userService = require('./userService');

const fs = require('fs');
const path = require('path');

const taskDataPath = path.join(__dirname, '../tasksData.js');



class taskService {

  createTaskForUser(userId, taskData) {
    let tasks = require(taskDataPath)

    const user = userService.getUserById(userId);
    console.log(user)
    if (!user) {
      throw new Error('User does not exist');
    }

    const newTask = {
      id: tasks.length + 1,
      ...taskData,
      userId: userId,
    };

    tasks.push(newTask);
    fs.writeFileSync(taskDataPath, `module.exports = ${JSON.stringify(tasks, null, 2)};`, 'utf8');
    return newTask;
  };

}


module.exports = new taskService()
  
