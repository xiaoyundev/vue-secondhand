const KEY = 'secondhand-user'

export function getUser(){
    return localStorage.getItem(KEY) || ''
}
export function saveUser(name){
    localStorage.setItem(KEY,name)
}
export function clearUser(){
    localStorage.removeItem(KEY)
}