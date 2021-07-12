import { FC } from "react";

interface InputProps {
  type?: string;
  value?: string;
  defaultChecked?: boolean;
  placeHolder?: string;
  onChange?: (event?: any) => void;
}

const Input: FC<InputProps> = (props) => {
  return (
    <input
      type={props.type}
      defaultChecked={props.defaultChecked}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeHolder}
    />
  );
};

export default Input;
