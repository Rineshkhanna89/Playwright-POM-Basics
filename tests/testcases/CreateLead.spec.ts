import { test } from "./fixtures";

import { CreateLeadPage } from "../Pages/CreateLeadPage";

test("Test to verify Create Lead", async ({
  myLeadsPage,
  page
}) => {
  const createLeadPage = new CreateLeadPage(page);

  await myLeadsPage.clickCreateLeadLink();

  await createLeadPage.createLead(
    "Testleaf",
    "Rinesh",
    "Sulendran"
  );
});