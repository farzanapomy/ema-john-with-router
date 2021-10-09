import { initializeApp } from 'firebase/app'
import firebaseConfig from './Firebase.config'

const initializeAuthenticaion = () => {
    initializeApp(firebaseConfig)
}


export default initializeAuthenticaion;


/**
 *  steps - 1
 * firebase: create project
 * create web app
 * get gonfig
 * init firebase
 * enable auth method
 * 
 * 
 * 
 * Steps -2 :
 * create Log in component 
 * create register component
 * create route for 
 *  login and register
 */