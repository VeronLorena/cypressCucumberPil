@regrasion @yvytu
Feature: Home Yvytu

    @menu
    Scenario: Se visualiza Menú Superior
        Given que un usuario esta en la página "Yvytu"
        Then visualiza en el header los botones "LA RESERVA,CABAÑAS,COMO LLEGAR,CONTACTO,DONÁ"

    Scenario: Verifica Imágenes del Banner Principal
        Given que un usuario esta en la página "Yvytu"
        Then se visualizan las imágenes "01, 02, 03, 04" en el banner


    Scenario: Verificar comportamiento del botón Ir Arriba
        Given que un usuario esta en la página "Yvytu"
        Then el botón "Ir arriba" no se visualiza
        When el usuario hace scroll hasta "Conocé una historia mágica."
        Then el botón "Ir arriba" se visualiza
        When el usuario presiona el botón "Ir arriba"
        Then visualiza en el header los botones "LA RESERVA,CABAÑAS,COMO LLEGAR,CONTACTO,DONÁ"
        And el botón "Ir arriba" no se visualiza


    Scenario: Verifica comportamiento del boton /reserva_yvytu
        Given que un usuario esta en la página "Yvytu"
        Then visualiza el link "Reservar" redireciona a "https://wa.me/5493757454400"
        And visualiza el link "/reserva_yvytu" redireciona a "https://www.instagram.com/reserva_yvytu/"
        Then visualiza el link "Enviar mensaje" redireciona a "https://wa.me/5493757454400"



    Scenario: Verificar Cabañas
        Given que un usuario esta en la página "Yvytu"
        When  el usuario hace scroll hasta "Nuestras cabañas"
        Then se verifica que la cabaña "1" llamada "Yaguareté" posee las siguientes caracteristicas "Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi, Aire acondicionado"
        And se verifica que la cabaña "2" llamada "Arasari" posee las siguientes caracteristicas "Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi"

    @ignore
    Scenario Outline: Verificar Cabañas <num>: <nombreCab>
        Given que un usuario esta en la página "Yvytu"
        When  el usuario hace scroll hasta "Nuestras cabañas"
        Then se verifica que la cabaña "<num>" llamada "<nombreCab>" posee las siguientes caracteristicas "<item>"
        Examples:
            | num | nombreCab | item                                                                                     |
            | 1   | Yaguareté | Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi, Aire acondicionado |
            | 2   | Arasari   | Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi                     |
