import { DashboardPage } from "../page-objects/DashBoardPage";
import { CartPage } from "../page-objects/CartPage";
import { test } from '@playwright/test';

test.describe('@demo_pom @smoke @regression', () => {
  test('Test case: Demo POM', async({page}) => {
    const email = "demo.playwright@gmail.com";
    const productName = 'IPHONE 13 PRO';
    const dashBoardPageUrl = "https://rahulshettyacademy.com/client";
    const countryName = "India";
    const orderSuccessfullyMessage = " Thankyou for the order. ";
    
    const dashBoardPage = new DashboardPage(page);
    await dashBoardPage.goToDashBoardPage(dashBoardPageUrl);
    await dashBoardPage.searchProductAddCart(productName);
    await dashBoardPage.navigateToCart();

    const cartPage = new CartPage(page);
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
    await cartPage.selectCountry(countryName);
    await cartPage.verifyEmailDisplayCorrectly(email);
    await cartPage.clickPlaceOrderButton();
    await cartPage.verifyOrderSuccessfully(orderSuccessfullyMessage);
  })
});
