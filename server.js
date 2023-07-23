//Third party packages import
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//My packages import
const jobRoutes = require('./routes/jobRoutes.js');
const applicationRoutes = require('./routes/applicationRoutes.js');

const port = process.env.PORT || 5000;
const app = express();
dotenv.config();

let corOptions = {
  origin : 'http://localhost:5000'
}

//Middlewares
app.use(express.json());
app.use(cors(corOptions));
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// Routes
app.use('/api', jobRoutes);
app.use('/api', applicationRoutes);

app.get('/', (req,res) => res.send(`Server is up and running`));
app.listen(port, () => console.log(`Server started on port ${port}`));