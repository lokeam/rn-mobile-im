import { getFirebaseApp } from "./firebaseHelper";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { child, getDatabase, ref, set } from 'firebase/database';
import { authenticate } from "../store/authSlice";

export const signUpValidator = (firstname, lastName, email, password) => {
  return async dispatch => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const { uid, stsTokenManager } = result.user;
      const { accessToken } = stsTokenManager;

      const userData = await createUser(firstname, lastName, email, uid);

      dispatch(authenticate({ token: accessToken, userData }));
    } catch (error) {
      const errorCode = error.code;

      let errorMessageTemplate = 'Something went wrong.';

      if (errorCode === 'auth/email-already-in-use') {
        errorMessageTemplate = 'Thank you for registering! An email has been sent to this account for confirmation.';
      }

      throw new Error(errorMessageTemplate);
    }
  }
};

const createUser = async (firstname, lastName, email, userId) => {
  const firstLast = `${firstname} ${lastName}`.toLowerCase();
  const userData = {
    firstname,
    lastName,
    firstLast,
    email,
    userId,
    signUpDate: new Date().toISOString()
  };

  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `users/${userId}`);

  await set(childRef, userData);

  return userData;
}
