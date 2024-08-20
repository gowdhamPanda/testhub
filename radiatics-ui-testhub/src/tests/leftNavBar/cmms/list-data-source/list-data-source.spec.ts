import { test, expect } from '@playwright/test';
import { delay, doLogin } from "../../../../utils/utils";
import { routeslist } from '../../../router.const'
import { getBaseUrl } from '../../../../../config';
import { list_data_source_Variables } from '../../../../utils/constant';
const list_data_source = `list-data-source-${new Date().getTime()}`;
const new_list_data_source = `new-data-source-${new Date().getTime()}`;
const updated_data_source = `Data-${new Date().getTime()}`;
const new_data_source = `New-${new Date().getTime()}`;
test.describe("Verify the functionalities of List Data Source Dashboard Page for CMMS", async () => {
  test("Create List Data Source", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.LIST_DATA_SOURCE}`);

    await page.getByRole("button", { name: list_data_source_Variables.operation.create }).click();
    await page.getByPlaceholder(list_data_source_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(list_data_source_Variables.NamePlaceholder).fill(list_data_source);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).click();
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).fill(list_data_source_Variables.key1);
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).click();
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).type(list_data_source_Variables.Value1);
    await page.locator(list_data_source_Variables.AddButtonLocator).click();
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(1).click();
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(1).fill(list_data_source_Variables.key2);
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(1).click();
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(1).type(list_data_source_Variables.Value2);
    await page.locator(list_data_source_Variables.AddButtonOneLocator).click();
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(2).click();
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(2).fill(list_data_source_Variables.key3);
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(2).click();
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(2).type(list_data_source_Variables.Value3);
    await page.getByRole('button', { name: list_data_source_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(list_data_source_Variables.CreateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.LIST_DATA_SOURCE}`); 
  });

  test("Testing Alert While Creating List Data Source", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.LIST_DATA_SOURCE}`);

    await page.getByRole("button", { name: list_data_source_Variables.operation.create }).click();
    await page.getByPlaceholder(list_data_source_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(list_data_source_Variables.NamePlaceholder).fill(new_list_data_source);
    await page.keyboard.press(list_data_source_Variables.Select);
    await page.keyboard.press(list_data_source_Variables.Delete);
    await delay(3000);
    await expect(page.getByText(list_data_source_Variables.DataSourceNameAlert)).toBeVisible();
    await page.getByPlaceholder(list_data_source_Variables.NamePlaceholder).fill(new_list_data_source);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).click();
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).fill(list_data_source_Variables.key1);
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).click();
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).type(list_data_source_Variables.Value1);
    await page.locator(list_data_source_Variables.AddButtonLocator).click();
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(1).click();
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(1).fill(list_data_source_Variables.key1);
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(1).click();
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(1).type(list_data_source_Variables.Value2);
    await page.getByRole('button', { name: list_data_source_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(list_data_source_Variables.DuplicateAlert)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.LIST_DATA_SOURCE}`); 
  });

  test("Edit List Data Source", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.LIST_DATA_SOURCE}`);
    await delay(3000);
    await page.getByText(list_data_source).click();
    await page.getByPlaceholder(list_data_source_Variables.NamePlaceholder).click();
    await delay(3000);
    await page.getByPlaceholder(list_data_source_Variables.NamePlaceholder).fill(updated_data_source);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(0).click();
    await page.keyboard.press(list_data_source_Variables.Select);
    await page.keyboard.press(list_data_source_Variables.Delete);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(0).fill(list_data_source_Variables.Newkey1);
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(0).click();
    await page.keyboard.press(list_data_source_Variables.Select);
    await page.keyboard.press(list_data_source_Variables.Delete);
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(0).type(list_data_source_Variables.NewValue1);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(1).click();
    await page.keyboard.press(list_data_source_Variables.Select);
    await page.keyboard.press(list_data_source_Variables.Delete);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(1).fill(list_data_source_Variables.Newkey2);
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(1).click();
    await page.keyboard.press(list_data_source_Variables.Select);
    await page.keyboard.press(list_data_source_Variables.Delete);
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(1).type(list_data_source_Variables.NewValue2);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(2).click();
    await page.keyboard.press(list_data_source_Variables.Select);
    await page.keyboard.press(list_data_source_Variables.Delete);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(2).fill(list_data_source_Variables.Newkey3);
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(2).click();
    await page.keyboard.press(list_data_source_Variables.Select);
    await page.keyboard.press(list_data_source_Variables.Delete);
    await page.getByPlaceholder(list_data_source_Variables.ValuePlaceholder).nth(2).type(list_data_source_Variables.NewValue3);
    await page.getByRole('button', { name: list_data_source_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(list_data_source_Variables.UpdateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.LIST_DATA_SOURCE}`); 
  });

  test("Testing Alert While Updating List Data Source", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.LIST_DATA_SOURCE}`);
    await delay(3000);
    await page.getByText(updated_data_source).click();
    await page.getByPlaceholder(list_data_source_Variables.NamePlaceholder).click();
    await page.keyboard.press(list_data_source_Variables.Select);
    await page.keyboard.press(list_data_source_Variables.Delete);
    await delay(3000);
    await expect(page.getByText(list_data_source_Variables.DataSourceNameAlert)).toBeVisible();
    await page.getByPlaceholder(list_data_source_Variables.NamePlaceholder).fill(new_data_source);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(0).click();
    await page.keyboard.press(list_data_source_Variables.Select);
    await page.keyboard.press(list_data_source_Variables.Delete);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(0).fill(list_data_source_Variables.UpdateKey);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(1).click();
    await page.keyboard.press(list_data_source_Variables.Select);
    await page.keyboard.press(list_data_source_Variables.Delete);
    await page.getByPlaceholder(list_data_source_Variables.KeyPlaceholder).nth(1).fill(list_data_source_Variables.UpdateKey);
    await page.getByRole('button', { name: list_data_source_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(list_data_source_Variables.DuplicateAlert)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.LIST_DATA_SOURCE}`); 
  });

    test("Delete List Data Source", async ({ page }) => {
      await doLogin(page);
      await page.goto(`${getBaseUrl()}${routeslist.LIST_DATA_SOURCE}`);
      await page.locator(list_data_source_Variables.DeleteLocatorPrefix +`"${updated_data_source}"`+ list_data_source_Variables.DeleteLocatorSuffix).click();
      await page.getByRole('button', { name: list_data_source_Variables.operation.Confirm }).click();
      await expect(page.getByText(list_data_source_Variables.DeleteSuccess)).toBeVisible();
    });
});