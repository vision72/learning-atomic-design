import { useState } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import InputField from "../molecules/InputField";
import TextAreaField from "../molecules/TextAreaField";

const ContactsForm = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    console.log("Contacts form submitted");
  };

  return (
    <form autoComplete="off">
      <Text text="Welcome to our not well designed ContactsForm" />

      <InputField
        label="Insert your Name"
        placeHolder="Name"
        value={name}
        onChange={(event: any) => setName(event.target.value)}
      />

      <InputField
        label="Insert your Surname"
        placeHolder="Surname"
        value={surname}
        onChange={(event: any) => setSurname(event.target.value)}
      />

      <InputField
        label="Insert your e-mail"
        placeHolder="Email"
        value={email}
        type="email"
        onChange={(event: any) => setEmail(event.target.value)}
      />

      <TextAreaField
        label="Leave a message"
        placeHolder="This post is amazing!"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <Button name="Submit your request" onClick={handleSubmit} />
    </form>
  );
};

export default ContactsForm;
