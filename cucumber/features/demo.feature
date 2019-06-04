Feature: Demo Feature

    To check if Jest cucumber works with typescript

    Scenario: Demo Scenario
        Given To check if given step is called and print something
        When To check if When step is called and print something
        Then To check if Then step is called and print something
        When Another shared step with parameter 'shared step example - Four'

    Scenario: To check if steps can be parameterized
        Given This is a Shared Step
        Given I add the following two nos 5 and 23
        And I multiply the following three nos 34, 78 and 44
        Then I take in the string 'intel inside' and print it to the console

    Scenario Outline: To check if the examples are working
        Given I take two values <a> and <b> from examples
        When I add those two nos
        Then I should get the result as <result>
        When Another shared step with parameter 'shared step example - Three'
        Examples:
            | a  | b  | result |
            | 1  | 3  | 4      |
            | 3  | 5  | 8      |
            | 2  | 4  | 6      |
            | 34 | 3  | 37     |
            | 66 | 22 | 88     |

    Scenario Outline: To check if gherkin tables are working
        Given I accept a few values from the user
            | Item   | Category   |
            | Laptop | Device     |
            | Mobile | Phone      |
            | Pen    | Stationary |
        When I add another set of data
            | List1 | List2   | List3    |
            | Mouse | Glasses | Bottle   |
            | Phone | Monitor | Laptop   |
            | Apps  | git     | Keyboard |
        Given This is a Shared Step
        Then I add data to the gherkin tables from examples
            | Holiday   | Date   |
            | <holiday> | <date> |
        Examples:
            | holiday   | date        |
            | New Years | 01 Jan 2019 |
    # | Maharashtra Day  | 01 May 2019 |
    # | Independence Day | 15 Aug 2019 |

    Scenario: To check if steps can be shared among other scenarios
        Given This is a Shared Step
        When Another shared step with parameter 'shared step example - One'


    Scenario: Third scenario step definition table
        Given My country list currently looks as follows:
            | countryNo | countryName | countrycapital |
            | 1         | India       | Delhi          |
            | 2         | SriLanka    | colombo        |
        When I add a following country:
            | countryNo | countryName | countrycapital |
            | 3         | Nepal       | Kathmandu      |
        Then I should see the following country list:
            | countryNo | countryName | countrycapital |
            | 1         | India       | Delhi          |
            | 2         | SriLanka    | colombo        |
            | 3         | Nepal       | Kathmandu      |