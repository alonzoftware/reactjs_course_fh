
describe('Prueba DEMO', () => {



    test('Esta Prueba no puede fallar', () => {
        // if (0 === 0) {
        //     throw new Error('Division entre 0');
        // }

        //1) Inicializacion
        const message1 = 'Hola Mundo';
        //2) Estimulo
        const message2 = message1.trim();
        //3) Observar el comportamiento


        expect(message1).toBe(message2);

    });
})