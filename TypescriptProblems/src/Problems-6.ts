interface Profile {
    name: string;
    age: number;
    girlFriend ?: string
    email: string;

}

//type Partial<T> = { [P in keyof T]?: T[P] | undefined;  

function updateProfile (profile: Profile, updates: Partial<Profile>){
    return {...profile, ...updates}
}

const myProfile = {
    name: 'alias',
    age: 22,
    email: 'bissah_Koren@vai.amar_kono-GirlFriends.nai'
}

console.log(updateProfile(myProfile, {age: 23}));