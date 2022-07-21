import { initializeApp } from 'firebase/app';

import { createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbfMddUx-Xx2SOy5t0ltcsOIkmhFLrOiQ',
  authDomain: 'dts2022-c23fb.firebaseapp.com',
  projectId: 'dts2022-c23fb',
  storageBucket: 'dts2022-c23fb.appspot.com',
  messagingSenderId: '718693586204',
  appId: '1:718693586204:web:f974b61e469750249216d9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerReq = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);

    console.log('User yang teregistrasi dan berhasil login adalah', response.user);
  } catch (err) {
    console.log(err);
    console.log('error code auth', err.code);
    console.log('error message auth', err.message);
    alert(
      err.message
        .replace(/-/g, ' ')
        .replace(/Firebase:/g, '')
        .replace('auth/', '')
    );
  }
};

const logoutReq = async () => {
  try {
    await signOut(auth);
    console.log('berhasil log out');
  } catch (err) {
    console.log(err);
    console.log('gagal log out');
  }
};

export { auth, registerReq, logoutReq };
