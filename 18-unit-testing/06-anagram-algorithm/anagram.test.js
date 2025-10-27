const anagram = require('./anagram')

describe('Anagram' , () => {
    it('Should be a function', () => {
        expect(typeof anagram).toEqual('function')
    })

    it('Should return a boolean', () => {
        expect(typeof anagram('ram' , 'arm')).toEqual('boolean')
    })

    it('Should return true if anagram', () => {
        expect(anagram('ram' , 'arm')).toBeTruthy()
        expect(anagram('cinema' , 'iceman')).toBeTruthy()
    })

    it('Should return false if not anagram', () => {
        expect(anagram('hello' , 'fellow')).toBeFalsy()
        expect(anagram('world' , 'twirl')).toBeFalsy()
        expect(anagram('cost' , 'lost')).toBeFalsy()
    })
})