import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {


    apiKey: "AIzaSyBzp66AuUPZTiC4XlACQsXg4u8hPMsQS1E",
    authDomain: "crwn-db-29a15.firebaseapp.com",
    projectId: "crwn-db-29a15",
    storageBucket: "crwn-db-29a15.appspot.com",
    messagingSenderId: "742613401118",
    appId: "1:742613401118:web:06549d2afe5f422d8e780f",
    measurementId: "G-X06MJ82G2P"

};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionaldata) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionaldata
            });

        } catch (error) {
            console.log('error catching user', error.message);
        }
    }

    return userRef;
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;






