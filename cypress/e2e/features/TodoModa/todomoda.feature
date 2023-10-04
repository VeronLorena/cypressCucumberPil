Feature: Tests de la página TodoModa

    Scenario: Visual testing  de TodoModa
        Given que un usuario esta en la página "TodoModa"
        Then se compara "page-header" con la imagen base

    Scenario: Test visual del background de TodoModa
        Given que un usuario esta en la página "TodoModa"
        Then se verifica que este elemnto ".header-middle-left" posee los atributos
            | css-attribute | valor        | log                   |
            | font-size     | 0px          | tamanio de fuente     |
            | color         | rgb(0, 0, 0) | letras de color negro |

    @focus
    Scenario: Test scroll y click en la subcripcion de TodoModa
        Given que un usuario esta en la página "TodoModa"
        When el usuario realiza scroll hasta "Suscribite al Newsletter"
        Then el botón "Suscribirse" es visible