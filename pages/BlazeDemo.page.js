export default class BlazeDemo {

    open(path) {
        browser.url(path)
    }

    pageTitle() {
        return browser.getTitle();
    }

}
