import { Input } from "@material-tailwind/react";
const NumberInput = ({ props }) => {
  return (
    <Input
      label={props.label}
      type="number"
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  );
};
export default NumberInput;
