class AddUser{
    
    get teamMembers(){
        return cy.get(".vs-l-project__menu").find(".vs-c-site-logo").eq(-3);
    }

    get addMember(){
        return cy.get(".vs-c-team-member__avatar").last()
    }

    get emailInputField(){
        return cy.get(".vs-c-modal__body").find("input[type='text']");
    }

    get inviteButton(){
        return cy.get(".vs-u-text--right").find("button").eq(1);
    }



    addMember(userEmail){
        this.teamMembers.click();
        cy.get(".vs-c-team-member__avatar").last().click()        
        this.emailInputField.type(userEmail);
        this.inviteButton.click();
        
    }
}

export const addUser = new AddUser() 