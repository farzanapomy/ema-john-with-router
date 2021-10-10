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
 * Steps -2 : setup component 
 * create Log in component
 * create register component
 * create route for
 *  login and register
 *
 *
 * step-3  set auth system 
 *   setup log/sign in and signout method
 * suer state
 * spacial observer
 * retun necessary method and states from useFirebase
 *
 * steps-4 create auth contaxt hook 
 *create a auth context
 * context provider
 * set provider context value
 * use auth provider
 *create useauth hook
 *
 * 
 * steps - 5 create private route
 * create private route 
 * set private route
 * 
 * 
 * steps - 6 
 * after log in redicrect user to their desire destination
 */