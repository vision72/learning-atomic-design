import { FC } from "react";
import Text from "../atoms/Text";
import Input from "../atoms/Input";

interface InputFieldProps {
  type?: string;
  label?: string;
  value?: string;
  placeHolder?: string;
  onChange?: (event: any) => void;
}

const InputField: FC<InputFieldProps> = (props) => {
  return (
    <div>
      <Text text={props.label} />
      <Input
        type={props.type ? props.type : "text"}
        value={props.value}
        onChange={props.onChange}
        placeHolder={props.placeHolder}
      />
    </div>
  );
};

export default InputField;
