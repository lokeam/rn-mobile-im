import { getFirebaseApp } from "./firebaseHelper";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { child, getDatabase, ref, set } from 'firebase/database';

export const signUpValidator = async (firstname, lastName, email, password) => {
  const app = getFirebaseApp();
  const auth = getAuth(app);

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const { uid } = result.user;
    console.log('testing auth creds: ',firstname, lastName, email, uid)
    const userData = await createUser(firstname, lastName, email, uid);

    console.log('testing userData: ', userData);

  } catch (error) {
    const errorCode = error.code;

    let errorMessageTemplate = 'Something went wrong.';

    if (errorCode === 'auth/email-already-in-use') {
      errorMessageTemplate = 'Thank you for registering! An email has been sent to this account for confirmation.';
    }

    throw new Error(errorMessageTemplate);
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
