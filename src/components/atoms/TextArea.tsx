import { FC } from "react";

interface TextAreaProps {
  value?: string;
  placeHolder?: string;
  onChange?: (event: any) => void;
}

const TextArea: FC<TextAreaProps> = (props) => {
  return (
    <textarea
      placeholder={props.placeHolder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextArea;
