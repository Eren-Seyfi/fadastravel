import { Input } from "@material-tailwind/react";
const NumberInput = ({ props }) => {
  return <Input label={props.label} type="number" />;
};
export default NumberInput;
