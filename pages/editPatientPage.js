import chainingData from '../tests/utils/chainingData.js';
import commonMethods  from '../tests/utils/commonHelpers.js';

export default class EditPatientPage{

   constructor(page){

    if(!page) throw new Error ('Page undefined..');
    this.page = page;
    //this.commons = new commonMethods(page);

    //------------------------WebElement  Locators----------------------
    this.pageTitle = this.page.getByText('Edit Patient Details');
    this.searchBox  = this.page.getByPlaceholder('Search...');
    this.editIcon = this.page.getByRole('button', { name: /edit/i });
    this.firstName = this.page.locator('input[placeholder="First name *"]');
    this.lastName = this.page.locator('input[placeholder="Last name *"]')
    this.email = this.page.locator('input[placeholder="Email *"]');
    this.contactNo =this.page.getByPlaceholder('Contact Number *');
    this.allergies = this.page.locator('input[placeholder="Allergies *"]');
    this.foodPrefDropdown = this.page.locator('//*[contains(text(),"Food Preference")]');
    this.cuisineDropdown = this.page.locator('//*[contains(text(),"Cuisine Category")]');
    this.dobField = this.page.getByLabel('Date Of Birth *');
    this.submitBtn = this.page.getByRole('button', { name: 'Submit' });
    this.closeBtn =this.page.locator('//button[normalize-space()="Close"]');
    this.fileUploadInput  = page.locator('input[type="file"]');
    this.noFileChosenText = page.getByText('No file chosen');
    this.uploadHealthReportLabel =this.page.locator('//label[contains(text(),"Upload Health Report")]');
    this.topEditIcon = this.page.locator('(//table//tbody//tr[1]//button)[1]');

    //-----Vitals Locator----
    this.spField = this.page.locator('input[placeholder="SP"]');
    this.dpField = this.page.locator('input[placeholder="DP"]');
    this.weightField = this.page.locator('input[placeholder="Weight"]');
    this.heightField = this.page.locator('input[placeholder="Height"]');
    this.temperatureField = this.page.locator('input[placeholder="Temperature"]');
    this.myPatientsMenuLink= this.page.getByRole('link', { name: 'My Patients' });
   }

   async clickSubmit() {
    await this.submitBtn.click();
   }

  async clickClose() {
    await this.closeBtn.click();
   }


   async navigateToUrl(){
        await this.page.goto('/readPatients');
   }


   async clickMyPatientsMenuLink(){
      await this.myPatientsMenuLink.click();
   }

   async clickTopEditIcon(){
      await this.topEditIcon.click();
   }

   async verifyElementVisibility(element) {
    let locator;
   
    switch (element) {
      case 'pageTitle':
        locator  = this.pageTitle; break;

      case 'submitButtonPresence':
        locator  = this.submitBtn; break;
 
      case 'closeButtonPresence':
        locator = this.closeBtn; break;

      case 'fileUploadOption':
        locator = this.fileUploadInput;break;
 
      case 'uploadHealthReportLabel':
        locator = this.uploadHealthReportLabel;break;
 
      case 'noFileChosenText':
        locator = this.noFileChosenText;break;
 
      default:
        throw new Error(`Unknown element: "${element}".`);
    }
 
    return await locator.isVisible();
  }

  async deleteFieldText(field){
    switch(field){
          case "First Name":
          await commonMethods.clearTextBox(this.firstName);break;
          case "Last Name":
          await commonMethods.clearTextBox(this.lastName);break;
          case "Email":
          await commonMethods.clearTextBox(this.email);break;
          case "Contact Number":
          await commonMethods.clearTextBox(this.contactNo);break;
     }

  }

  async verifyPlaceholderDetail(Field) {
  let locator;
  switch (Field) {
    case 'SP':
      locator = this.spField; break;
    case 'DP':
      locator = this.dpField; break;
    case 'Weight':
      locator = this.weightField; break;
    case 'Height':
      locator = this.heightField; break;
    case 'Temperature':
      locator = this.temperatureField; break;
    case 'First Name':
      locator = this.firstName; break;
    case 'Last Name':
      locator = this.lastName; break;
    case 'Email':
      locator = this.email; break;
    case 'Contact Number':
      locator = this.contactNo; break;
    default:
      throw new Error('Unknown Vital field ....');
   }

   const actualPlaceholder = await locator.getAttribute('placeholder');
   return actualPlaceholder;  
 }


  async isMandatoryIndicatorPresent(vitalField) {
      let placeholder;
      switch (vitalField) {
        case 'SP':
          placeholder = await this.spField.getAttribute('placeholder'); break;
        case 'DP':
          placeholder = await this.dpField.getAttribute('placeholder'); break;
        case 'Weight':
          placeholder = await this.weightField.getAttribute('placeholder'); break;
        case 'Height':
          placeholder = await this.heightField.getAttribute('placeholder'); break;
        case 'Temperature':
          placeholder = await this.temperatureField.getAttribute('placeholder'); break;
        default:
          throw new Error("Unknown Vital field entered...");
      }

      return placeholder.includes('*');
 }


  async createPatient(data) {
    const uniqueEmail     = commonMethods.generateRandomEmail(data['Last Name']);  
    const uniqueContactNo = commonMethods.generateContactNo();

    chainingData.setPatientEmail(uniqueEmail);
    chainingData.setPatientContactNo(uniqueContactNo);
    chainingData.setPatientFirstName(data['First Name']);
    chainingData.setPatientLastName(data['Last Name']);   
    console.log(`The email generated is: ${chainingData.getPatientEmail()}`);
    console.log(`The contact Num generated is: ${chainingData.getPatientContactNo()}`);

    await this.firstName.fill(data['First Name']);
    await this.lastName.fill(data['Last Name']);
    await this.email.fill(uniqueEmail);
    await this.contactNo.fill(uniqueContactNo);
    await this.allergies.fill(data['Allergy']);
    await this.selectDropdownOption(this.foodPrefDropdown, data['Food Preference']);
    await this.selectDropdownOption(this.cuisineDropdown,  data['Cuisine Category']);
    await this.dobField.fill(data['Date of Birth']);
    await this.submitBtn.click();
  }


 async searchPatientWithContactNoAndClickEditIcon() {
  const contactNo = chainingData.getPatientContactNo();
  console.log(`Searching for patient with Contact No: ${chainingData.getPatientContactNo()}`);
  await this.searchBox.fill(contactNo);
  await this.clickTopEditIcon();
  await this.page.locator('[role="dialog"]').waitFor({ state: 'visible' });
}


async verifyFieldValue(fieldName) {
   let actualValue;

    switch (fieldName) {
      case 'First Name':
        actualValue  = await this.firstName.inputValue(); break;

      case 'Last Name':
        actualValue  = await this.lastName.inputValue();break;

      case 'Email':
        actualValue  = await this.email.inputValue(); break;

      case 'Contact Number':
        actualValue  = await this.contactNo.inputValue();break;

      case 'Allergy':
        actualValue = await this.allergies.inputValue(); break;

      case 'Food Preference':
        actualValue  = await this.foodPrefDropdown.locator('.mat-select-value-text').innerText(); break;

      case 'Cuisine Category':
       actualValue  = await this.cuisineDropdown.locator('.mat-select-value-text').innerText(); break;

      case 'Date of Birth':
        actualValue  = await this.dobField.inputValue(); break;

      default:
        throw new Error(`Unknown field: "${fieldName}". `);
      }

     return actualValue.trim();

    }

    
  
  
  }