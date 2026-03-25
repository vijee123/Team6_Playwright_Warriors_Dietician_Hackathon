import{test as base} from 'playwright-bdd';
import LoginPage from '../../pages/loginPage.js'
import DashboardPage from '../../pages/DashboardPage.js';
import EditPatientPage from '../../pages/editPatientPage.js';


export const test = base.extend({

    // Login fixture 
    loginPageFixture:async({page},use)=>{
        console.log("Inside the loginPage Fixture");
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },

    // Dashboard fixture
        dashboardPageFixture:async({page},use)=>{
        console.log("Using the Dashboard Fixture");
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.goto('/dashboardPatients');
        await use(dashboardPage);
    },

  
    // editPatient fixture
    editPatientFixture:async({page},use)=>{
          console.log("Inside the editPatientPage Fixture");
          const editPatientPage = new EditPatientPage(page);
          await editPatientPage.navigateToUrl();
          await use(editPatientPage);       
    }
   



});
