const express = require('express');
const taskRoutes = require('./routes/taskRoutes'); 
const userRoutes = require('./routes/userRoutes')
const app = express();

app.use(express.json()); 

app.use('/api', taskRoutes); 
app.use('/api', userRoutes); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));