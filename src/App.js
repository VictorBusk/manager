import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
                apiKey: "AIzaSyAqxoaKr_IqW-nIFHYm-vFEdylsh7P0YNQ",
                authDomain: "manager-d507c.firebaseapp.com",
                databaseURL: "https://manager-d507c.firebaseio.com",
                projectId: "manager-d507c",
                storageBucket: "",
                messagingSenderId: "344747977555"
            };

        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;