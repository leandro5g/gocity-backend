import { AppError } from "@shared/errors/AppError";
import { SignUpOwnerError } from "@shared/errors/SignUpOwnerError";
import { Request, Response, NextFunction } from "express";

export function globalError(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
) {
  console.log(err);

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  if (err instanceof SignUpOwnerError) {
    return response.status(400).json({
      status: "error",
      message: err.message,
      already_Error: err.alreadyError,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
    messageError: err.message,
  });
}
