import mysql from "mysql";
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "jobportal_db_node",
});

export default db;