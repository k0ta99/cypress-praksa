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
        return cy.get(".vs-u-cursor--pointer").eq(0)
    }

    get timeOffTab(){
        return cy.get(".el-tabs__nav-scroll").find(".el-tabs__item").eq(2)
    }

    get numberOfVacationDaysOnThisDay(){
        return cy.get(".vs-c-free-days").find("input[type='number']")
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
}

export const orgConfig = new OrgConfig()