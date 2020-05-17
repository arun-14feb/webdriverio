import { assert } from 'chai';
import LoginPage from '../../pages/login/LoginPage.page';
import HomePage from '../../pages/home/HomePage.page';

describe('Verify page title and login', () => {
    it('should have the right title', () => {
        LoginPage.open("https://blazedemo.com/login");
        assert.strictEqual("BlazeDemo", LoginPage.pageTitle);
    })

    it('should login to the website', () => {
        LoginPage.login("TestUser123@testing.com", "testuser123")
    })
})

describe('Find flights and choose flights', () => {
    it('should give flight details', () => {
        HomePage.open("http://blazedemo.com/")
        HomePage.findFlights("Paris", "London");
    })

    it('should choose flight', () => {
        HomePage.chooseFlight();
     })
})

describe('Book flights', () => {
    it('should book chosen flight', () => {
        HomePage.bookFlight("Test Name", "Test Address", "Test City",
                            "Test State", "Test Zipcode", "Visa",
                            "4000100020003000", "06", "2021", "Test Name");
                            browser.pause(2000);
    })
})