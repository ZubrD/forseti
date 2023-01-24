import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRule, loadRuleList } from "../store/rule";

const Rule = ({ match }) => {
  const dispatch = useDispatch();
  const rules = useSelector(getRule());
  const ruleNumber = match.params.ruleNumber;
  let finded;
  if (rules) {
    finded = rules.find((item) => ruleNumber === String(item.rule_number));
  } else {
    finded = null;
  }
  useEffect(() => {
    dispatch(loadRuleList());
  }, []);

  return <>{rules && <h1>Закон {finded.title}</h1>}</>;
};

export default Rule;
