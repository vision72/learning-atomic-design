import { useState } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import CheckBoxField from "../molecules/CheckBoxField";
import InputField from "../molecules/InputField";

const SignUpForm = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log("Contacts form submitted");
  };

  return (
    <form autoComplete="off">
      <Text text="Welcome to our not well designed SignUpForm" />

      <InputField
        label="Name"
        placeHolder="Insert your Name"
        value={name}
        onChange={(event: any) => setName(event.target.value)}
      />

      <InputField
        label="Surname"
        placeHolder="Insert your Surname"
        value={surname}
        onChange={(event: any) => setSurname(event.target.value)}
      />

      <InputField
        label="Username"
        placeHolder="Insert your Username"
        value={username}
        onChange={(event: any) => setUsername(event.target.value)}
      />

      <InputField
        label="Email"
        placeHolder="Insert your e-mail"
        value={email}
        type="email"
        onChange={(event: any) => setEmail(event.target.value)}
      />

      <InputField
        label="Password"
        placeHolder="Insert your password"
        value={password}
        type="password"
        onChange={(event: any) => setPassword(event.target.value)}
      />

      <InputField
        label="Confirm Password"
        placeHolder="Input the same password"
        value={confirmPassword}
        type="password"
        onChange={(event: any) => setConfirmPassword(event.target.value)}
      />

      <CheckBoxField
        label="Privacy Policy"
        defaultChecked={false}
        onChange={() => setChecked(!checked)}
      />

      <Button name="Submit your request" onClick={handleSubmit} />
    </form>
  );
};

export default SignUpForm;
