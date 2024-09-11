// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user) {
    return user.userRole === 'ADMIN';
}


const user1 = { firstName: 'John', lastName: 'Doe', userRole: 'ADMIN' };
const user2 = { firstName: 'Jane', lastName: 'Smith', userRole: 'USER' };

console.log(isAdmin(user1)); 
console.log(isAdmin(user2)); 

function getEmail(user) {
    const firstInitial = user.firstName.charAt(0).toLowerCase();
    const lastName = user.lastName.toLowerCase();
    return `${firstInitial}${lastName}.prsvr@gmail.com`;
}

const user = { firstName: 'Kevin', lastName: 'Daniels' };
console.log(getEmail(user)); 

function getPlaylistLength(playlist) {
    return playlist.songs.length;
}


const hitsPlaylist = {
    name: 'hits',
    songs: ['Eminem', 'Big Sean','Baby Tron', 'Tobey']
};

console.log(getPlaylistLength(hitsPlaylist)); 

function getHardestHomework(homeworks) {
    if (homeworks.length === 0) {
        return '';
    }

    let hardestHomework = homeworks[0];

    for (let i = 1; i < homeworks.length; i++) {
        if (homeworks[i].averageScore < hardestHomework.averageScore) {
            hardestHomework = homeworks[i];
        }
    }

    return hardestHomework.name;
}

function createPhonebook(names, phoneNumbers) {
    let phonebook = {};

    for (let i = 0; i < names.length; i++) {
        phonebook[names[i]] = phoneNumbers[i];
    }

    return phonebook;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};