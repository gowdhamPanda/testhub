import { Page } from "@playwright/test";
import { getBaseUrl } from "../../config";
import { environment } from "../environments/environments";
import constant from "./constant";

const defaultUsername = environment.USEREMAIL
const defaultPassword = environment.PASSWORD

async function login(
  page: Page,
  username?: string,
  password?: string,
): Promise<void> {
  await page.goto(constant.loginUrl);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(username || defaultUsername);
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Password').fill(password || defaultPassword);
  await Promise.all([
    page.waitForURL(constant.homeUrl),
    await page.getByRole('button', { name: 'Log in' }).click()
  ]);
}
export { login as doLogin };
export const getURL = (url: string) => {
  return `${getBaseUrl()}${url}`;

}
export default login;

export function generateRandomString(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let randomString = 0; randomString < length; randomString++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function generateRandomNumberString(length) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;

  for (let randomNumber = 0; randomNumber < length; randomNumber++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function generateRandomNumber() {
  return Math.floor(Math.random() * 100).toString(); 
}

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));