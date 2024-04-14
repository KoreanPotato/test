const fs = require('fs');
const path = require('path');

const userDataPath = path.join(__dirname, '../usersData.js');

class userService {

  registerUser(id, username, email, password,) {
    const userExists = getUserById(id)

    if (userExists) {
      throw new Error('User with this ID already exists.');
    }

    const encryptedPassword = Buffer.from(password).toString('base64');

    const newUser = { id, username, email, password: encryptedPassword };

    users.push(newUser);

    fs.writeFileSync(userDataPath, `module.exports = ${JSON.stringify(users, null, 2)};`, 'utf8');
  }

  getUserById(id) {
    let users = require(userDataPath);
    const userExists = users.some(user => user.id === id);
    return userExists
  }
}


module.exports = new userService()