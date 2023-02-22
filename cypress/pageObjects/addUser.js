class AddUser{
    
    get enterOrg(){
        return cy.get(".vs-c-my-organization__content");
    }

    get enterBoard(){
        return cy.get(".vs-c-boards-item__active-sprints");
    }

    get teamMembers(){
        return cy.get(".vs-l-project__menu").find("a[href='/boards/14298/team']");
    }

    get addTeamMember(){
        return cy.get(".vs-c-team-member__avatar");
    }

    get emailInputField(){
        return cy.get(".vs-c-modal__body").find("input[type='text']");
    }

    get inviteButton(){
        return cy.get(".vs-u-text--right").find("button").eq(1);
    }

    addMember(userEmail){
        this.enterOrg.click();
        this.enterBoard.click();
        this.teamMembers.click();
        this.addTeamMember.click();
        this.emailInputField.type(userEmail);
        this.inviteButton.click();
    }
}