export default class Calculadora {

    static soma(a, b) {
        return a + b
    }

    static sub(a, b) {
        return a - b
    }

    static mult(a, b) {
        return a * b
    }
    
    static div(a, b) {
        return a / b
    }

    static fat(a) {
        let resultado = 1
        for(let i = 1; i <= a; i++){
            resultado *= i
        }
        return resultado
    }

    static raiz(a) {
        return a ** 0.5
    }

    static exp(a, b) {
        return a ** b
    }

    static areaTriIs(a, b) {
        return (a*b)/2
    }

    static areaTriEq(a) {
        const resultado = ((a**2) * this.raiz(3))/4
        return Math.round(resultado)
    }

    static areaQuad(a) {
        return a ** 2
    }

    static areaRet(a, b) {
        return a * b
    }

    static areaPent(a, b) {
        return (5 * a) * b
    }

    static areaHex(a) {
        const resultado = (3 * (a**2) * this.raiz(3))/2
        return Math.round(resultado)
    }

    static areaHep(a, b) {
        return (a * b * 7)/2
    }

    static areaOct(a, b) {
        return a * b * 4
    }
    
    static Bhask(a, b, c) {
        const delta = (b * b) - (4 * a * c)
        const Bhask1 = (-(b) + this.raiz(delta)) / (2 * a)
        const Bhask2 = (-(b) - this.raiz(delta)) / (2 * a)
        return Bhask1, Bhask2
    }
    static VelMed(a, b){
        return a / b
    }

}