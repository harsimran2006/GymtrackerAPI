import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "shabad@21",
    database: "gymtracker_db",
});

export default pool;