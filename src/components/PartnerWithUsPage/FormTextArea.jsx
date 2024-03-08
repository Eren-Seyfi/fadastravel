"use client";
import { Textarea } from "@material-tailwind/react";
const FormTextArea = ({ props }) => {
  return (
    <Textarea
      label={props.label}
      name={props.name}
      required={props.required}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  );
};
export default FormTextArea;
