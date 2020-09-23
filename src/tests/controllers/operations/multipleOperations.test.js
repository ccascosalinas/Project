const multipleOperations = require("../../../controllers/inputValidation/multipleOperations")

describe('Prueba de inputs',() =>{
    test('Cuando ingresamos un valor o cualquier variable debe ser convertido a string', () =>{
        var operation = true
        expect(multipleOperations(operation)).toBe(operation.toString())
    })

    test('Cuando ingresamos un valor numerico debe ser convertido a string', () =>{
        var operation = 0
        expect(multipleOperations(operation)).toBe(operation.toString())
    })

    test('Cuando ingresamos un valor string debe ser convertido a string', () =>{
        var operation = "Hello"
        expect(multipleOperations(operation)).toBe(operation.toString())
    })

    test('Cuando ingresamos un valor undefine  debe ser convertido a string', () =>{
        var operation = undefined
        expect(multipleOperations(operation)).toBe("El parametro no puede ser undefine")
    })

    test('Cuando ingresamos un valor null  debe ser convertido a string', () =>{
        var operation = null
        expect(multipleOperations(operation)).toBe("El parametro no puede ser null")
    })
    test('Cuando ingresamos un arreglo debe ser convertido a string', () =>{
        var operation = []
        expect(multipleOperations(operation)).toBe("")
    })
    test('Cuando ingresamos un objeto  debe ser convertido a string', () =>{
        var operation = {}
        expect(multipleOperations(operation)).toBe("[object Object]")
    })
})