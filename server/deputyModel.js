const Pool = require("pg").Pool;
const pool = new Pool({
  user: "forseti_admin",
  host: "localhost",
  database: "forseti_db",
  password: "12345",
  // port: 3000,
});

const getDeputy = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT name FROM public.forseti_deputy ORDER BY id ASC LIMIT 10",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

module.exports = {
  getDeputy,
};
