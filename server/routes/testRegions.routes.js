const express = require("express");
const pgQuery = require("postgresql-query");
const connection = require("../config/default.json");


const router = express.Router({ mergeParams: true });
pgQuery.config(connection.connectViaPgQueries); // Соединение с базой через postgresql-query

router.get("/", async (request, response) => {
  console.log(connection.connectViaPgQueries)
  try {
    const regions = await pgQuery.query(
      "SELECT * FROM public.forseti_federalregion ORDER BY id ASC"
    );
    response.status(201).send(regions);
  } catch (error) {
    console.log(
      "Что-то не так с запросом реионов через pgQuery.query:",
      error.message
    );
    return response.status(400).json({
      error: {
        message: "ошибка с регионами",
        code: 400,
      },
    });
  }
});

module.exports = router;
