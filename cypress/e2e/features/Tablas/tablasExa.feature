Feature: Ejemplo de Uso de Tablas

    Scenario: Ejemplo de Uso de Hashes
        Then leo la siguiente tabla aplicando Hashes
            | num | mes     |
            | 1   | enero   |
            | 2   | febrero |


    Scenario: Ejemplo de Uso de rows
        Then leo la siguiente tabla aplicando rows
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |


    Scenario: Ejemplo de Uso de raw
        Then leo la siguiente tabla aplicando raw
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |

    Scenario: Ejemplo de Uso de rowsHash
        Then leo la siguiente tabla aplicando rowsHash
            | num | mes     |
            | 1   | enero   |
            | 2   | febrero |

    Scenario: Ejemplo de Uso de flat
        Then leo la siguiente tabla aplicando flat
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |

    Scenario: Ejemplo de Uso de flat en 1
        Then leo la siguiente tabla con raw en 1 y aplico flat
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |