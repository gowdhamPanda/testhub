import { test, expect } from '@playwright/test';
import { delay, doLogin } from "../../../../utils/utils";
import { routeslist } from '../../../router.const'
import { getBaseUrl } from '../../../../../config';
import { breakdownTypeVariables } from '../../../../utils/constant';
const breakdown_type_name = `breakdown-type-${new Date().getTime()}`;


test.describe("Verify the functionalities of Breakdown Type Dashboard Page for CMMS", async () => {
  test("Create Breakdown Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.BREAKDOWN_TYPE}`);
    await page.getByRole("button", { name: breakdownTypeVariables.operation.create }).click();
    await page.getByPlaceholder(breakdownTypeVariables.Placeholder).click();
    await page.getByPlaceholder(breakdownTypeVariables.Placeholder).type(breakdown_type_name);
    await page.getByRole("button", { name: breakdownTypeVariables.operation.save }).click();
    await expect(page.getByText(breakdownTypeVariables.CreateSuccess)).toBeVisible();
  });

  test("Testing Alert while Craeting Breakdown Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.BREAKDOWN_TYPE}`);
    await page.getByRole("button", { name: breakdownTypeVariables.operation.create }).click();
    await page.getByPlaceholder(breakdownTypeVariables.Placeholder).click();
    await page.getByPlaceholder(breakdownTypeVariables.Placeholder).fill(breakdown_type_name);
    await page.keyboard.press(breakdownTypeVariables.Select);
    await page.keyboard.press(breakdownTypeVariables.Delete);
    await expect(page.getByText(breakdownTypeVariables.Alert)).toBeVisible();
  });

  test("Validate Breakdown Type Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.BREAKDOWN_TYPE}`);
    await page.getByRole("button", { name: breakdownTypeVariables.operation.create }).click();
    await page.getByPlaceholder(breakdownTypeVariables.Placeholder).click();
    await page.getByPlaceholder(breakdownTypeVariables.Placeholder).fill(breakdown_type_name);
    await page.getByRole("button", { name: breakdownTypeVariables.operation.save }).click();
    await expect(page.getByText(breakdownTypeVariables.BreakdownTypeExistAlert)).toBeVisible();
  });

  test("To View Created Breakdown", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.BREAKDOWN_TYPE}`);
    await delay(3000);
    await page.getByText(breakdown_type_name).click();
    await delay(3000);
    await page.getByRole("button", { name: breakdownTypeVariables.operation.cancel }).click();
  });
});