//Third party packages import
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

//My packages import
const jobRoutes = require('./routes/jobRoutes.js');
const applicationRoutes = require('./routes/applicationRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

const port = process.env.PORT || 5000;
const app = express();
dotenv.config();

let corOptions = {
  origin : '*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

//Middlewares
app.use(express.json());
app.use(cors(corOptions));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/users', userRoutes);



app.get('/', (req,res) => res.send(`Server is up and running`));
app.listen(port, () => console.log(`Server started on port ${port}`));