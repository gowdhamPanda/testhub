import { test, expect } from '@playwright/test';
import { delay, doLogin } from "../../../../utils/utils";
import { routeslist } from '../../../router.const'
import { getBaseUrl } from '../../../../../config';
import { label_meta_Variables } from '../../../../utils/constant';



test.describe("Verify the functionalities of Label Meta Index Page for CMMS", async () => {
  test("Add data to the Label Meta", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.LABELMETA}`);

    await page.getByPlaceholder(label_meta_Variables.AssigneesPlaceholder).click();
    await page.keyboard.press(label_meta_Variables.Select);
    await page.keyboard.press(label_meta_Variables.Delete);
    await page.getByPlaceholder(label_meta_Variables.AssigneesPlaceholder).type(label_meta_Variables.Assignees);
    await delay(3000);
    await page.getByPlaceholder(label_meta_Variables.AssignersPlaceholder).click();
    await page.keyboard.press(label_meta_Variables.Select);
    await page.keyboard.press(label_meta_Variables.Delete);
    await page.getByPlaceholder(label_meta_Variables.AssignersPlaceholder).type(label_meta_Variables.Assigners);
    await delay(3000);
    await page.getByPlaceholder(label_meta_Variables.WatchersPlaceholder).click();
    await page.keyboard.press(label_meta_Variables.Select);
    await page.keyboard.press(label_meta_Variables.Delete);
    await page.getByPlaceholder(label_meta_Variables.WatchersPlaceholder).type(label_meta_Variables.Watchers);
    await delay(3000);
    await page.getByPlaceholder(label_meta_Variables.OwnerPlaceholder).click();
    await page.keyboard.press(label_meta_Variables.Select);
    await page.keyboard.press(label_meta_Variables.Delete);
    await page.getByPlaceholder(label_meta_Variables.OwnerPlaceholder).type(label_meta_Variables.Owner);
    await delay(3000);
    await page.getByPlaceholder(label_meta_Variables.BreakdownReporterPlaceholder).click();
    await page.keyboard.press(label_meta_Variables.Select);
    await page.keyboard.press(label_meta_Variables.Delete);
    await page.getByPlaceholder(label_meta_Variables.BreakdownReporterPlaceholder).type(label_meta_Variables.BreakdownReporter);
    await delay(3000);
    await page.getByPlaceholder(label_meta_Variables.StartJobPlaceholder).click();
    await page.keyboard.press(label_meta_Variables.Select);
    await page.keyboard.press(label_meta_Variables.Delete);
    await page.getByPlaceholder(label_meta_Variables.StartJobPlaceholder).type(label_meta_Variables.StartJob);
    await delay(3000);
    await page.getByRole("button", { name: label_meta_Variables.operation.save }).click();
    await expect(page.getByText(label_meta_Variables.UpdateSuccess)).toBeVisible();
  });
});