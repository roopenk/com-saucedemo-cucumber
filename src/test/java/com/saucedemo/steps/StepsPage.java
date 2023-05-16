package com.saucedemo.steps;

import com.saucedemo.pages.LoginPage;
import com.saucedemo.pages.ProductsHomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class StepsPage {
    @When("^I enter the username into username filed$")
    public void iEnterTheUsernameIntoUsernameFiled() {
        new LoginPage().enterUserName("standard_user");
    }

    @And("^I enter password into password field$")
    public void iEnterPasswordIntoPasswordField() {
        new LoginPage().enterPassword("secret_sauce");
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I can verify the Products text$")
    public void iCanVerifyTheProductsText() {
        String expectedText = "Products";
        String actualText = new ProductsHomePage().getProductText();
        Assert.assertEquals(actualText, expectedText, "Expected Text does not displayed");
    }

    @Then("^I can verify that six products are displayed on products page$")
    public void iCanVerifyThatSixProductsAreDisplayedOnProductsPage() {
        int expectedNumberOfProducts = 6;
        int actualNumberOfProducts = new ProductsHomePage().findActualNumberOfProducts();
        Assert.assertEquals(actualNumberOfProducts, expectedNumberOfProducts, "Number of products are not 6");
    }
}
