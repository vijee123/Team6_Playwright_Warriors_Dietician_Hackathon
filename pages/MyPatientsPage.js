const { expect } = require('@playwright/test');

class MyPatientsPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        // Header & Search 
        this.pageHeader = page.locator('h1'); // adjust as needed
        this.searchInput = page.locator('#patientSearch'); // adjust selector
        this.searchIcon = page.locator('#patientSearchIcon'); // adjust selector

        // Table
        this.table = page.locator('#patientsTable'); // table locator
        this.tableHeaders = this.table.locator('thead th');
        this.tableRows = this.table.locator('tbody tr');

        // Sorting icons
        this.sortIcons = (column) => this.table.locator(`thead th:has-text("${column}") .sort-icon`);

        // Actions
        this.actions = ['View Previous Test Reports', 'View Previous Diet Plans', 'Create New Report/plan'];
    }

      // Login / Dashboard utility 
    async loginWithValidCredentials() {
        // Implement login here if needed
        // Or call shared AuthPages login method
    }

    async gotoDashboard() {
        await this.page.goto('/dashboard'); // replace URL
    }

    async clickMyPatientsNav() {
        await this.page.locator('nav >> text=My Patients').click();
    }

    // Table Methods 
    getTableHeader(headerText) {
        return this.table.locator(`th:has-text("${headerText}")`);
    }

    getSortIcon(column) {
        return this.sortIcons(column);
    }

    async getAllTableRows() {
        const rows = [];
        const rowHandles = await this.tableRows.elementHandles();
        for (const rowHandle of rowHandles) {
            const cells = await rowHandle.$$eval('td', tds => tds.map(td => td.innerText.trim()));
            const row = {
                id: cells[0],
                Name: cells[1],
                Details: cells[2],
                LastVisitDate: cells[3],
                Actions: cells[4],
                EditDelete: cells[5],
                cells: cells,
                detailsText: cells[2], // assuming details column
                details: this.parseDetails(cells[2])
            };
            rows.push(row);
        }
        return rows;
    }

    parseDetails(detailsText) {
        const lines = detailsText.split('\n');
        return {
            'phone number': lines[0]?.trim() || '',
            'email': lines[1]?.trim() || '',
            'date of birth': lines[2]?.trim() || ''
        };
    }

    async getActionButton(patientId, actionName) {
        return this.page.locator(`#patientsTable tr:has(td:text("${patientId}")) button:has-text("${actionName}")`);
    }

    async getEditIcon(patientId) {
        return this.page.locator(`#patientsTable tr:has(td:text("${patientId}")) .edit-icon`);
    }

    async getDeleteIcon(patientId) {
        return this.page.locator(`#patientsTable tr:has(td:text("${patientId}")) .delete-icon`);
    }

  
    async isTableEmpty() {
        return (await this.tableRows.count()) === 0;
    }

    // Sorting 
    async sortColumn(column, direction) {
        const icon = this.getSortIcon(column);
        await icon.click();
        // Optionally, ensure the correct sort icon state after click
    }

    async getColumnValues(columnName) {
        const rows = await this.getAllTableRows();
        switch (columnName) {
            case 'Patient Id':
                return rows.map(r => r.id);
            case 'Name':
                return rows.map(r => r.Name);
            default:
                throw new Error(`Unknown column: ${columnName}`);
        }
    }

    //  Search 
    async searchPatient(criteria) {
        await this.searchInput.fill(criteria);
        await this.searchInput.press('Enter');
    }

    async clearSearch() {
        await this.searchInput.fill('');
        await this.searchInput.press('Enter');
    }

    // Pagination 
    async goToPagePosition(position) {
        switch (position.toLowerCase()) {
            case 'first page':
                await this.page.locator('button:has-text("<<")').click();
                break;
            case 'last page':
                await this.page.locator('button:has-text(">>")').click();
                break;
            case 'middle page':
                // Implement logic to go to middle page if needed
                break;
            default:
                break;
        }
    }

    async clickPaginationArrow(action) {
        await this.page.locator(`button:has-text("${action}")`).click();
    }

    async verifyPaginationResult(expectedText) {
        const text = await this.page.locator('#paginationStatus').innerText(); // adjust selector
        return text.includes(expectedText);
    }

    async verifyPaginationText() {
        const text = await this.page.locator('#paginationStatus').innerText();
        return /Showing \d+ to \d+ of \d+ patients/i.test(text);
    }

    async arePaginationControlsVisible() {
        const controls = this.page.locator('.pagination button');
        return (await controls.count()) > 0;
    }

    async getPaginationArrowState(arrowName) {
        const arrow = this.page.locator(`button:has-text("${arrowName}")`);
        const isDisabled = await arrow.getAttribute('disabled');
        return isDisabled ? 'disabled' : 'enabled';
    }
}

module.exports = { MyPatientsPage };