const getElementsByTag = require('./getelementsbytag')

describe('Get Elements By Tag' , () => {
    it('Should be a function' , () => {
        expect(typeof getElementsByTag).toEqual('function')
    })

    it('Should return an array' , () => {
        expect(Array.isArray(getElementsByTag())).toEqual(true)
    })

    it('Should return an empty array if no root is passed in' , () => {
        expect(getElementsByTag()).toEqual([])
    })

    it('Should return only the root element if no tagName is passed in' , () => {
        const root = document.createElement('div')
        expect(getElementsByTag(root))
    })

    it('Should return the correct elements' , () => {
        const root = document.createElement('div')

        // Add some child elements to the root
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const span = document.createElement('span')

        root.appendChild(p1)
        root.appendChild(span)
        span.appendChild(p2)

        const result = getElementsByTag(root , 'p')

        expect(result).toEqual([p1 , p2])
    })
})