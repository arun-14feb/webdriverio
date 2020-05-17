import BlazeDemo from '../BlazeDemo.page'

class HomePage extends BlazeDemo {

    open(url) {
        super.open(url)
    }

    get pageTitle() {
        return super.pageTitle()
    }

    findFlights(from, to) {
        $('[name="fromPort"]').selectByVisibleText(from);
        $('[name="toPort"]').selectByVisibleText(to);
        $(".btn-primary").click();
    }

    chooseFlight() {
        $(".btn-small").click();
    }

    bookFlight(name, address, city, state, zipcode, cardType, cardNo, cardMonth, cardYear, nameOnCard) {
        $("#inputName").setValue(name);
        $("#address").setValue(address);
        $("#city").setValue(city);
        $("#state").setValue(state);
        $("#zipCode").setValue(zipcode);
        $("#cardType").selectByVisibleText(cardType);
        $("#creditCardNumber").setValue(cardNo);
        $("#creditCardMonth").setValue(cardMonth);
        $("#creditCardYear").setValue(cardYear);
        $("#nameOnCard").setValue(nameOnCard);
        $(".btn-primary").click();
    }
}

export default new HomePage()