import { getFirebaseApp } from "./firebaseHelper";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const signUpValidator = async (firstname, lastName, email, password) => {
  const app = getFirebaseApp();
  const auth = getAuth(app);

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log('logging auth result: ', result);
  } catch (error) {
    const errorCode = error.code;

    let errorMessageTemplate = 'Something went wrong.';

    if (errorCode === 'auth/email-already-in-use') {
      errorMessageTemplate = 'Thank you for registering! An email has been sent to this account for confirmation.';
    }

    throw new Error(errorMessageTemplate);
  }
};

