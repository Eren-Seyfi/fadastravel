"use client";
import { Input } from "@material-tailwind/react";
const FormInput = ({ props }) => {
  return (
    <Input
      variant="standard"
      label={props.label}
      placeholder={props.placeholder}
      name={props.name}
      required={props.required}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  );
};
export default FormInput;
