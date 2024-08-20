import { test, expect } from '@playwright/test';
import { delay, doLogin, generateRandomString } from "../../../../utils/utils";
import { routeslist } from '../../../router.const'
import { getBaseUrl } from '../../../../../config';
import { incident_type_Variables } from '../../../../utils/constant';
const incident_type_name = `incident-type-name-${new Date().getTime()}`;
const new_incident_type_name = `new-incident-type-name-${new Date().getTime()}`;
test.describe("Verify the functionalities of incident Type Dashboard Page for CMMS", async () => {
  test("Create incident Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`);

    await page.getByRole("button", { name: incident_type_Variables.operation.create }).click();
    await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).fill(incident_type_name);
    await page.waitForSelector(incident_type_Variables.CodeLocator);
    await page.type(incident_type_Variables.CodeLocator, (incident_type_Variables.randomCode));
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).fill(incident_type_Variables.randomCodePrefix);
    await page.locator(incident_type_Variables.AssetTypeDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.AssetDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.FormLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.getByRole('button', { name: incident_type_Variables.operation.save }).click();
    await expect(page.getByText(incident_type_Variables.CreateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`); 
  });

  test("Testing Alert while creating Incident Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`);

    await page.getByRole("button", { name: incident_type_Variables.operation.create }).click();
    await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).fill(incident_type_name);
    await page.keyboard.press(incident_type_Variables.Select);
    await page.keyboard.press(incident_type_Variables.Delete);
    await expect(page.getByText(incident_type_Variables.NameAlert)).toBeVisible();
    await page.waitForSelector(incident_type_Variables.CodeLocator);
    await page.type(incident_type_Variables.CodeLocator, (incident_type_Variables.randomImproperCode));
    await expect(page.getByText(incident_type_Variables.CodeAlert)).toBeVisible();
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).fill(incident_type_Variables.randomCodePrefix);
    await page.keyboard.press(incident_type_Variables.Select);
    await page.keyboard.press(incident_type_Variables.Delete);
    await expect(page.getByText(incident_type_Variables.CodePrefixAlert)).toBeVisible();
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).fill(incident_type_Variables.randomImproperCodePrefix);
    await expect(page.getByText(incident_type_Variables.ImproperCodePrefixAlert)).toBeVisible();
    await page.locator(incident_type_Variables.AssetTypeDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.AssetTypeCancelDropdownLocator).click();
    await expect(page.getByText(incident_type_Variables.AssetTypeAlert)).toBeVisible();
    await page.locator(incident_type_Variables.AssetDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.AssetCancelDropdownLocator).click();
    await expect(page.getByText(incident_type_Variables.AssetAlert)).toBeVisible();
    await page.locator(incident_type_Variables.FormLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.FormCancelLocator).click();
    await expect(page.getByText(incident_type_Variables.FormAlert)).toBeVisible();
    await page.getByRole("button", { name: incident_type_Variables.operation.Cancel }).click();
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`);
  });

  test("Edit Incident Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`);
    await delay(3000);
    await page.getByText(incident_type_name).click();
    await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).click();
    await delay(3000);
    await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).fill(new_incident_type_name);
    await page.locator(incident_type_Variables.CodeEditLocator).click();
    await page.keyboard.press(incident_type_Variables.Select);
    await page.keyboard.press(incident_type_Variables.Delete);
    await page.locator(incident_type_Variables.CodeEditLocator).fill(incident_type_Variables.randomCode)
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).click();
    await page.keyboard.press(incident_type_Variables.Select);
    await page.keyboard.press(incident_type_Variables.Delete);
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).fill(incident_type_Variables.randomCodePrefix);
    await page.locator(incident_type_Variables.AssetTypeEditDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Down);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.AssetEditDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Down);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.FormEditDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Down);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.getByRole('button', { name: incident_type_Variables.operation.save }).click();
    await expect(page.getByText(incident_type_Variables.UpdateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`); 
  });

  test("Testing alert while updating Incident Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`);
    await delay(3000);
    await page.getByText(incident_type_name).click();
    await delay(3000);
    await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).click();
    await page.keyboard.press(incident_type_Variables.Select);
    await page.keyboard.press(incident_type_Variables.Delete);
    await expect(page.getByText(incident_type_Variables.NameAlert)).toBeVisible();
    await page.locator(incident_type_Variables.CodeEditLocator).click();
    await page.keyboard.press(incident_type_Variables.Select);
    await page.keyboard.press(incident_type_Variables.Delete);
    await page.locator(incident_type_Variables.CodeEditLocator).fill(incident_type_Variables.randomImproperCode)
    await expect(page.getByText(incident_type_Variables.CodeAlert)).toBeVisible();
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).click();
    await page.keyboard.press(incident_type_Variables.Select);
    await page.keyboard.press(incident_type_Variables.Delete);
    await expect(page.getByText(incident_type_Variables.CodePrefixAlert)).toBeVisible();
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).fill(incident_type_Variables.randomImproperCodePrefix);
    await expect(page.getByText(incident_type_Variables.ImproperCodePrefixAlert)).toBeVisible();
    await page.locator(incident_type_Variables.AssetEditDropdownLocator).click();
    await page.locator(incident_type_Variables.AssetTypeEditCancelDropdownLocator).click();
    await expect(page.getByText(incident_type_Variables.AssetTypeAlert)).toBeVisible();
    await page.locator(incident_type_Variables.AssetEditDropdownLocator).click();
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.AssetEditCancelDropdownLocator).click();
    await expect(page.getByText(incident_type_Variables.AssetAlert)).toBeVisible();
    await page.locator(incident_type_Variables.FormEditDropdownLocator).click();
    await page.locator(incident_type_Variables.FormEditCancelDropdownLocator).click();
    await expect(page.getByText(incident_type_Variables.FormAlert)).toBeVisible();
  });

  test("Validate Incident Type Name Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`);
    await delay(3000);
    await page.getByRole("button", { name: incident_type_Variables.operation.create }).click();
    await delay(3000);
    await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).fill(new_incident_type_name);
    await page.waitForSelector(incident_type_Variables.CodeLocator);
    await page.type(incident_type_Variables.CodeLocator, (incident_type_Variables.randomCode));
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).fill(incident_type_Variables.randomCodePrefix);
    await page.locator(incident_type_Variables.AssetTypeDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.AssetDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.FormLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.getByRole('button', { name: incident_type_Variables.operation.save }).click();
    await expect(page.getByText(incident_type_Variables.NameExistAlertPrefix +`"${new_incident_type_name}"`+ incident_type_Variables.NameExistAlertSuffix)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`); 
  });

  test("Validate Incident Type Code Prefix Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`);
    await delay(3000);
    await page.getByRole("button", { name: incident_type_Variables.operation.create }).click();
    await delay(3000);
    await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).fill(incident_type_name);
    await page.waitForSelector(incident_type_Variables.CodeLocator);
    await page.type(incident_type_Variables.CodeLocator, (incident_type_Variables.randomCode));
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).fill(incident_type_Variables.randomCodePrefix);
    await page.locator(incident_type_Variables.AssetTypeDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.AssetDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.locator(incident_type_Variables.FormLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_type_Variables.Enter);
    await page.getByRole('button', { name: incident_type_Variables.operation.save }).click();
    await expect(page.getByText(incident_type_Variables.CodePrefixExistAlertPrefix +`"${incident_type_Variables.randomCodePrefix}"`+ incident_type_Variables.CodePrefixExistAlertSuffix)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`); 
  });

  test("Delete Incident Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`);
    await page.locator(incident_type_Variables.DeleteLocatorPrefix +`"${new_incident_type_name}"`+ incident_type_Variables.DeleteLocatorSuffix).click();
    await page.getByRole('button', { name: incident_type_Variables.operation.Confirm }).click();
    await expect(page.getByText(incident_type_Variables.DeleteSuccess)).toBeVisible();
  });
});