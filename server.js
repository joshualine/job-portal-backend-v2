//Third party packages import
import express from 'express';

//My packages import
import jobRoutes from './routes/jobRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// Routes
app.use('/api', jobRoutes);

app.get('/', (req,res) => res.send(`Server is up and running`));
app.listen(port, () => console.log(`Server started on port ${port}`));