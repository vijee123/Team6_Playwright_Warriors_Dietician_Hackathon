export default class commonMethods {

    constructor(page) {
        this.page = page;
    }



    async checkElementVisible(locator) {
      const isVisible = await locator.isVisible();
      return isVisible;
    }


     generateRandomEmail(lastName){
      const last  = lastName.toLowerCase().replace(/\s+/g, ''); ;
      const randomDigits = Math.floor(1000 + Math.random() * 9000); 
      return `${last}${randomDigits}@test.com`;
    }

    generateContactNo() {
      const first9Digits = Math.floor(100000000 + Math.random() * 900000000);
      return `9${first9Digits}`;  
    }

    async selectDropdownOption(dropdownLocator, optionText) {
      await dropdownLocator.click();
      await this.page.locator('mat-option', { hasText: optionText }).click();
    }

  }

