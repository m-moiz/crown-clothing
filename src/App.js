import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import LoginAndRegisterPage from './pages/login-and-register/login-and-register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: snapShot.id,
						...snapShot.data()
					});
				});
			}
			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={LoginAndRegisterPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
