// lib/db.js
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "u875583157_website",
  password: process.env.DB_PASS || "CodeCrafter@032022",
  database: process.env.DB_NAME || "u875583157_website",
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 10000,
});

export default pool;
