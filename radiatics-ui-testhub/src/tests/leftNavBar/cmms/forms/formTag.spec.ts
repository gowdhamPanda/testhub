import { test, expect } from '@playwright/test';
import { doLogin } from "../../../../utils/utils";
import { routeslist } from '../../../router.const'
import { getBaseUrl } from '../../../../../config';
import { formTagVariables } from '../../../../utils/constant';

const form_tag_name = `form-tag-${new Date().getTime()}`;
const new_form_tag_name = `new-form-tag-name-${new Date().getTime()}`;

test.describe("Verify the functionalities of Job Tag Dashboard Page for CMMS", async () => {
  test("Create Form Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.FORM_TAG}`);
    await page.getByRole("button", { name: formTagVariables.operation.create }).click();
    await page.getByPlaceholder(formTagVariables.Placeholder).click();
    await page.getByPlaceholder(formTagVariables.Placeholder).fill(form_tag_name);
    await page.getByRole("button", { name: formTagVariables.operation.save }).click();
    await expect(page.getByText(formTagVariables.CreateSuccess)).toBeVisible();
    });

    test("Testing Alert while Craeting Form Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.FORM_TAG}`);
    await page.getByRole("button", { name: formTagVariables.operation.create }).click();
    await page.getByPlaceholder(formTagVariables.Placeholder).click();
    await page.getByPlaceholder(formTagVariables.Placeholder).fill(form_tag_name);
    await page.keyboard.press(formTagVariables.Select);
    await page.keyboard.press(formTagVariables.Delete);
    await expect(page.getByText(formTagVariables.Alert)).toBeVisible();
    });


    test("Edit Form Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.FORM_TAG}`);
    await page.getByText(form_tag_name).click();
    await page.getByPlaceholder(formTagVariables.Placeholder).click();
    await page.getByPlaceholder(formTagVariables.Placeholder).fill(new_form_tag_name);
    await page.getByRole("button", { name: formTagVariables.operation.save }).click();
    await expect(page.getByText(formTagVariables.UpdateSuccess)).toBeVisible();
    })


    test("Validate Form tag Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.FORM_TAG}`);
    await page.getByRole("button", { name: formTagVariables.operation.create }).click();
    await page.getByPlaceholder(formTagVariables.Placeholder).click();
    await page.getByPlaceholder(formTagVariables.Placeholder).fill(new_form_tag_name);
    await page.getByRole("button", { name: formTagVariables.operation.save }).click();
    await expect(page.getByText(formTagVariables.FormTagAlertPrefix +`${new_form_tag_name}`+ formTagVariables.FormTagAlertSuffix)).toBeVisible();
    });
    
    test("Delete Form Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.FORM_TAG}`);
    await page.locator(formTagVariables.DeleteLocatorPrefix +`"${new_form_tag_name}"`+ formTagVariables.DeleteLocatorSuffix).click();
    await page.getByRole('button', { name: formTagVariables.operation.Confirm }).click();
    await expect(page.getByText(formTagVariables.DeleteSuccess)).toBeVisible();
    });

})
