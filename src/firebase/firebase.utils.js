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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
