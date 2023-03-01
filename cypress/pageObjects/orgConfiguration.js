
class OrgConfig{
    intSum = 0;
    intSum2 = 0;

    get configPanel(){
        return cy.get(".vs-l-project__menu").last()
    }

    get vacationDaysPerYear(){
        return cy.get(".el-form-item__content").eq(1).find("input[type='text']");
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

    get startDateParental(){
        return cy.get("div[class='el-picker-panel__content el-date-range-picker__content is-left']")
        .should('be.hidden').invoke('show')
        .find("table[class='el-date-table']")
        .should('be.hidden').invoke('show')
        .find("tr[class='el-date-table__row']").eq(1)
        .should('be.hidden').invoke('show')
        .find("td[class='available']").eq(6).should("contain", 11)
    }

    get endDateParental(){
        return cy.get("div[class='el-picker-panel__content el-date-range-picker__content is-left']")
        .find("table[class='el-date-table']")
        .find("tr[class='el-date-table__row']").eq(3)
        .find("td[class='available']").eq(5).should("contain", 24)
    }

    get startDateUpdated(){
        return cy.get("div[class='el-picker-panel__content el-date-range-picker__content is-left']")
        .should('be.hidden').invoke('show')
        .find("table[class='el-date-table']")
        .should('be.hidden').invoke('show')
        .find("tr[class='el-date-table__row']").eq(4)
        .should('be.hidden').invoke('show')
        .find("td[class='available']").should("contain", 28)
    }

    get endDateUpdated(){
        return cy.get("div[class='el-picker-panel__content el-date-range-picker__content is-left']")
        .find("table[class='el-date-table']")
        .find("tr[class='el-date-table__row']").eq(5)
        .find("td[class='next-month']").eq(1).should("contain", 6)
    }

    get startDateSick(){
        return cy.get("div[class='el-picker-panel__content el-date-range-picker__content is-left']")
        // .should('be.hidden').invoke('show')
        .find("table[class='el-date-table']")
        .should('be.hidden').invoke('show')
        .find("tr[class='el-date-table__row']").eq(1)
        .should('be.hidden').invoke('show')
        .find("td[class='available']").eq(0).should("contain", 5)
    }

    get endDateSick(){
        return cy.get("div[class='el-picker-panel__content el-date-range-picker__content is-left']")
        .find("table[class='el-date-table']")
        .find("tr[class='el-date-table__row']").eq(1)
        .find("td[class='available']").eq(5).should("contain", 10)
    }

    get startDatePaid(){
        return cy.get("div[class='el-picker-panel__content el-date-range-picker__content is-left']")
        .should('be.hidden').invoke('show')
        .find("table[class='el-date-table']")
        .should('be.hidden').invoke('show')
        .find("tr[class='el-date-table__row']").eq(3)
        .should('be.hidden').invoke('show')
        .find("td[class='available']").eq(6).should("contain", 25)
    }

    get endDatePaid(){
        return cy.get("div[class='el-picker-panel__content el-date-range-picker__content is-left']")
        .find("table[class='el-date-table']")
        .find("tr[class='el-date-table__row']").eq(4)
        .find("td[class='available']").eq(1).should("contain", 27)
    }

    get vacationDaysAdded(){
        return cy.get("div[class='vs-c-timeline vs-c-section']")
        .should('be.hidden').invoke('show')
        .find("div[class='vs-c-timeline__activity']").eq(1)
        .find("div[class='vs-c-media__body']")
        .find("span[class='vs-c-time-off__time-text_span']").invoke('text')
        .then(parseInt).should('be.eq', 4)
    }

    get updatedVacationDaysAdded(){
        return cy.get("div[class='vs-c-timeline vs-c-section']")
        .should('be.hidden').invoke('show')
        .find("div[class='vs-c-timeline__activity']").eq(1)
        .find("div[class='vs-c-media__body']")
        .find("span[class='vs-c-time-off__time-text_span']").invoke('text')
        .then(parseInt).should('be.eq', 5)
    }

    
    parentalLeaveDaysAdded(){
        return cy.get("div[class='vs-c-timeline vs-c-section']")
        .should('be.hidden').invoke('show')
        .find("div[class='vs-c-timeline__activity']").eq(1).should("contain", 'Parental leave')
        .find("div[class='vs-c-media__body']")
        .find("span[class='vs-c-time-off__time-text_span']").invoke("text").then(txt =>{
            this.intSum += parseInt(txt)
        })
    }

    sickLeaveDaysAdded(){
        return cy.get("div[class='vs-c-timeline vs-c-section']")
        .should('be.hidden').invoke('show')
        .find("div[class='vs-c-timeline__activity']").eq(2).should("contain", 'Sick leave')
        .find("div[class='vs-c-media__body']")
        .find("span[class='vs-c-time-off__time-text_span']").invoke("text").then(txt =>{
            this.intSum += parseInt(txt)
            window.localStorage.setItem('parentalSickSum', this.intSum);
            expect(window.localStorage.getItem('parentalSickSum')).to.equal('15');
            console.log("INT SUM", this.intSum)
        })
    }

    paidLeaveDaysAdded(){
        return cy.get("div[class='vs-c-timeline vs-c-section']")
        .should('be.hidden').invoke('show')
        .find("div[class='vs-c-timeline__activity']").eq(1).should("contain", 'Paid time off')
        .find("div[class='vs-c-media']")
        .find("div[class='vs-c-media__body']")
        .find("span[class='vs-c-time-off__time-text_span']").invoke("text").then(txt =>{
            this.intSum2 = this.intSum + parseInt(txt)
            window.localStorage.setItem('parentalSickPaidSum', this.intSum2);
            expect(window.localStorage.getItem('parentalSickPaidSum')).to.equal('16')
            console.log("INT SUM 2", this.intSum2)
        })
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

    get editVacationDays(){
        return cy.get("div[class='vs-c-media']").should('be.hidden').invoke('show').eq(2)
        .find("div[class='vs-c-media__body']")
        .find("div[class='vs-c--action-button']").should('be.hidden').invoke('show')
        .find("button").eq(0)
    }

    get deleteVacationDaysButton(){
        return cy.get("div[class='vs-c-media']").should('be.hidden').invoke('show').eq(2)
        .find("div[class='vs-c-media__body']")
        .find("div[class='vs-c--action-button']").should('be.hidden').invoke('show')
        .find("button").eq(1)
    }

    get deleteConfirmation(){
        return cy.get("div[class='vs-c-modal vs-c-confirmation-modal']")
        .find("div[class='vs-c-modal__footer']")
        .find("button").eq(1)
    }

    get statisticsLine(){
        return cy.get("div[class='vs-c-timeoff-chart']")
        .find("div[class='vs-u-display--flex vs-u-gap--bottom vs-u-gap--top']")
        .find("div[class='vs-c-timeoff-chart--segment el-tooltip']")
    }

    get statisticsLineParental(){
        return cy.get("div[class='vs-c-timeoff-chart']")
        .find("div[class='vs-u-display--flex vs-u-gap--bottom vs-u-gap--top']")
        .find("div[class='vs-c-timeoff-chart--segment el-tooltip']").eq(1)
    }
    get statisticsLineSick(){
        return cy.get("div[class='vs-c-timeoff-chart']")
        .find("div[class='vs-u-display--flex vs-u-gap--bottom vs-u-gap--top']")
        .find("div[class='vs-c-timeoff-chart--segment el-tooltip']").eq(2)
    }

    get statisticsLinePaid(){
        return cy.get("div[class='vs-c-timeoff-chart']")
        .find("div[class='vs-u-display--flex vs-u-gap--bottom vs-u-gap--top']")
        .find("div[class='vs-c-timeoff-chart--segment el-tooltip']").eq(3)
    }

    get statisticsLineTotalDays(){
        return cy.get("div[class='vs-c-timeoff-chart']")
        .find("div[class='vs-u-display--flex vs-u-gap--bottom vs-u-gap--top']")
        .find("small[class='vs-u-gap--left-xs vs-u-color--gray']")
    }

    get vacationDaysUpdateButton(){
        return cy.get("div[class='vs-c-timeline__activity-edit']")
        .find("button").eq(1)
    }

    get variousEventsDropdown(){
        return cy.get("li[class='vs-c-timeline__add-activity']")
        .should("be.hidden").invoke('show')
        .find("a[class='vs-c-btn vs-c-btn--link']")
    }

    get parentalLeave(){
        return cy.get("ul[class='el-dropdown-menu vs-c-dropdown-plus-icon']")
        .find("li[class='el-dropdown-menu__item']").eq(1).should("contain", 'Parental leave');
    }

    get sickLeave(){
        return cy.get("ul[class='el-dropdown-menu vs-c-dropdown-plus-icon']")
        .find("li[class='el-dropdown-menu__item']").eq(2).should("contain", 'Sick leave');
    }

    get paidTimeOff(){
        return cy.get("ul[class='el-dropdown-menu vs-c-dropdown-plus-icon']")
        .find("li[class='el-dropdown-menu__item']").eq(3).should("contain", 'Paid time off');
    }

    get unpaidTimeOff(){
        return cy.get("ul[class='el-dropdown-menu vs-c-dropdown-plus-icon']")
        .find("li[class='el-dropdown-menu__item']").eq(4).should("contain", 'Unpaid time off');
    }

    get other(){
        return cy.get("ul[class='el-dropdown-menu vs-c-dropdown-plus-icon']")
        .find("li[class='el-dropdown-menu__item']").eq(5).should("contain", 'Other');
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

    updateVacationDays(){
        this.boardsPop.click()
        this.enterTeamMember.click()
        this.memberModal
        this.timeOffTab.click()
        this.totalWorkingHoursLabel
        this.editVacationDays.trigger("mouseover").click()
        this.calender.click();
        this.showCalender
        this.startDateUpdated.click()
        this.endDateUpdated.click()
        this.vacationDaysUpdateButton.click()
        this.updatedVacationDaysAdded
    }

    deleteVacationDays(){
        this.boardsPop.click()
        this.enterTeamMember.click()
        this.memberModal
        this.timeOffTab.click()
        this.totalWorkingHoursLabel
        this.deleteVacationDaysButton.trigger("mouseover").click()
        this.deleteConfirmation.click()
    }

    addEvents(){
        this.teamManagement.click()
        this.boardsPop.click()
        this.enterTeamMember.click()
        this.memberModal
        this.timeOffTab.click()
        this.totalWorkingHoursLabel
        this.addEvent
        this.addEventHiddenToShow
        this.addEventPlus.click()
        this.variousEventsDropdown.trigger("mouseover").click()
    }

    parentalLeaveSickLeave(){
        this.parentalLeave.click()
        this.calender.click();
        this.showCalender
        this.startDateParental.click()
        this.endDateParental.click()
        this.addButton.click()
        this.addEvent
        this.addEventHiddenToShow
        this.addEventPlus.click()
        this.variousEventsDropdown.trigger("mouseover").click()
        this.sickLeave.click()
        this.calender.click();
        this.showCalender
        this.startDateSick.click()
        this.endDateSick.click()
        this.addButton.click()
        this.parentalLeaveDaysAdded()
        this.sickLeaveDaysAdded()
        cy.reload()
        this.enterTeamMember.click()
        this.timeOffTab.click().then(() => {
            this.statisticsLineTotalDays.should("contain", window.localStorage.getItem('parentalSickSum'))
        })
    }

    parentalSickPaidLeave(){
        this.paidTimeOff.click()
        this.calender.click();
        this.showCalender
        this.startDatePaid.click()
        this.endDatePaid.click()
        this.addButton.click()
        this.paidLeaveDaysAdded()
        cy.reload()
        this.enterTeamMember.click()
        this.timeOffTab.click().then(() =>{
            this.statisticsLineTotalDays.should("contain", window.localStorage.getItem('parentalSickPaidSum'))
        })
    }


}

export const orgConfig = new OrgConfig()