export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}]

    usersArray.find(u => u.id ===1)

export const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
type UsersType = {
    [key: string]: {id: number, name: string}
}
export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}
var user = {id: 100500, name: 'Igor'}
// users[1]
//добавление нового юзера в массив, если такой id уже есть, то он перезатрётся
users[user.id] = user;