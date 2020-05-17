import BlazeDemo from '../BlazeDemo.page'

class LoginPage extends BlazeDemo {

    open(url) {
        super.open(url)
    }

    get pageTitle() {
        return super.pageTitle()
    }

    login(user, password) {
        $("#email").setValue(user);
        $("#password").setValue(password);
        $("button=Login").click();
    }

}

export default new LoginPage()