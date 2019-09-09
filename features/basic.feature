Feature: Check Price
  Search car
  Go second page
  Take screenshot
  I need to be able to checkout the selected car price in detail

  Scenario: Check Price
    Given I go to https://www.sahibinden.com/en
    When I search for "renault megane"
    And I click "Cars"
    And I Go to "2" result page
    And I save the price of the "3"rd car with an image
    And I go to the "3"rd car details
    Then Check if the price inside the details is same
