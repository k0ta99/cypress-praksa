class OrgConfig{
    
    get configPanel(){
        return cy.get(".vs-l-project__menu").last()
    }

    get vacationDaysPerYear(){
        return cy.get(".el-form-item__content").eq(1).find("input[type='text']");
    }

    get numberOfWorkingMonths(){
        return cy.get(".el-form").find("input[type='text']").eq(1);
    }

    get numberOfAdditionalDaysGranted(){
        return cy.get(".el-form").find("input[type='text']").eq(2);
    }

    get updateButton(){
        return cy.get(".el-form").find("button").eq(1);
    }
    get boardsPop(){
        return cy.get(".vs-c-modal__body").find("button").eq(0);
    }

    get teamMembers(){
        return cy.get(".vs-c-list").find(".vs-c-site-logo").eq(-3);
    }

    get enterTeamMember(){
        return cy.get(".vs-u-cursor--pointer").find(".vs-u-img--round")
    }

    get timeOffTab(){
        return cy.get(".el-tabs__nav-scroll").find(".el-tabs__item").eq(5)
    }

    get numberOfVacationDaysOnThisDay(){
        return cy.get(".vs-c-free-days").find("input[type='number']")
    }

    get teamManagement(){
        return cy.get(".vs-l-project__menu").find(".vs-c-site-logo").eq(5)
    }

    get addEvent(){
        return cy.get('[style=""] > :nth-child(1) > .vs-c-timeline > .vs-c-timeline__add-activity > .vs-c-timeline__activity > .vs-c-media')
    }

    get calender(){
        return cy.get(':nth-child(1) > .el-date-editor > .el-input__icon')
    }

    get startDate(){
        return cy.get(".available in-range start-date");
    }

    get vacationDaysHeader(){
        return cy.get(".vs-u-gap--bottom").find(".vs-u-color--primary vs-u-gap--bottom-xs vs-u-text--uppercase")
    }

    get contactEmail(){
        return cy.get(".vs-c-form-group__body").find("input[type='email']")
    }

    get addButton(){
        return cy.get('.vs-u-display--flex > :nth-child(2) > :nth-child(2)')
    }

    get vacationDays(){
        return cy.get(".vs-c-free-days-form-group").eq(1).find("input[type='number']")
    }

    get memberModal(){
        return cy.get(".vs-c-modal__body")
    }

    changeVacationDaysPerYear(daysNumber){
        this.configPanel.click();
        this.vacationDaysPerYear.clear();
        this.vacationDaysPerYear.type(daysNumber);
        this.updateButton.click();
    }

    checkIfVacationDaysChanged(){
        cy.get(".vs-c-team-member__avatar").first().click() 
        this.timeOffTab.click();
    }

    setVacationDays(){
        this.teamManagement.click()
        this.boardsPop.click()
        this.enterTeamMember.click();
        this.timeOffTab.click();
        this.addEvent.click({force: true});
        this.calender.click();
       

    }
}

export const orgConfig = new OrgConfig()