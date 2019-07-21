import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBL3w6DdzSqjz0tYocUCQrZJIsT9yjmbp8',
	authDomain: 'crwn-db-f06de.firebaseapp.com',
	databaseURL: 'https://crwn-db-f06de.firebaseio.com',
	projectId: 'crwn-db-f06de',
	storageBucket: '',
	messagingSenderId: '1033080053289',
	appId: '1:1033080053289:web:6ef3e02ef496c280'
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additonalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
