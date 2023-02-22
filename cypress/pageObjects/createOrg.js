class CreateOrg{
    get createOrgDiv(){
        return cy.get(".vs-c-my-organization--add-new");
    }

    get orgNameInput(){
        return cy.get("input[type=text]");
    }

    get buttonNext(){
        return cy.get(".vs-c-modal--create-organization").find("button").eq(2);
    }

    get buttonCreate(){
        return cy.get(".vs-c-modal--create-organization").find("button").eq(2)
    }

    createOrg(orgName){
        this.createOrgDiv.click()
        this.orgNameInput.type(orgName);
        this.buttonNext.click();
        this.buttonCreate.click();
    }
}

export const createOrg = new CreateOrg()