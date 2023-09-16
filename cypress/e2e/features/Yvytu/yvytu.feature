Feature: Home Yvytu

    Scenario: Se visualiza Menú Superior
        Given que un usuario esta en la página "Yvytu"
        Then visualiza en el header los botones "LA RESERVA,CABAÑAS,COMO LLEGAR,CONTACTO,DONÁ"

    @focus
    Scenario: Verifica Imágenes del Banner Principal
        Given que un usuario esta en la página "Yvytu"
        Then se visualizan las imágenes "01, 02, 03, 04" en el banner
