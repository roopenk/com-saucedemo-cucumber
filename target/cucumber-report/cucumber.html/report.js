$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "As A User I want to verify login and products functionalities",
  "description": "",
  "id": "as-a-user-i-want-to-verify-login-and-products-functionalities",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3005157400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "User is at the sauce demo home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 11,
  "name": "Verify that six products are displayed on the products page",
  "description": "",
  "id": "as-a-user-i-want-to-verify-login-and-products-functionalities;verify-that-six-products-are-displayed-on-the-products-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter the username into username filed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter password into password field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can verify that six products are displayed on products page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsPage.iEnterTheUsernameIntoUsernameFiled()"
});
formatter.result({
  "duration": 230778000,
  "status": "passed"
});
formatter.match({
  "location": "StepsPage.iEnterPasswordIntoPasswordField()"
});
formatter.result({
  "duration": 108516600,
  "status": "passed"
});
formatter.match({
  "location": "StepsPage.iClickOnLoginButton()"
});
formatter.result({
  "duration": 142296000,
  "status": "passed"
});
formatter.match({
  "location": "StepsPage.iCanVerifyThatSixProductsAreDisplayedOnProductsPage()"
});
formatter.result({
  "duration": 62845800,
  "status": "passed"
});
formatter.after({
  "duration": 691901500,
  "status": "passed"
});
});