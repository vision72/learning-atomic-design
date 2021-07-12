import { FC } from "react";

interface ButtonProps {
  name?: string;
  styles?: {};
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button style={props.styles} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;
