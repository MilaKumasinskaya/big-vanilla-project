function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: AddressType
}
type AddressType = {
    title: string
}
test('big reference type test', () => {
    let user = {
        name: 'Mila',
        age: 39,
        address: {
            title: 'Minsk'
        }
    }
    increaseAge(user);

    expect(user.age).toBe(40);

    const superman = user
    user.age = 1000;
    expect(user.age).toBe(1000);
})
test('array reference test', () => {
    let users = [
        {
            name: 'Mila',
            age: 39
        },
        {
            name: 'Sasha',
            age: 33
        }
    ]
    let admins = users
    admins.push({name: 'Katya', age: 10})

    expect(users[2]).toEqual({name: 'Katya', age: 10});

})
test('value test', () => {
    let usersCount = 100
    let adminsCount = usersCount
    adminsCount++
})
test('big reference type test', () => {
    let user = {
        name: 'Mila',
        age: 39,
        address: {
            title: 'Minsk'
        }
    }
    // let addr = user.address
    let user2: UserType = {
        name: 'Varya',
        age: 11,
        address: user.address
    }
    user2.address.title = 'Minsk City'

    expect(user.address.title).toBe('Minsk City');
})
test('big reference type array test', () => {
    const address = {
        title: 'Minsk'
    }
    let user: UserType = {
        name: 'Mila',
        age: 39,
        address: address
    }
    let user2: UserType = {
        name: 'Varya',
        age: 11,
        address: address
    }
    const users = [user, user2, {name: 'Nika', age: 17, address: address}]
    const admins =[user, user2]
    admins[0].name = 'Lyudmila'

    user2.address.title = 'Minsk City'

    expect(user.address.title).toBe('Minsk City');
    expect(users[0].name).toBe('Lyudmila');
})

test('sort array test', () => {
    let letters = ['c', 'a', 'b']
    passportist(letters)
    expect(letters).toEqual(['c', 'a', 'b']);
})
function passportist (letters: any) {
    const copy = [...letters].sort()
    console.log(copy)
}