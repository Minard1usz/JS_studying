function generateKey(keyLength, characters) {
    characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let key = ''

    for (let i = 0; i < keyLength; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return key.toUpperCase()
}
console.log(generateKey(20));
