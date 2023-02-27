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

    get teamManagement(){
        return cy.get(".vs-l-project__menu").find(".vs-c-site-logo").eq(5)
    }

    get addEvent(){
        return cy.get('.vs-c-timeline__add-activity').find(".vs-c-media")
        .should("contain", "Add Event")
    }


    get addEventHiddenToShow(){
        return cy.get(".el-tabs__content").eq(1)
        .find('.vs-c-timeline__add-activity').should('be.hidden').invoke('show')
       
    }

    get addEventPlus(){
        return cy.get(".vs-c-timeline__add-activity")
        .find(".vs-c-timeline__icon").eq(1)
    }

    get startDate(){
        return cy.get(".available in-range start-date");
    }

    get vacationDaysHeader(){
        return cy.get(".vs-u-gap--bottom").find(".vs-u-color--primary vs-u-gap--bottom-xs vs-u-text--uppercase")
    }

    get addButton(){
        return cy.get("div[class='vs-c-timeline vs-c-section']")
        .find("div[class='vs-c-timeline__activity-edit']").eq(1)
        .find("button").eq(1)
    }

    get vacationDays(){
        return cy.get(".vs-c-free-days-form-group").eq(1).find("input[type='number']")
    }

    get memberModal(){
        return cy.get(".vs-c-modal__body").should("be.visible")
        .and("have.css", "background-color", 'rgb(255, 255, 255)')
    }

    get totalWorkingHoursLabel(){
        return cy.get(".vs-c-form-group__body").eq(2).find(".vs-c-form-group__label")
        .eq(2).should("contain", "Total working hours per week")
    }

    get calender(){
        return cy.get('.vs-c-timeline__activity')
        .find(".vs-c-timeline__activity-edit").eq(1)
        .find("div[class='el-date-editor vs-c-mt-input vs-u-border--none el-input el-date-editor--daterange']")
        .find("i[class='el-input__icon el-icon-date']")
    }

    get showCalender(){
        return cy.get("div[class='el-picker-panel__body']").should('be.hidden').invoke('show')
    }

    get startDate(){
        return cy.get("div[class='el-picker-panel__content el-date-range-picker__content is-left']")
        .should('be.hidden').invoke('show')
        .find("table[class='el-date-table']")
        .should('be.hidden').invoke('show')
        .find("tr[class='el-date-table__row']").eq(4)
        .should('be.hidden').invoke('show')
        .find("td[class='available']").eq(1).should("contain", 28)
    }

    get endDate(){
        return cy.get("div[class='el-picker-panel__content el-date-range-picker__content is-left']")
        .find("table[class='el-date-table']")
        .find("tr[class='el-date-table__row']").eq(4)
        .find("td[class='next-month']").eq(2).should("contain", 3)
    }

    get vacationDaysAdded(){
        return cy.get("div[class='vs-c-timeline vs-c-section']")
        .should('be.hidden').invoke('show')
        .find("div[class='vs-c-timeline__activity']").eq(1)
        .find("div[class='vs-c-media__body']")
        .find("span[class='vs-c-time-off__time-text_span']").invoke('text')
        .then(parseInt).should('be.eq', 4)
    }

    get numberOfVacationDaysOnThisDay(){
        return cy.get("div[class='vs-c-free-days-form-group']").eq(1)
        .find("input[placeholder='Member’s Vacation Days']")
    }

    get totalNumberOfUnusedDays(){
        return cy.get("div[class='c-vacation-days']")
        find("span[class='c-vacation-days__value']")
        .invoke('text').then(parseInt)
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
        this.memberModal
        this.timeOffTab.click();
        this.totalWorkingHoursLabel
        this.addEvent
        this.addEventHiddenToShow
        this.addEventPlus.click()
        this.calender.click();
        this.showCalender
        this.startDate.click()
        this.endDate.click()
        this.addButton.click()
        this.vacationDaysAdded
        this.totalNumberOfUnusedDays
    }
}

export const orgConfig = new OrgConfig()