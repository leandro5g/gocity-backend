class SignUpOwnerError {
  public readonly message: string;

  public readonly statusCode: string;

  public readonly alreadyError: "email" | "cpf";

  constructor({ message, alreadyError }: Omit<SignUpOwnerError, "statusCode">) {
    Object.assign(this, { message, alreadyError, statusCode: 400 });
  }
}

export { SignUpOwnerError };
