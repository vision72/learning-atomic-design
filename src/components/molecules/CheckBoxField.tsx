import { FC } from "react";
import Text from "../atoms/Text";
import Input from "../atoms/Input";

interface CheckBoxFieldProps {
  label?: string;
  defaultChecked?: boolean;
  onChange?: () => void;
}

const CheckBoxField: FC<CheckBoxFieldProps> = (props) => {
  return (
    <div>
      <Text text={props.label} />
      <Input
        type="checkbox"
        defaultChecked={props.defaultChecked}
        onChange={props.onChange}
      />
    </div>
  );
};

export default CheckBoxField;
