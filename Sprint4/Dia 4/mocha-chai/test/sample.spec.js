import assert from 'assert'
import chai from 'chai'



describe('Meu primeiro teste', () => {
    it('Verificar uma igualdade', () => {
        let aux = 2
        assert.strictEqual(aux, 2)
    })
    it('Verificar uma igualdade', () => {
        let aux = 'carro'
        assert.strictEqual(aux, 'carro')
    })
})

describe('Meu segundo teste', () => {
    it('Verificar uma desigualdade', () => {
        let aux = 2
        assert.notStrictEqual(aux, 3)
    })
    it('Verificar uma desigualdade', () => {
        let aux = 'carro'
        assert.notStrictEqual(aux, 'charrete')
    })
})