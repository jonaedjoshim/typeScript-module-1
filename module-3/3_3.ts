{
    //type guard

    // typeof --> type guard

    type AlphaNeumeric = string | number

    const add = (param1: AlphaNeumeric, param2: AlphaNeumeric): AlphaNeumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        return String(param1) + String(param2);
    }

    const result = add(2, 3)
    const result2 = add('2', '6')
    console.log(result, result2)

    //in guard
    type NormalUser = {
        name: string
    }
    type AdminUser = {
        name: string
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`my name is ${user.name} and my role is ${user.role}`)
        } else {
            console.log(`my name is ${user.name}`)
        }
    }

    const normalUser :NormalUser={
        name: 'mr. normal bai',
    }
    const adminUser :AdminUser={
        name:'mr. admin bai',
        role: 'admin'
    }
    getUser(adminUser)

    //
}