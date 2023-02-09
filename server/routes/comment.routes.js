const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");
const pgQuery = require("postgresql-query");
const connection = require("../config/default.json");

pgQuery.config(connection.connectViaPgQueries);

// Список комментариев к закону
router.get("/:ruleNumber", auth, async (request, response) => {
  try {
    const { ruleNumber } = request.params;

    const ruleQuery = "SELECT * FROM public.forseti_rules WHERE rule_number=$1";
    const ruleQueryValue = [ruleNumber];
    const ruleById = await pgQuery.query(ruleQuery, ruleQueryValue);
    const ruleId = ruleById[0].id;

    const commentQuery =
      "SELECT * FROM public.forseti_comments WHERE rule_id=$1";
    const commentQueryValue = [ruleId];
    const comments = await pgQuery.query(commentQuery, commentQueryValue);

    response.send({
      "Номер закона": ruleNumber,
      Закон: {
        id: ruleById[0].id,
        rule_number: ruleById[0].rule_number,
        title: ruleById[0].title,
      },
      Комментарии: comments,
    });
  } catch (error) {
    response.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post("/:ruleNumber", auth, async (request, response) => {
  try {
    const { ruleNumber } = request.params;
    const { userName, comment } = request.body;

    const ruleQuery = "SELECT * FROM public.forseti_rules WHERE rule_number=$1";
    const ruleQueryValue = [ruleNumber];
    const ruleById = await pgQuery.query(ruleQuery, ruleQueryValue);
    const ruleId = ruleById[0].id;
    console.log(request.user);

    const commentDate = new Date();
    const addComment =
      "INSERT INTO public.forseti_comments (name, text, rule_id, date1) VALUES ($1, $2, $3, $4)";
    const addCommentValues = [userName, comment, ruleId, commentDate];
    await pgQuery.query(addComment, addCommentValues);
    response.status(201).send({ "Новый комментарий добавлен": comment });
  } catch (error) {
    response.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
      ошибка: error.message,
    });
  }
});

router.post("/:ruleNumber/:commentId", async (request, response) => {
  try {
    const { commentId } = request.params;
    const deleteQuery = "DELETE FROM public.forseti_comments WHERE id=$1";
    const deleteQueryValue = [commentId];
    await pgQuery.query(deleteQuery, deleteQueryValue);
    response.send("Комментарий удалён");
  } catch (error) {
    response.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
      ошибка: error.message,
    });
  }
});

module.exports = router;
