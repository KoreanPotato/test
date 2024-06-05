const fs = require('fs');
const path = require('path');

const assignmentsFilePath = path.join(__dirname, '../data/assignments.json');

const readAssignmentsFromFile = () => {
  if (!fs.existsSync(assignmentsFilePath)) {
    return {};
  }
  const data = fs.readFileSync(assignmentsFilePath, 'utf-8');
  return JSON.parse(data);
};

const writeAssignmentsToFile = (assignments) => {
  fs.writeFileSync(assignmentsFilePath, JSON.stringify(assignments, null, 2), 'utf-8');
};

exports.getAllAssignments = (req, res) => {
  const assignments = readAssignmentsFromFile();
  res.status(200).json(assignments);
};

exports.createAssignment = (req, res) => {
  const { title, description, dueDate, startTime, endTime } = req.body;

  console.log('Received data:', req.body); // Логирование для проверки данных

  if (!title || !description || !dueDate || !startTime || !endTime) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const assignments = readAssignmentsFromFile();
  const day = new Date(dueDate).getDay(); // 0 - Sunday, 1 - Monday, ..., 6 - Saturday

  const dayMapping = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayMapping[day];

  if (!assignments[dayName]) {
    assignments[dayName] = [];
  }

  const newAssignment = {
    id: Date.now().toString(),
    title,
    description,
    dueDate,
    startTime,
    endTime,
  };

  console.log('New assignment:', newAssignment); // Логирование для проверки данных

  assignments[dayName].push(newAssignment);
  writeAssignmentsToFile(assignments);
  res.status(201).json(newAssignment);
};
