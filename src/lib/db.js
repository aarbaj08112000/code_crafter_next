// lib/db.js
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "mysql.hostinger.com",
  user: "u875583157_website",
  password: "CodeCrafter@032022",
  database: "u875583157_website",
});

export default pool;
