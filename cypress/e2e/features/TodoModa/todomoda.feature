Feature: Tests de la página TodoModa

    Scenario: Visual testing de TodoModa
        Given que un usuario esta en la página "TodoModa"
        Then se compara "page-header" con la imagen base

    Scenario: Test visual del header de TodoModa
        Given que un usuario esta en la página "TodoModa"
        Then se verifica que este elemnto ".header-middle-left" posee los atributos
            | css-attribute | valor        | log                   |
            | font-size     | 0px          | tamanio de fuente     |
            | color         | rgb(0, 0, 0) | letras de color negro |


    Scenario: Test de ScrollToView hasta subcripcion de TodoModa
        Given que un usuario esta en la página "TodoModa"
        When el usuario realiza scroll hasta "Suscribite al Newsletter"
        Then el botón "Suscribirse" es visible



    Scenario: Test rellenar formulario y interactuar con el Captcha de TodoModa
        Given que un usuario esta en la página "TodoModa"
        When el usuario realiza scroll hasta "Suscribite al Newsletter"
        Then el botón "Suscribirse" es visible
        And el usuario hace click en "Suscribirse"
        Then rellena el siguiente formulario con sus datos

    @focus
    Scenario: Test de menu de sugerencia en la pagina de TodoModa
        Given que un usuario esta en la página "TodoModa"
        When  el usuario realiza un hover hasta seccion "Nuevo!"
        Then visualiza un menu de sugerencia
        And el usuario hace click en la categoria "Halloween"
        Then visualiza el especial de "Halloween"