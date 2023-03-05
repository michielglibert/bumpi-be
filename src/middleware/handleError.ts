import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { Handler } from "express";
import { validationResult } from "express-validator/src/validation-result";

export const handleError: Handler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({ errors: errors.array() });
  }
  next();
};
