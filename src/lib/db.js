// lib/db.js
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Root@123",
  database: "code_crafter",
});

export default pool;