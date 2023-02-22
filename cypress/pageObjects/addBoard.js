class AddBoard{
    get addNewBoard(){
        return cy.get(".vs-c-organization-boards__item--add-new");
    }

    get boardTitleField(){
        return cy.get(".vs-c-modal__body").find("input[type=text]").eq(1);
    }

    get nextButton(){
        return cy.get(".dialog-footer").find("button").eq(1);
    }

    get scrumRadioButton(){
        return cy.get(".el-form-item").eq(0).find(".vs-c-radio-check");
    }

    get nextButton2(){
        return cy.get(".dialog-footer").find("button").eq(1)
    }

    get nextButton3(){
        return cy.get(".dialog-footer").find("button").eq(1);
    }

    get finishButton(){
        return cy.get(".dialog-footer").find("button").eq(1)
    }

    addBoard(boardTitle){
        this.addNewBoard.click();
        this.boardTitleField.type(boardTitle);
        this.nextButton.click();
        this.scrumRadioButton.click();
        this.nextButton2.click();
        this.nextButton3.click();
        this.finishButton.click();
    }
}

export const addB = new AddBoard()