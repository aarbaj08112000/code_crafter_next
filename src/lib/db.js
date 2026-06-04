import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "u875583157_website",
  password: "CodeCrafter@032022",
  database: "u875583157_website",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;
