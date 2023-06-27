import { useState } from "react";

import "./sign-in-form.styles.scss"

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  // console.log(formFields);

  // sign in with google  
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  // on input change handler function
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setformFields({
      ...formFields,
      [name]: value,
    });
  };

  // reset form fields function
  const resetFormfields = () => {
    setformFields(defaultFormFields);
  };

  // destructuring "email" and "password" from state object
  const { email, password } = formFields;

  // onsubmit handler function
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);

      // reset form fields after signing in the user
      resetFormfields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign in component</h1>

      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={inputChangeHandler}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={inputChangeHandler}
          required
        />

        <div className="btn-container">
          <Button children="Sign In" type="submit" />
          <Button
            children="Sign In with Google"
            type="button"
            onClick={signInWithGoogle}
            buttonType="google"
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
