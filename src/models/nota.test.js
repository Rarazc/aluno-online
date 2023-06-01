const Nota = require('./nota')

describe('Calculo da média CA', ()=>{
    test('Média SS',()=>{
        let nota = new Nota(null, 10, 10, null);
        expect(nota.mediaCA()).toBe("SS");
    })
    test('Média MS',()=>{
        let nota = new Nota(null, 8, 8, null);
        expect(nota.mediaCA()).toBe("MS");
    })
    test('Média MM',()=>{
        let nota = new Nota(null, 8, 5, null);
        expect(nota.mediaCA()).toBe("MM");
    })
    test('Média MI',()=>{
        let nota = new Nota(null, 3, 5, null);
        expect(nota.mediaCA()).toBe("MI");
    })
    test('Média II',()=>{
        let nota = new Nota(null, 2, 3, null);
        expect(nota.mediaCA()).toBe("II");
    })
    test('Média SR',()=>{
        let nota = new Nota(null, 0, 0, null);
        expect(nota.mediaCA()).toBe("SR");
    })
})