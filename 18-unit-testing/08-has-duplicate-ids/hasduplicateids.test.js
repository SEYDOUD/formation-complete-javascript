const hasDuplicateIds = require('./hasduplicateids')

describe('DOM Tree has duplicate Ids' , () => {
    let root;
    beforeEach(() => {
        console.log('BeforEch ran...');
        // Create mock elements
        root = document.createElement('div')
        const child1 = document.createElement('div')
        const child2 = document.createElement('div')

        root.appendChild(child1)
        root.appendChild(child2)
    })

    afterEach(() => {
        console.log('AfterEach ran...');
        root = null
    })
    it('Should be a function', () => {
        expect(typeof hasDuplicateIds).toEqual('function')
    })

    it('Should return a boolean', () => {
        expect(typeof hasDuplicateIds()).toEqual('boolean')
    })

    it('Should return false if no root', () => {
        expect(hasDuplicateIds()).toBeFalsy()
    })

    it('Should return true if there are duplicate IDs', () => {
        // Add duplicate ids
        root.id = 'root'
        root.children[0].id = 'child'
        root.children[1].id = 'child'

        const result = hasDuplicateIds(root)

        expect(result).toEqual(true)
    })

    it('Should return false if there are no duplicate IDs', () => {
        // Add ids
        root.id = 'root'
        root.children[0].id = 'child'
        root.children[1].id = 'child'

        const result = hasDuplicateIds(root)

        expect(result).toEqual(false)
    })
})