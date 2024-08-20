import { test, expect } from '@playwright/test';
import { delay, doLogin, } from "../../../../utils/utils";
import { routeslist } from '../../../router.const'
import { getBaseUrl } from '../../../../../config';
import { approval_matrix_Variables, approval_matrix_map_Variables } from '../../../../utils/constant';
const approval_matrix_name = `approval-matrix-name-${new Date().getTime()}`;
const approval_label_one = `approval-label-one-${new Date().getTime()}`;
const approval_label_two = `approval-label-two-${new Date().getTime()}`;
const approval_label_three = `approval-label-three-${new Date().getTime()}`;
const approval_label_four = `approval-label-four-${new Date().getTime()}`;
const approval_label_five = `approval-label-five-${new Date().getTime()}`;

test.describe("Verify the functionalities of Approval Matrix Dashboard Page for CMMS", async () => {
    test("Create Approval Matrix", async ({ page }) => {
      await doLogin(page);
      await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX}`);
  
      await page.getByRole("button", { name: approval_matrix_Variables.operation.create }).click();
      await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).click();
      await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).fill(approval_matrix_name);
      await page.locator(approval_matrix_Variables.NextButtonLocator).click();
      await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).click();
      await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).fill(approval_label_one);
      await page.locator(approval_matrix_Variables.FormOneRequiredLocator).click();
      await page.locator(approval_matrix_Variables.FormOneDropdownLocator).click();
      await delay(3000);
      await page.keyboard.press(approval_matrix_Variables.Enter);
      await page.locator(approval_matrix_Variables.PlusOneLocator).click();
      await page.locator(approval_matrix_Variables.LabelTwoLocator).click();
      await page.locator(approval_matrix_Variables.LabelTwoLocator).fill(approval_label_two);
      await page.locator(approval_matrix_Variables.FormTwoRequiredLocator).click();
      await page.locator(approval_matrix_Variables.FormTwoDropdownLocator).click();
      await delay(3000);
      await page.keyboard.press(approval_matrix_Variables.Enter);
      await page.locator(approval_matrix_Variables.PlusTwoLocator).click();
      await page.locator(approval_matrix_Variables.LabelThreeLocator).click();
      await page.locator(approval_matrix_Variables.LabelThreeLocator).fill(approval_label_three);
      await page.locator(approval_matrix_Variables.FormThreeRequiredLocator).click();
      await page.locator(approval_matrix_Variables.FormThreeDropdownLocator).click();
      await page.keyboard.press(approval_matrix_Variables.Enter);
      await page.locator(approval_matrix_Variables.PlusThreeLocator).click();
      await page.locator(approval_matrix_Variables.LabelFourLocator).click();
      await page.locator(approval_matrix_Variables.LabelFourLocator).fill(approval_label_four);
      await page.locator(approval_matrix_Variables.FormFourRequiredLocator).click();
      await page.locator(approval_matrix_Variables.FormFourDropdownLocator).click();
      await page.keyboard.press(approval_matrix_Variables.Enter);
      await page.locator(approval_matrix_Variables.PlusFourLocator).click();
      await page.locator(approval_matrix_Variables.LabelFiveLocator).click();
      await page.locator(approval_matrix_Variables.LabelFiveLocator).fill(approval_label_five);
      await page.locator(approval_matrix_Variables.FormFiveRequiredLocator).click();
      await page.locator(approval_matrix_Variables.FormFiveDropdownLocator).click();
      await delay(3000);
      await page.keyboard.press(approval_matrix_Variables.Enter);
      await page.getByRole('button', { name: approval_matrix_Variables.operation.save }).click();
      await delay(3000);
      await expect(page.getByText(approval_matrix_Variables.CreateSuccess)).toBeVisible();
    });

    test("Create Approval Matrix Map", async ({ page }) => {
        await doLogin(page);
        await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX_MAP}`);

        await page.getByRole("button", { name: approval_matrix_map_Variables.operation.create }).click();
        await page.locator(approval_matrix_map_Variables.ApprovalMatrixLocator).click();
        await page.locator(approval_matrix_map_Variables.ApprovalMatrixLocator).fill(approval_matrix_name);
        await delay(3000);
        await page.keyboard.press(approval_matrix_map_Variables.Enter);
        await page.locator(approval_matrix_map_Variables.PlantLocator).click()
        await delay(3000);
        await page.keyboard.press(approval_matrix_map_Variables.Enter);
        await page.locator(approval_matrix_map_Variables.ApproverOneLocator).click();
        await page.keyboard.press(approval_matrix_map_Variables.Enter);
        await page.locator(approval_matrix_map_Variables.ApproverTwoLocator).click();
        await page.keyboard.press(approval_matrix_map_Variables.Enter);
        await page.locator(approval_matrix_map_Variables.ApproverThreeLocator).click();
        await page.keyboard.press(approval_matrix_map_Variables.Enter);
        await page.locator(approval_matrix_map_Variables.ApproverFourLocator).click();
        await page.keyboard.press(approval_matrix_map_Variables.Enter);
        await page.locator(approval_matrix_map_Variables.ApproverFiveLocator).click();
        await page.keyboard.press(approval_matrix_map_Variables.Enter);
        await page.getByRole('button', { name: approval_matrix_Variables.operation.save }).click();
        await delay(3000);
        await expect(page.getByText(approval_matrix_map_Variables.CreateSuccess)).toBeVisible();
    });

    test("Testing Alert while creating Approval Matrix Map", async ({ page }) => {
      await doLogin(page);
      await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX_MAP}`);

      await page.getByRole("button", { name: approval_matrix_map_Variables.operation.create }).click();
      await page.locator(approval_matrix_map_Variables.ApprovalMatrixLocator).click();
      await page.locator(approval_matrix_map_Variables.ApprovalMatrixLocator).fill(approval_matrix_name);
      await page.keyboard.press(approval_matrix_map_Variables.Enter);
      await page.locator(approval_matrix_map_Variables.ApprovalMatrixCancelLocator).click();
      await delay(3000);
      await expect(page.getByText(approval_matrix_map_Variables.ApprovalMatrixAlert)).toBeVisible();
      await page.locator(approval_matrix_map_Variables.PlantLocator).click()
      await page.keyboard.press(approval_matrix_map_Variables.Enter);
      await page.locator(approval_matrix_map_Variables.PlantCancelLocator).click();
      await expect(page.getByText(approval_matrix_map_Variables.PlantAlert)).toBeVisible();
      await page.locator(approval_matrix_map_Variables.ApprovalMatrixLocator).click();
      await page.locator(approval_matrix_map_Variables.ApprovalMatrixLocator).fill(approval_matrix_name);
      await page.keyboard.press(approval_matrix_map_Variables.Enter);
      await page.locator(approval_matrix_map_Variables.PlantLocator).click()
      await delay(3000);
      await page.keyboard.press(approval_matrix_map_Variables.Enter);
      await page.locator(approval_matrix_map_Variables.ApproverOneLocator).click();
      await page.keyboard.press(approval_matrix_map_Variables.Enter);
      await page.locator(approval_matrix_map_Variables.ApproverOneCancelLocator).click();
      await expect(page.locator(approval_matrix_map_Variables.ApproverOneAlertLocator)).toBeVisible();
      await delay(3000);
      await page.locator(approval_matrix_map_Variables.ApproverTwoLocator).click();
      await page.keyboard.press(approval_matrix_map_Variables.Enter);
      await page.locator(approval_matrix_map_Variables.ApproverTwoCancelLocator).click();
      await expect(page.locator(approval_matrix_map_Variables.ApproverTwoAlertLocator)).toBeVisible();
      await delay(3000);
      await page.locator(approval_matrix_map_Variables.ApproverThreeLocator).click();
      await page.keyboard.press(approval_matrix_map_Variables.Enter);
      await page.locator(approval_matrix_map_Variables.ApproverThreeCancelLocator).click();
      await expect(page.locator(approval_matrix_map_Variables.ApproverThreeAlertLocator)).toBeVisible();
      await page.locator(approval_matrix_map_Variables.ApproverFourLocator).click();
      await page.keyboard.press(approval_matrix_map_Variables.Enter);
      await page.locator(approval_matrix_map_Variables.ApproverFourCancelLocator).click();
      await expect(page.locator(approval_matrix_map_Variables.ApproverFourAlertLocator)).toBeVisible();
      await page.locator(approval_matrix_map_Variables.ApproverFiveLocator).click();
      await page.keyboard.press(approval_matrix_map_Variables.Enter);
      await page.locator(approval_matrix_map_Variables.ApproverFiveCancelLocator).click();
      await expect(page.locator(approval_matrix_map_Variables.ApproverFiveAlertLocator)).toBeVisible();
});

test("Edit Approval Matrix Map", async ({ page }) => {
  await doLogin(page);
  await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX_MAP}`);
  await page.getByRole('row', { name: `${approval_matrix_name}` }).getByRole('button').nth(1).click()
  await delay(3000);
  await page.getByText(approval_matrix_map_Variables.EditText).click();
  await page.locator(approval_matrix_map_Variables.ApprovalMatrixEditLocator).click();
  await page.keyboard.press(approval_matrix_map_Variables.Enter);
  await page.locator(approval_matrix_map_Variables.PlantEditLocator).click();
  await page.keyboard.press(approval_matrix_map_Variables.Enter);
  await page.locator(approval_matrix_map_Variables.ApproverOneEditLocator).click();
  await page.keyboard.press(approval_matrix_map_Variables.Down);
  await page.keyboard.press(approval_matrix_map_Variables.Enter);
  await page.keyboard.press(approval_matrix_map_Variables.Down);
  await page.keyboard.press(approval_matrix_map_Variables.Enter);
  await page.locator(approval_matrix_map_Variables.ApproverTwoEditLocator).click();
  await page.keyboard.press(approval_matrix_map_Variables.Down);
  await page.keyboard.press(approval_matrix_map_Variables.Enter);
  await page.keyboard.press(approval_matrix_map_Variables.Down);
  await page.keyboard.press(approval_matrix_map_Variables.Enter);
  await page.locator(approval_matrix_map_Variables.ApproverThreeEditLocator).click();
  await page.keyboard.press(approval_matrix_map_Variables.Down);
  await page.keyboard.press(approval_matrix_map_Variables.Enter);
  await page.locator(approval_matrix_map_Variables.ApproverFourEditLocator).click();
  await page.keyboard.press(approval_matrix_map_Variables.Down);
  await page.keyboard.press(approval_matrix_map_Variables.Enter);
  await page.locator(approval_matrix_map_Variables.ApproverFiveEditLocator).click();
  await page.keyboard.press(approval_matrix_map_Variables.Down);
  await page.keyboard.press(approval_matrix_map_Variables.Enter);
  await page.getByRole('button', { name: approval_matrix_map_Variables.operation.save }).click();
  // await delay(3000);
  await expect(page.getByText(approval_matrix_map_Variables.UpdateSuccess)).toBeVisible();
  
});

test("Testing Alert while updating Part Type", async ({ page }) => {
  await doLogin(page);
  await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX_MAP}`);
  await page.getByRole('row', { name: `${approval_matrix_name}` }).getByRole('button').nth(1).click()
  await delay(3000);
  await page.getByText(approval_matrix_map_Variables.EditText).click();
  await page.locator(approval_matrix_map_Variables.PlantCancelLocator).click();
  await expect(page.getByText(approval_matrix_map_Variables.PlantAlert)).toBeVisible();
  await page.locator(approval_matrix_map_Variables.ApproverOneCancelEditLocator).click();
  await expect(page.locator(approval_matrix_map_Variables.ApproverOneAlertLocator)).toBeVisible();
  await page.locator(approval_matrix_map_Variables.ApproverTwoCancelEditLocator).click();
  await expect(page.locator(approval_matrix_map_Variables.ApproverTwoAlertLocator)).toBeVisible();
  await page.locator(approval_matrix_map_Variables.ApproverThreeCancelEditLocator).click();
  await expect(page.locator(approval_matrix_map_Variables.ApproverThreeAlertLocator)).toBeVisible();
  await page.locator(approval_matrix_map_Variables.ApproverFourCancelEditLocator).click();
  await expect(page.locator(approval_matrix_map_Variables.ApproverFourAlertLocator)).toBeVisible();
  await page.locator(approval_matrix_map_Variables.ApproverFiveCancelEditLocator).click();
  await expect(page.locator(approval_matrix_map_Variables.ApproverFiveAlertLocator)).toBeVisible();
  await page.locator(approval_matrix_map_Variables.ApprovalMatrixCancelLocator).click();
  await delay(3000);
  await expect(page.getByText(approval_matrix_map_Variables.ApprovalMatrixAlert)).toBeVisible();
});

test("Validate Approval Matrix Map exist with Respective Approval Matrix and Plant", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX_MAP}`);

    await page.getByRole("button", { name: approval_matrix_map_Variables.operation.create }).click();
    await page.locator(approval_matrix_map_Variables.ApprovalMatrixLocator).click();
    await page.locator(approval_matrix_map_Variables.ApprovalMatrixLocator).fill(approval_matrix_name);
    await delay(3000);
    await page.keyboard.press(approval_matrix_map_Variables.Enter);
    await page.locator(approval_matrix_map_Variables.PlantLocator).click()
    await delay(3000);
    await page.keyboard.press(approval_matrix_map_Variables.Enter);
    await page.locator(approval_matrix_map_Variables.ApproverOneLocator).click();
    await page.keyboard.press(approval_matrix_map_Variables.Enter);
    await page.locator(approval_matrix_map_Variables.ApproverTwoLocator).click();
    await page.keyboard.press(approval_matrix_map_Variables.Enter);
    await page.locator(approval_matrix_map_Variables.ApproverThreeLocator).click();
    await page.keyboard.press(approval_matrix_map_Variables.Enter);
    await page.locator(approval_matrix_map_Variables.ApproverFourLocator).click();
    await page.keyboard.press(approval_matrix_map_Variables.Enter);
    await page.locator(approval_matrix_map_Variables.ApproverFiveLocator).click();
    await page.keyboard.press(approval_matrix_map_Variables.Enter);
    await page.getByRole('button', { name: approval_matrix_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(approval_matrix_map_Variables.MapExistAlert)).toBeVisible();
});

test("Delete Approval Matrix Map", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX_MAP}`);
    await page.locator(approval_matrix_map_Variables.DeleteLocatorPrefix +`"${approval_matrix_name}"`+ approval_matrix_map_Variables.DeleteLocatorSuffix).click();
    await page.getByRole('button', { name: approval_matrix_map_Variables.operation.Confirm }).click();
    await expect(page.getByText(approval_matrix_map_Variables.DeleteSuccess)).toBeVisible();
  });

test("Delete Approval Matrix", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX}`);
    await page.locator(approval_matrix_Variables.DeleteLocatorPrefix +`"${approval_matrix_name}"`+ approval_matrix_Variables.DeleteLocatorSuffix).click();
    await page.getByRole('button', { name: approval_matrix_Variables.operation.Confirm }).click();
    await expect(page.getByText(approval_matrix_Variables.DeleteSuccess)).toBeVisible();
  });


});