export default class commonMethods {

    constructor(page) {
        this.page = page;
    }



    static async checkElementVisible(locator) {
      const isVisible = await locator.isVisible();
      return isVisible;
    }

    static async clearTextBox(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
    await locator.press('Control+A'); // Windows
    await locator.press('Backspace');
   }


     static generateRandomEmail(lastName){
      const last  = lastName.toLowerCase().replace(/\s+/g, ''); ;
      const randomDigits = Math.floor(1000 + Math.random() * 9000); 
      return `${last}${randomDigits}@test.com`;
    }

    static generateContactNo() {
      const first9Digits = Math.floor(100000000 + Math.random() * 900000000);
      return `9${first9Digits}`;  
    }

    static async selectDropdownOption(dropdownLocator, optionText) {
      await dropdownLocator.click();
      await this.page.locator('mat-option', { hasText: optionText }).click();
    }

  }

