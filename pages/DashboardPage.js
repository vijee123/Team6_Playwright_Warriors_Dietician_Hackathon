
export default class DashboardPage {
    constructor(page) {
        this.page = page;
        this.dashboardHeader = page.locator('h1'); 
        this.homeIcon = page.locator('#homeIcon'); 
        this.navLinks = {
            'My Patients': page.locator('nav >> text=My Patients'),
            'New Patient': page.locator('nav >> text=New Patient'),
            'Login': page.locator('nav >> text=Login'),
            'Logout': page.locator('nav >> text=Logout')
        };
    }

    async goto() {
        await this.page.goto('/dashboard'); 
    }

    async clickNavLink(linkName) {
        const link = this.navLinks[linkName];
        if (!link) throw new Error(`Navigation link "${linkName}" not found`);
        await link.click();
    }

    async getNavLink(linkName) {
        const link = this.navLinks[linkName];
        if (!link) throw new Error(`Navigation link "${linkName}" not found`);
        return link;
    }

    async clickHomeIcon() {
        await this.homeIcon.click();
    }
}