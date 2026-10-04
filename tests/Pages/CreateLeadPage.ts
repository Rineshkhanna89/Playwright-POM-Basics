import { Page, Locator } from "@playwright/test";

export class CreateLeadPage{
    page: Page;
    companyNameField: Locator;
    firstNameField: Locator;
    lastNameField: Locator;
    clickCreateLeadButton: Locator;

  constructor (page: Page){
    this.page = page;
    this.companyNameField = this.page.locator('#createLeadForm_companyName');
    this.firstNameField = this.page.locator('#createLeadForm_firstName');
    this.lastNameField = this.page.locator('#createLeadForm_lastName');
    this.clickCreateLeadButton = this.page.getByRole('button', { name: 'Create Lead' });

  }

  async createLead(companyName: string, firstName: string, lastName: string){
    await this.companyNameField.fill(companyName);
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.clickCreateLeadButton.click();
  }
}