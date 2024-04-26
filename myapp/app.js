const express = require('express');
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const assignmentRoutes = require('./routes/AssignmentRoutes')
const scheduleRoutes = require('./routes/scheduleRoute')
const app = express();
const db = 'mongodb+srv://User:pass123@cluster0.qdnnofl.mongodb.net/'

mongoose
.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((res) => console.log('connected to DB') )
.catch((error) => console.log(error));

app.use(express.json()); 


// app.use('/api', taskRoutes); 
app.use('/api', userRoutes); 
app.use('/api', assignmentRoutes); 
app.use('/api', scheduleRoutes); 






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// сервисы >  контроллеры >  роуты >  app.js