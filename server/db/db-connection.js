const { Pool } = require("pg");
//pg is a library that allows you to interact
//with postgres
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL != "false" && {
    rejectUnauthorized: false,
  },
});

module.exports = db;
