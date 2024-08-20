import { test, expect } from '@playwright/test';
import { delay, doLogin, generateRandomString } from "../../../../utils/utils";
import { routeslist } from '../../../router.const'
import { getBaseUrl } from '../../../../../config';
import { asset_Type_Variables } from '../../../../utils/constant';
const asset_type_name = `asset-type-name-${new Date().getTime()}`;
const new_asset_type_name = `new-asset-type-name-${new Date().getTime()}`;
test.describe("Verify the functionalities of Asset Type Dashboard Page for CMMS", async () => {
  test("Create Asset Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`);

    await page.getByRole("button", { name: asset_Type_Variables.operation.create }).click();
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).fill(asset_type_name);
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).fill(asset_Type_Variables.randomCodePrefix);
    await page.locator(asset_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(asset_Type_Variables.Enter);
    await page.getByRole('button', { name: asset_Type_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(asset_Type_Variables.CreateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`); 
  });

  test("Testing Alert while creating Asset Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`);

    await page.getByRole("button", { name: asset_Type_Variables.operation.create }).click();
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).fill(asset_type_name);
    await page.keyboard.press(asset_Type_Variables.Select);
    await page.keyboard.press(asset_Type_Variables.Delete);
    await expect(page.getByText(asset_Type_Variables.NameAlert)).toBeVisible();
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).fill(generateRandomString(3));
    await expect(page.getByText(asset_Type_Variables.CodePrefixSizeAlert)).toBeVisible();
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).fill(generateRandomString(5));
    await page.keyboard.press(asset_Type_Variables.Select);
    await page.keyboard.press(asset_Type_Variables.Delete);
    await expect(page.getByText(asset_Type_Variables.CodePrefixAlert)).toBeVisible();
    await page.locator(asset_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(asset_Type_Variables.Enter);
    await page.locator(asset_Type_Variables.FormCancelSelector).click();
    await delay(3000);
    await expect(page.getByText(asset_Type_Variables.FormAlert)).toBeVisible();
    await page.getByRole("button", { name: asset_Type_Variables.operation.Cancel }).click();
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`);
  });

  test("Edit Asset Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`);
    await delay(3000);
    await page.getByText(asset_type_name).click();
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).click();
    await delay(3000);
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).fill(new_asset_type_name);
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).click();
    await page.keyboard.press(asset_Type_Variables.Select);
    await page.keyboard.press(asset_Type_Variables.Delete);
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).fill(asset_Type_Variables.randomCodePrefix);
    await page.locator(asset_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(asset_Type_Variables.Enter);
    await page.getByRole('button', { name: asset_Type_Variables.operation.save }).click();
    await expect(page.getByText(asset_Type_Variables.UpdateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`); 
  });

  test("Testing Alert while updating Asset Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`);
    await delay(3000);
    await page.getByText(new_asset_type_name).click();
    await delay(3000);
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).fill(new_asset_type_name);
    await page.keyboard.press(asset_Type_Variables.Select);
    await page.keyboard.press(asset_Type_Variables.Delete);
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).fill(generateRandomString(3));
    await expect(page.getByText(asset_Type_Variables.CodePrefixSizeAlert)).toBeVisible();
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).fill(generateRandomString(3));
    await page.keyboard.press(asset_Type_Variables.Select);
    await page.keyboard.press(asset_Type_Variables.Delete);
    await expect(page.getByText(asset_Type_Variables.CodePrefixAlert)).toBeVisible();
    await page.locator(asset_Type_Variables.FormDropdownLocator).click();
    await page.keyboard.press(asset_Type_Variables.Enter);
    await delay(3000);
    await page.locator(asset_Type_Variables.FormEditCancelSelector).click();
    await delay(3000);
    await expect(page.getByText(asset_Type_Variables.FormAlert)).toBeVisible();
    await page.getByRole("button", { name: asset_Type_Variables.operation.Cancel }).click();
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`);
  });

  test("Validate Asset Type Nmae Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`);
    await delay(3000);
    await page.getByRole("button", { name: asset_Type_Variables.operation.create }).click();
    await delay(3000);
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).fill(new_asset_type_name);
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).fill(asset_Type_Variables.randomCodePrefix);
    await page.locator(asset_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(asset_Type_Variables.Enter);
    await page.getByRole('button', { name: asset_Type_Variables.operation.save }).click();
    await expect(page.getByText(asset_Type_Variables.NameExistAlert +`"${new_asset_type_name}"`+ asset_Type_Variables.NameExistalert)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`); 
  }); 

  test("Validate Asset Type Code Prefix Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`);

    await page.getByRole("button", { name: asset_Type_Variables.operation.create }).click();
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.NamePlaceholder).fill(asset_type_name);
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(asset_Type_Variables.CodePrefixPlaceholder).fill(asset_Type_Variables.randomCodePrefix);
    await page.locator(asset_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(asset_Type_Variables.Enter);
    await page.getByRole('button', { name: asset_Type_Variables.operation.save }).click();
    await expect(page.getByText(asset_Type_Variables.CodePrefixExistAlert +`"${asset_Type_Variables.randomCodePrefix}"`+ asset_Type_Variables.CodePrefixExistalert)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`); 
  });

  test("Delete Asset type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TYPE}`);
    await page.locator(asset_Type_Variables.DeleteLocatorPrefix +`"${new_asset_type_name}"`+ asset_Type_Variables.DeleteLocatorSuffix).click();
    await page.getByRole('button', { name: asset_Type_Variables.operation.Confirm }).click();
    await expect(page.getByText(asset_Type_Variables.DeleteSuccess)).toBeVisible();
  });

});