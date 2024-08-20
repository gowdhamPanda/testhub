import { test, expect } from '@playwright/test';
import { delay, doLogin } from "../../../../utils/utils";
import { routeslist } from '../../../router.const'
import { getBaseUrl } from '../../../../../config';
import { incident_tag_Variables } from '../../../../utils/constant';
const incident_tag_name = `inc_tag_name-${new Date().getTime()}`;


test.describe("Verify the functionalities of Incident Tag Dashboard Page for CMMS", async () => {
  test("Create Incident Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TAG}`);
    await page.getByRole("button", { name: incident_tag_Variables.operation.create }).click();
    await page.getByPlaceholder(incident_tag_Variables.Placeholder).click();
    await page.getByPlaceholder(incident_tag_Variables.Placeholder).fill(incident_tag_name);
    await page.getByRole("button", { name: incident_tag_Variables.operation.save }).click();
    await expect(page.getByText(incident_tag_Variables.CreateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TAG}`);
  });

  test("Testing Alert while Creating Incident Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TAG}`);
    await page.getByRole("button", { name: incident_tag_Variables.operation.create }).click();
    await page.getByPlaceholder(incident_tag_Variables.Placeholder).click();
    await page.getByPlaceholder(incident_tag_Variables.Placeholder).fill(incident_tag_name);
    await page.keyboard.press(incident_tag_Variables.Select);
    await page.keyboard.press(incident_tag_Variables.Delete);
    await expect(page.getByText(incident_tag_Variables.Alert)).toBeVisible();
    await delay(3000);
    await page.getByPlaceholder(incident_tag_Variables.Placeholder).click();
    await page.getByPlaceholder(incident_tag_Variables.Placeholder).fill(incident_tag_Variables.AssetTagNameValidation);
    await expect(page.getByText(incident_tag_Variables.AssetTagNameAlert)).toBeVisible();
    await page.locator(incident_tag_Variables.HoverLocator).click();
    await expect(page.getByText(incident_tag_Variables.HoverAlert)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TAG}`);
  });

  test("Validate Incident Tag Name Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TAG}`);
    await page.getByRole("button", { name: incident_tag_Variables.operation.create }).click();
    await page.getByPlaceholder(incident_tag_Variables.Placeholder).click();
    await page.getByPlaceholder(incident_tag_Variables.Placeholder).fill(incident_tag_name);
    await page.getByRole("button", { name: incident_tag_Variables.operation.save }).click();
    await expect(page.getByText(incident_tag_Variables.AssetTagExistAlertPrefix+ `"${incident_tag_name}"`+ incident_tag_Variables.AssetTagExistAlertSuffix)).toBeVisible();
    await delay(3000);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TAG}`);
  });

  test("Delete Incident Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TAG}`);
    await page.locator(incident_tag_Variables.DeleteLocatorPrefix +`"${incident_tag_name}"`+ incident_tag_Variables.DeleteLocatorSuffix).click();
    await page.getByRole('button', { name: incident_tag_Variables.operation.Confirm }).click();
    await expect(page.getByText(incident_tag_Variables.DeleteSuccess)).toBeVisible();
  });
});