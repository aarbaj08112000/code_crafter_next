import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "u875583157_website",
  password: "YOUR_PASSWORD",
  database: "u875583157_website",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;
