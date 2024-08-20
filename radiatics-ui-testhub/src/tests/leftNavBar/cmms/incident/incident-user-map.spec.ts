import { test, expect } from '@playwright/test';
import { delay, doLogin } from "../../../../utils/utils";
import { routeslist } from '../../../router.const'
import { getBaseUrl } from '../../../../../config';
import { incident_type_Variables, incident_user_map_Variables } from '../../../../utils/constant';
const inc_type_name = `inc-type-name-${new Date().getTime()}`;

test.describe("Verify the functionalities of Incident User Map Dashboard Page for CMMS", async () => {

    test("Create incident Type", async ({ page }) => {
        await doLogin(page);
        await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`);
    
        await page.getByRole("button", { name: incident_type_Variables.operation.create }).click();
        await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).click();
        await page.getByPlaceholder(incident_type_Variables.NamePlaceholder).fill(inc_type_name);
        await page.waitForSelector(incident_type_Variables.CodeLocator);
        await page.type(incident_type_Variables.CodeLocator, (incident_user_map_Variables.randomCode));
        await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).click();
        await page.getByPlaceholder(incident_type_Variables.CodePrefixPlaceholder).fill(incident_user_map_Variables.randomCodePrefix);
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
        await delay(3000);
        await expect(page.getByText(incident_type_Variables.CreateSuccess)).toBeVisible();
        await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`); 
      });
  test("Create Incident User Map", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_USER_MAP}`);

    await page.getByRole("button", { name: incident_user_map_Variables.operation.create }).click();
    await page.locator(incident_user_map_Variables.PlantLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.IncidentTypeLocator).click();
    await page.locator(incident_user_map_Variables.IncidentTypeLocator).type(inc_type_name);
    await delay(3000);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.IncidenCreatorsLocator).click();
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.keyboard.press(incident_user_map_Variables.Down);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.keyboard.press(incident_user_map_Variables.Down);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.IncidentWatchersLocator).click();
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.keyboard.press(incident_user_map_Variables.Down);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.keyboard.press(incident_user_map_Variables.Down);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.getByRole('button', { name: incident_user_map_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(incident_user_map_Variables.CreateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_USER_MAP}`); 
  });

  test("Testing Alert while creating Incident User Map", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_USER_MAP}`);

    await page.getByRole("button", { name: incident_user_map_Variables.operation.create }).click();
    await page.locator(incident_user_map_Variables.PlantLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.PlantLocator).click();
    await page.locator(incident_user_map_Variables.PlantCancelLocator).click();
    await expect(page.getByText(incident_user_map_Variables.PlantAlert)).toBeVisible();
    await page.locator(incident_user_map_Variables.IncidentTypeLocator).click();
    await page.locator(incident_user_map_Variables.IncidentTypeLocator).type(inc_type_name);
    await delay(3000);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.IncidentTypeLocator).click();
    await page.locator(incident_user_map_Variables.IncidentTypeCancelLocator).click();
    await expect(page.getByText(incident_user_map_Variables.IncidentTypeAlert)).toBeVisible();
    await page.locator(incident_user_map_Variables.IncidenCreatorsLocator).click();
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.IncidenCreatorsLocator).click();
    await page.locator(incident_user_map_Variables.IncidentCreatorsCancelLocator).click();
    await expect(page.getByText(incident_user_map_Variables.IncidentCreatorsAlert)).toBeVisible();
    await page.locator(incident_user_map_Variables.IncidentWatchersLocator).click();
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.IncidentWatchersLocator).click();
    await page.locator(incident_user_map_Variables.IncidentWatchersCancelLocator).click();
    await expect(page.getByText(incident_user_map_Variables.IncidentWatcherAlert)).toBeVisible();
  });

  test("Edit Incident User Map", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_USER_MAP}`);
    await page.locator(incident_user_map_Variables.EditLocatorPrefix +`"${incident_user_map_Variables.Plant} ${inc_type_name}"`+ incident_user_map_Variables.EditLocatorSuffix).click();
    await page.locator(incident_user_map_Variables.PlantEditLocator).click();
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.IncidentTypeEditLocator).click();
    await page.locator(incident_user_map_Variables.IncidentTypeEditLocator).type(inc_type_name);
    await delay(3000);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.IncidentCreatorsEditLocator).click();
    await page.locator(incident_user_map_Variables.CreatorsSlectAllLocator).click();
    await page.locator(incident_user_map_Variables.IncidentWatchersEditLocator).click();
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.getByRole('button', { name: incident_user_map_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(incident_user_map_Variables.UpdateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_USER_MAP}`);
  });

  test("Testing Alert While Updating Incident User Map", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_USER_MAP}`);
    await page.locator(incident_user_map_Variables.EditLocatorPrefix +`"${incident_user_map_Variables.Plant} ${inc_type_name}"`+ incident_user_map_Variables.EditLocatorSuffix).click();
    await page.locator(incident_user_map_Variables.PlanteditCancelLocator).click();
    await expect(page.getByText(incident_user_map_Variables.PlantAlert)).toBeVisible();
    await page.locator(incident_user_map_Variables.IncidentTypeEditCancelLocator).click();
    await expect(page.getByText(incident_user_map_Variables.IncidentTypeAlert)).toBeVisible();
    await page.locator(incident_user_map_Variables.IncidentCreatorsEditCancelLocator).click();
    await expect(page.getByText(incident_user_map_Variables.IncidentCreatorsAlert)).toBeVisible()
    await page.locator(incident_user_map_Variables.IncidentWatchersEditCancelLocator).click();
    await expect(page.getByText(incident_user_map_Variables.IncidentWatcherAlert)).toBeVisible()
  });

  test("Validate Incident User Map alerady exist with the same Plant and Incident", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_USER_MAP}`);

    await page.getByRole("button", { name: incident_user_map_Variables.operation.create }).click();
    await page.locator(incident_user_map_Variables.PlantLocator).click();
    await delay(3000);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.IncidentTypeLocator).click();
    await page.locator(incident_user_map_Variables.IncidentTypeLocator).type(inc_type_name);
    await delay(3000);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.IncidenCreatorsLocator).click();
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.keyboard.press(incident_user_map_Variables.Down);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.keyboard.press(incident_user_map_Variables.Down);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.locator(incident_user_map_Variables.IncidentWatchersLocator).click();
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.keyboard.press(incident_user_map_Variables.Down);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.keyboard.press(incident_user_map_Variables.Down);
    await page.keyboard.press(incident_user_map_Variables.Enter);
    await page.getByRole('button', { name: incident_user_map_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(incident_user_map_Variables.IncidentUserMapExistAlert)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_USER_MAP}`); 
  });

  test("Delete Incident User Map", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_USER_MAP}`);
    await page.locator(incident_user_map_Variables.DeleteLocatorPrefix +`"${incident_user_map_Variables.Plant} ${inc_type_name}"`+ incident_user_map_Variables.DeleteLocatorSuffix).click();
    await page.getByRole('button', { name: incident_user_map_Variables.operation.Confirm }).click();
    await expect(page.getByText(incident_user_map_Variables.DeleteSuccess)).toBeVisible();
  });

  test("Delete Incident Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INCIDENT_TYPE}`);
    await page.locator(incident_type_Variables.DeleteLocatorPrefix +`"${inc_type_name}"`+ incident_type_Variables.DeleteLocatorSuffix).click();
    await page.getByRole('button', { name: incident_type_Variables.operation.Confirm }).click();
    await expect(page.getByText(incident_type_Variables.DeleteSuccess)).toBeVisible();
  });
});