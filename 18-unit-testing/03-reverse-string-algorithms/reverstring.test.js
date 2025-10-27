const reverseString = require('./reverstring')

describe('Reverse String' , () => {
    it('Should be a function' , () => {
        expect(typeof reverseString).toEqual('function')
    })

    it('Should return a string' , () => {
        expect(typeof reverseString('Hello')).toEqual('string')
    })

    it('Should return the reversed string' , () => {
        expect(reverseString('hello')).toEqual('olleh')
        expect(reverseString('bye')).toEqual('eyb')
        expect(reverseString('wow')).toEqual('wow')
        expect(reverseString('hello world')).toEqual('dlrow olleh')
    })
})