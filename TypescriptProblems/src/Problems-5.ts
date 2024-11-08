

function getProperty < T, K extends keyof T> (object: T, key : K):T[K]{
    return object[key];
}

type person = {name: string; age: number}

const person = {
    name: 'alias', age:20
}

console.log(getProperty(person, 'name'));