import ajax from './ajax'

export const login = (username, password) => ajax( '/api/login', {username, password}, 'POST')