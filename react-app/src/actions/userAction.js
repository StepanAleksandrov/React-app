import { history } from '../const/history';

export function login(username, password) {
    return dispatch => {
            dispatch(request({ username }));
            if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
                dispatch(success(username, password));
                history.push('/home');
            }
            else {
                dispatch(failure("Invalid username or password"));
            }
        };

    function request(user) { return { type: 'LOGIN_REQUEST', user } }
    function success(user) { return { type: 'LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'LOGIN_FAILURE', error } }
}

export function registration(user) {
    return dispatch => {
        dispatch(request(user));

        if(user){
            dispatch(success());
            history.push('/login');
            dispatch(success('Registration successful'));
        }
        else{
             dispatch(failure());
        }

    };

    function request(user) { return { type: 'REGISTER_REQUEST', user } }
    function success(user) { return { type: 'REGISTER_SUCCESS', user } }
    function failure(error) { return { type: 'REGISTER_FAILURE', error } }
}

export default function logout() {
    return { type: 'LOGOUT' };
}