import { getSaludo } from "../../src/bases/02-template-string"

describe('02-template-string', () => {
    test('getSaludo debe de retornar "Hola Boris"', () => {
        const name = "Boris"
        const message = getSaludo(name);

    })

})