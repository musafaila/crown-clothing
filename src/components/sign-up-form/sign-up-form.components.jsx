import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { userContext } from "../../contexts/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPasword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  // console.log(formFields);
  const { setCurrentUser } = useContext(userContext);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setformFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormfields = () => {
    setformFields(defaultFormFields);
  };

  const { displayName, email, password, confirmPasword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // validate if passwords match!
    if (password !== confirmPasword) {
      alert("Passwords Mismatch!");
      return;
    }

    try {
      // create auth user with email and password
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // save the current auth user in the userContext
      setCurrentUser(user);

      // create and save user document in firestore db
      await createUserDocumentFromAuth(user, { Name: displayName });

      // reset the form fields
      resetFormfields();
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert(`The user "${email}" already exist!`);
          break;
        default:
          // alert("Oops an error occurred, please try again later!")
          console.log(error);
      }
    }
  };

  return (
    <div>
      <h1>Sign Up Now</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="displayName"
          id="displayName"
          value={displayName}
          onChange={onInputChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onInputChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onInputChange}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPasword"
          id="confirmPassword"
          value={confirmPasword}
          onChange={onInputChange}
          required
        />

        <Button type="submit" children="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;