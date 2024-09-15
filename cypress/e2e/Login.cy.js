describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Поверка цевета кнопки восстановить пароль
        
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввести пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка крестик есть, виден пользователю

    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Поверка цевета кнопки восстановить пароль
        
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести логин
        cy.get('#pass').type('iLoveqastudio123'); // Ввести неверный пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста, что логина или пароля нет
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка крестик есть, виден пользователю

    })
    
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Поверка цевета кнопки восстановить пароль
        
        cy.get('#mail').type('erman@dolnikov.ru'); // Ввести неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввести  пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста, что логина или пароля нет
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка крестик есть, виден пользователю

    })

    it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Поверка цевета кнопки восстановить пароль
        
        cy.get('#mail').type('ermandolnikov.ru'); // Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввести  пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка текста: нужно исправить проблему валидации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка крестик есть, виден пользователю

    })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Поверка цевета кнопки восстановить пароль
        
        cy.get('#forgotEmailButton').click(); // Нажать кнопку забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввести почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажать кнопку отправить код

        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка текста: Успешно отправили пароль
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка крестик есть, виден пользователю

    })

    it('Проверка к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Поверка цевета кнопки восстановить пароль
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввести пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти

        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста: Такого логина или пароля нет
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка крестик есть, виден пользователю

    })
   
    

})


