import assert from 'assert'
import { expect } from 'chai'
import Calculadora from '../src/Calculadora.js'

describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })
})

describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
    })
    it('Deve subtrair -4 e 5 resultando em -9', () => {
        let resultado = Calculadora.sub(-4, 5)
        expect(resultado).to.be.eq(-9)
    })
})

describe('Testes de multiplicação', () => {
    it('Deve multiplicar 4 e 5 resultando em 20', () => {
        let resultado = Calculadora.mult(4, 5)
        expect(resultado).to.be.eq(20)
    })
    it('Deve multiplicar -4 e 5 resultando em -20', () => {
        let resultado = Calculadora.mult(-4, 5)
        expect(resultado).to.be.eq(-20)
    })
})

describe('Testes de divisão', () => {
    it('Deve dividir 20 por 5 resultando em 4', () => {
        let resultado = Calculadora.div(20, 5)
        expect(resultado).to.be.eq(4)
    })
    it('Deve dividir -20 por 5 resultando em -4', () => {
        let resultado = Calculadora.div(-20, 5)
        expect(resultado).to.be.eq(-4)
    })
})

describe('Testes de fatorial', () => {
    it('Deve calcular o fatorial de 5 resultando em 120', () => {
        let resultado = Calculadora.fat(5)
        expect(resultado).to.be.eq(120)
    })
})

describe('Testes de raiz quadrada', () => {
    it('Deve calcular a raiz quadrada de 81 resultando em 9', () => {
        let resultado = Calculadora.raiz(81)
        expect(resultado).to.be.eq(9)
    })
})

describe('Testes de exponencial', () => {
    it('Deve elevar 5 a 3º resultado em 125', () => {
        let resultado = Calculadora.exp(5, 3)
        expect(resultado).to.be.eq(125)
    })
    it('Deve elevar -5 a 3º resultado em -125', () => {
        let resultado = Calculadora.exp(-5, 3)
        expect(resultado).to.be.eq(-125)
    })
})

describe('Testes de área do triângulo isosceles', () => {
    it('Deve calcular a área de um triângulo isosceles com base 3 e altura 6 resultando em 6', () => {
        let resultado = Calculadora.areaTriIs(3, 4)
        expect(resultado).to.be.eq(6)
    })
})

describe('Testes de área do triângulo equilátero', () => {
    it('Deve calcular a área de um triângulo equilátero com lado 6 resultando em aproximadamente 16', () => {
        let resultado = Calculadora.areaTriEq(6)
        expect(resultado).to.be.eq(16)
    })
})

describe('Testes de área do quadrado', () => {
    it('Deve calcular a área de um quadrado com lado 6 resultando em 36', () => {
        let resultado = Calculadora.areaQuad(6)
        expect(resultado).to.be.eq(36)
    })
})

describe('Testes de área do retângulo', () => {
    it('Deve calcular a área de um retângulo com lado 6 e altura 4 resultando em 24', () => {
        let resultado = Calculadora.areaRet(6, 4)
        expect(resultado).to.be.eq(24)
    })
})

describe('Testes de área do pentágono', () => {
    it('Deve calcular a área de um pentágono com lado 6 e apótema 4 resultando em 120', () => {
        let resultado = Calculadora.areaPent(6, 4)
        expect(resultado).to.be.eq(120)
    })
})

describe('Testes de área do hexágono', () => {
    it('Deve calcular a área de um hexágono com lado 6 resultando em aproximadamente 94', () => {
        let resultado = Calculadora.areaHex(6)
        expect(resultado).to.be.eq(94)
    })
})

describe('Testes de área do heptágono', () => {
    it('Deve calcular a área de um heptágono com lado 6 e apótema 4 resultando em 84', () => {
        let resultado = Calculadora.areaHep(6, 4)
        expect(resultado).to.be.eq(84)
    })
})

describe('Testes de área do octógono', () => {
    it('Deve calcular a área de um octógono com lado 6 e apótema 4 resultando em 96', () => {
        let resultado = Calculadora.areaOct(6, 4)
        expect(resultado).to.be.eq(96)
    })
})

describe('Testes de cálculo de Bháskara', () => {
    it('Deve calcular a fórmula de Bháskara com os valores de a, b e c sendo, respectivamente: 2, -7 e 3 resultado em 0,5 e 3', () => {
        let resultado = Calculadora.Bhask(2, -7, 3)
        expect(resultado).to.be.eq(0.5, 3)
    })
})
describe('Testes de cálculo de velocidade média', () => {
    it('Deve calcular a velocidade média considerando que a distância percorrida foi 300km em um tempo de 5 horas, resultando em 60km/h', () => {
        let resultado = Calculadora.VelMed(300, 5)
        expect(resultado).to.be.eq(60)
    })
    it('Deve calcular a velocidade média considerando que a distância percorrida foi 150km em um tempo de 1,5 horas, resultando em 100km/h', () => {
        let resultado = Calculadora.VelMed(150, 1.5)
        expect(resultado).to.be.eq(100)
    })
})