"use client";
import { Input } from "@material-tailwind/react";
const TourInput = ({ props }) => {
  return (
    <Input
      label={props.label}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  );
};
export default TourInput;
