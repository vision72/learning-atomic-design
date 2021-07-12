import { FC } from "react";

interface TextProps {
  text?: string;
  styles?: {};
}

const Text: FC<TextProps> = (props) => {
  return (
    <label style={props.styles} htmlFor={props.text}>
      {props.text}
    </label>
  );
};

export default Text;
