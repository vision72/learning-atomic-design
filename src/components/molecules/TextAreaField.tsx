import { FC } from "react";
import Text from "../atoms/Text";
import TextArea from "../atoms/TextArea";

interface TextAreaFieldProps {
  label?: string;
  value?: string;
  placeHolder?: string;
  onChange?: (event: any) => void;
}

const TextAreaField: FC<TextAreaFieldProps> = (props) => {
  return (
    <div>
      <Text text={props.label} />
      <TextArea
        value={props.value}
        onChange={props.onChange}
        placeHolder={props.placeHolder}
      />
    </div>
  );
};

export default TextAreaField;
