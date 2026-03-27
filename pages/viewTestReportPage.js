const { expect } = require('@playwright/test');


export default class viewTestReportPage {
    constructor(page) {
        this.page = page;
    // Header
    this.title = page.locator('text=View Patient Test Reports');
    this.closeBtn = page.locator('button:has-text("X")');
    // Table
    this.table = page.locator('table');
    this.headers = page.locator('th');
    this.rows = page.locator('tbody tr');
    // Buttons
    this.viewReportBtn = page.locator('text=View Previous Test Reports').first();
    this.viewPdfBtn = page.locator('text=View PDF').first();
    // Pagination
    this.first = page.locator('text=<<');
    this.prev = page.locator('text=<');
    this.next = page.locator('text=>');
    this.last = page.locator('text=>>');
    this.paginationText = page.locator('text=Showing');
  
    }
    async goto() {
        await this.page.goto('/readpatients'); 
    }

    // Actions 

     async openReport() {
        await this.viewReportBtn.click();
  }

     async clickPDF() {
        await this.viewPdfBtn.click();
  }

    async clickArrow(arrow) {
    const map = {
      '<<': this.first,
      '<': this.prev,
      '>': this.next,
      '>>': this.last
    };
    await map[arrow].click();
  }

  // Getters

  async getHeaders() {
    return await this.headers.allTextContents();
  }

  async getRowCount() {
    return await this.rows.count();
  }

  getArrow(arrow) {
    const map = {
      '<<': this.first,
      '<': this.prev,
      '>': this.next,
      '>>': this.last
    };
    return map[arrow];
  }
}
module.exports = { viewTestReportPage };
