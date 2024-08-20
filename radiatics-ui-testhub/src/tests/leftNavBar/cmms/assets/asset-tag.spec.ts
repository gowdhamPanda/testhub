import { test, expect } from '@playwright/test';
import { delay, doLogin } from "../../../../utils/utils";
import { routeslist } from '../../../router.const'
import { getBaseUrl } from '../../../../../config';
import { asset_tag_Variables } from '../../../../utils/constant';
const asset_tag_name = `asset_tag_name-${new Date().getTime()}`;


test.describe("Verify the functionalities of Asset Tag Dashboard Page for CMMS", async () => {
  test("Create Asset Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TAG}`);
    await page.getByRole("button", { name: asset_tag_Variables.operation.create }).click();
    await page.getByPlaceholder(asset_tag_Variables.Placeholder).click();
    await page.getByPlaceholder(asset_tag_Variables.Placeholder).fill(asset_tag_name);
    await page.getByRole("button", { name: asset_tag_Variables.operation.save }).click();
    await expect(page.getByText(asset_tag_Variables.CreateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TAG}`);
  });

  test("Testing Alert while Creating Asset Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TAG}`);
    await page.getByRole("button", { name: asset_tag_Variables.operation.create }).click();
    await page.getByPlaceholder(asset_tag_Variables.Placeholder).click();
    await page.getByPlaceholder(asset_tag_Variables.Placeholder).fill(asset_tag_name);
    await page.keyboard.press(asset_tag_Variables.Select);
    await page.keyboard.press(asset_tag_Variables.Delete);
    await expect(page.getByText(asset_tag_Variables.Alert)).toBeVisible();
    await delay(3000);
    await page.getByPlaceholder(asset_tag_Variables.Placeholder).click();
    await page.getByPlaceholder(asset_tag_Variables.Placeholder).fill(asset_tag_Variables.AssetTagNameValidation);
    await expect(page.getByText(asset_tag_Variables.AssetTagNameAlert)).toBeVisible();
    await delay(3000);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TAG}`);
  });

  test("Validate Asset tag Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TAG}`);
    await page.getByRole("button", { name: asset_tag_Variables.operation.create }).click();
    await page.getByPlaceholder(asset_tag_Variables.Placeholder).click();
    await page.getByPlaceholder(asset_tag_Variables.Placeholder).fill(asset_tag_name);
    await page.getByRole("button", { name: asset_tag_Variables.operation.save }).click();
    await expect(page.getByText(asset_tag_Variables.AssetTagExistAlert+ `"${asset_tag_name}"`+ asset_tag_Variables.AssetTagExistalert)).toBeVisible();
    await delay(3000);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TAG}`);
  });

  test("Delete Asset Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.ASSET_TAG}`);
    await page.locator(asset_tag_Variables.DeleteLocatorPrefix +`"${asset_tag_name}"`+ asset_tag_Variables.DeleteLocatorSuffix).click();
    await page.getByRole('button', { name: asset_tag_Variables.operation.Confirm }).click();
    await expect(page.getByText(asset_tag_Variables.DeleteSuccess)).toBeVisible();
    });
  });