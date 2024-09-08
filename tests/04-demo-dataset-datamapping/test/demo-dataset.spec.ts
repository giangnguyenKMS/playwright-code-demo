import { test } from "../../03-demo-pom-fixture/fixture/my-fixture";
const dataset = JSON.parse(JSON.stringify(require("../data/placeOrderTestDataSet.json")))

test.describe('@demo_data_set @smoke @regression', () => {
  for (const data of dataset) {
    test(`User login and order product ${data.productName}`, async ({
      dashBoardPage, 
      cartPage, 
    }) => {
      await dashBoardPage.goToDashBoardPage(data.dashBoardPageUrl);
      await dashBoardPage.searchProductAddCart(data.productName);
      await dashBoardPage.navigateToCart();

      await cartPage.VerifyProductIsDisplayed(data.productName);
      await cartPage.Checkout();
      await cartPage.selectCountry(data.countryName);
      await cartPage.verifyEmailDisplayCorrectly(data.username);
      await cartPage.clickPlaceOrderButton();
      await cartPage.verifyOrderSuccessfully(data.orderMessage);
    });
  }
})
