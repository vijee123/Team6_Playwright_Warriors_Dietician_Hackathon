import { test as base } from 'playwright-bdd';
import LoginPage from '../../pages/LoginPage.js'
import DashboardPage from '../../pages/DashboardPage.js';
import AddPatientPage from '../../pages/AddPatientsPage.js';
import EditPatientPage from '../../pages/editPatientPage.js';
import MyPatientsPage from '../../pages/MyPatientsPage.js';
import DeletePatientPopupPage from '../../pages/deletePatientPopupPage.js';

export const test = base.extend({

    // Login fixture 
    loginPageFixture: async ({ page }, use) => {
        console.log("Inside the loginPage Fixture");
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },


    // Dashboard fixture
    dashboardPageFixture: async ({ page }, use) => {
        console.log("Using the Dashboard Fixture");
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.goto();
        await use(dashboardPage);
    },

    // my patients fixture
    myPatientPageFixture: async ({ page }, use) => {
        console.log("Using the My Patient Fixture");
        const myPatientPage = new MyPatientsPage(page);
        await myPatientPage.gotoDashboard();
        await use(myPatientPage);
    },

    // Add AddPatient fixture
    addPatientFixture: async ({ page }, use) => {
        console.log("Inside the addPatientPage Fixture");
        const addPatientPage = new AddPatientPage(page);
        await addPatientPage.navigateToAddPatientPage();
        await use(addPatientPage);
    },


    // editPatient fixture
    editPatientFixture: async ({ page }, use) => {
        console.log("Inside the editPatientPage Fixture");
        const editPatientPage = new EditPatientPage(page);
        await editPatientPage.navigateToUrl();
        await use(editPatientPage);
    },

    // DeletePatient fixture
    deletePatientFixture: async ({ page }, use) => {
        console.log("Inside the editPatientPage Fixture");
        const deletePatientPage = new DeletePatientPopupPage(page);
        await deletePatientPage.navigateToUrl();
        await use(deletePatientPage);
    }


    // //View Patient Report Fixture
    // viewTestReportFixture:async({page},use)=>{
    //     console.log("Inside the viewTestReport Fixture");
    //     const viewTestReportPage = new ViewTestReportPage(page);
    //     await viewTestReportPage.navigateToUrl();
    //     await use(viewTestReportPage);



});


