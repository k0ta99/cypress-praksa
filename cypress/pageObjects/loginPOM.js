class LoginPage{
    get loginButton(){
        return cy.get("button").eq(0);
    }

    get emailInput(){
        return cy.get("input[type=email]");
    }

    get passwordInput(){
        return cy.get("input[type=password]");
    }

    login(email, password){
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();
    }
}

export const loginPage = new LoginPage();