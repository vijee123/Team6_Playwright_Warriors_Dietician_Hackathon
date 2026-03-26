import chainingData from "../tests/utils/chainingData";

export default class DeletePatientPopupPage{

    constructor(page){
         if(!page) throw new Error ('Page undefined..');
        this.page = page;
    
        //--------------------Locators-------------------
        this.topDeleteIcon  = this.page.locator('(//table//tbody//tr[1]//button)[2]');
        this.deletePopup = this.page.getByRole('alertdialog');
        this.deletePopupTitle = this.page.getByText('Confirm');
        this.deletePopupText = this.page.getByText('Are you sure you want to delete SQL?');
        this.yesButton = this.page.getByRole('button',{name:'Yes'});
        this.noButton = this.page.getByRole('button',{name:'No'});
        this.myPatientsPageTitle = this.page.getByText('My Patients');
        this.successMessage = this.page.getByText('Success');
        this.searchBox  = this.page.getByPlaceholder('Search...');
    }


    //--------------------Methods----------------------

   async navigateToUrl(){
        await this.page.goto('/readPatients');
   }

   async clickTopDeleteIcon() {
        await this.topDeleteIcon.click();
   }

   async clickDeleteYesButton() {
       await this.yesButton.click();
    } 

    async clickDeleteNoButton() {
       await this.noButton.click();
    } 

    async patientPageVisible(){
       return await this.myPatientsPageTitle.isVisible();
    }

    async isSuccessMessageVisible() {
        return await this.successMessage.isVisible();
    }

 
    async searchByContactNoAndClickDeleteIcon() {
        const contactNo = chainingData.getPatientContactNo(); 
        if (!contactNo) {
        throw new Error('No contact number retrieved from chaining data. Ensure a patient was created/read before this step.');
        }  
        await this.searchBox.fill(contactNo);
        const rowCount = await this.tableRows.count();
        if (rowCount === 0) {
            throw new Error(`No patient found with contact number: ${contactNo}`);
        }

        const deleteIcon = this.page.locator('tr', { hasText: contactNo }).locator('button[title="Delete"]');
        await deleteIcon.click();
              
    }
  
  
   async getDeletePopupDetail(element) {
    let actualValue;
    switch (element) {
        case 'alertTitle':
        actualValue = await this.deletePopupTitle.innerText(); break;

        case 'alertText':
        actualValue = await this.deletePopupText.innerText();break;

        case 'yesButton':
        actualValue = await this.yesButton.innerText(); break;

        case 'noButton':
        actualValue = await this.noButton.innerText();break;

        default:
        throw new Error('Unknown popup element...');
        }

        return actualValue;
    }



}