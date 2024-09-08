import { test } from '../fixture/my-fixture';

test.describe('@demo_fixture @smoke @regression', () => {
  test('Test case: Demo fixture', async({
    dashBoardPage,
    cartPage,
  }) => {
    const email = "demo.playwright@gmail.com";
    const productName = 'IPHONE 13 PRO';
    const dashBoardPageUrl = "https://rahulshettyacademy.com/client";
    const countryName = "India";
    const orderSuccessfullyMessage = " Thankyou for the order. ";
    
    await dashBoardPage.goToDashBoardPage(dashBoardPageUrl);
    await dashBoardPage.searchProductAddCart(productName);
    await dashBoardPage.navigateToCart();

    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
    await cartPage.selectCountry(countryName);
    await cartPage.verifyEmailDisplayCorrectly(email);
    await cartPage.clickPlaceOrderButton();
    await cartPage.verifyOrderSuccessfully(orderSuccessfullyMessage);
  })
})
