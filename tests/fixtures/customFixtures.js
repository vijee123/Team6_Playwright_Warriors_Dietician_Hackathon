import{test as base} from 'playwright-bdd';
import LoginPage from '../../pages/loginPage.js';


export const test = base.extend({

    // Add Login fixture 
    loginPageFixture:async({page},use)=>{
        console.log("Inside the loginPage Fixture");
        const loginPage = new LoginPage(page);
        await loginPage.navigateToUrl();
        await use(loginPage);
    },

    // Add Dashboard fixture
    // dashboardPageFixture:async({page},use)=>{
    //     console.log("Using the Dashboard Fixture");
    //     const dashboardPage = new DashboardPage(page);
    //     await use(dashboardPage);
    // },


});
