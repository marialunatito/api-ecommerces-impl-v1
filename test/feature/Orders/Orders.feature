Feature: Ordenes por cliente

    Scenario Outline: Resumen de ordenes por cliente
        Given Se desea obtener las ventas de todas las ecommerce por cliente
        When consulto
        Then se obtiene <response>
        Examples:
            | response            |
            | responseOrders.json |

    Scenario Outline: Error al obtener resumen de ordenes por cliente
        Given Se desea obtener las ventas de todas las ecommerce por cliente pero ocurre una excepción
        When consulto
        Then se obtiene <response>
        Examples:
            | response            |
            | responseOrdersError.json |
