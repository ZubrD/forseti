const Pool = require("pg").Pool;
const config = require('config')

const pool = new Pool(config.get('connectDb'))

const postTest = (request, response) => {
    console.log('post')
    pool.query(
      "INSERT INTO public.newTable (new1, new2) VALUES ('Tessecond3', 'second row 1')",
      (error, results) => {
        if (error) {
          console.log('Something wrong')
        }
        response.status(201).send(`Data added with IDs`)
      }
    );
    // pool.end()   
};

const getTest = (request, response) => {
    pool.query(
      "SELECT * FROM public.newtable ORDER BY new1 ASC",
      (error, results) => {
        if (error) {
          console.log('Something wrong')
        }
        response.status(200).json(results.rows)
      }
    );
    // pool.end()    
};

module.exports = {
  postTest,
  getTest
};