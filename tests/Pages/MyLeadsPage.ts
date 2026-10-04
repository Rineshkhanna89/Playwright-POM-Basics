import {Page, Locator} from "@playwright/test";

export class MyLeadsPage {
    page: Page;
    createLeadLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createLeadLink = this.page.getByRole("link", { name: "Create Lead" });
    }
    async clickCreateLeadLink() {
        await this.createLeadLink.click();
    }
}       