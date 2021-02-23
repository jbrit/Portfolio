type FormElement = HTMLInputElement | HTMLTextAreaElement | null;

export const getFieldError = (field: FormElement) => {
  if (!field!.value) return "Please Complete All Fields*";
  const EmailRegExp = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  if (field!.type === "email")
    if (!EmailRegExp.test(field!.value))
      return "Please provide a valid email address*";
  return "";
};

export const validateForm = (fields: Array<FormElement>) =>
  fields.map((field) => getFieldError(field)).filter((error) => error !== "");
