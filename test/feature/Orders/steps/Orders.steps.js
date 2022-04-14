const { loadFeature, defineFeature } = require('jest-cucumber');
const jestCucumberConstants = require('../../../constants/jest-cucumber');
const feature = loadFeature('../Orders.feature', jestCucumberConstants.loadFeature);
const { handler } = require('../../../../src/modules/orders/Controller');

defineFeature(feature, test => {
    test('Resumen de ordenes por cliente', ({
      given,
      when,
      then
    }) => {
        let response = {}
        given('Se desea obtener las ventas de todas las ecommerce por cliente', () => {
            
        });
        when('consulto', async () => {
            response = await handler();
        });
    
        then(/^se obtiene (.*)$/, (responseMock) => {
            const output = require(`../output/${responseMock}`);
            expect(JSON.parse(response.body)).toEqual(output);
        });
    });

    test('Error al obtener resumen de ordenes por cliente', ({
        given,
        when,
        then
      }) => {
        let response = {}
        given('Se desea obtener las ventas de todas las ecommerce por cliente pero ocurre una excepción', () => {
            
        });
        when('consulto', async () => {
            response = await handler({}, {}, () => {}, true);
        });
        then(/^se obtiene (.*)$/, (responseErrorMock) => {
            const output = require(`../output/${responseErrorMock}`);
            expect(JSON.parse(response.body)).toEqual(output); 
        });
      });
  });
