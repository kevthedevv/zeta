class CommonElement {

    loginLink() {
         return '.d-md-inline-flex[href$="/login.html"]'
    }

    googleSearch() {
        return '[name="q"]';
    }

    googleSend() {
        return '[name="btnK"]';
    }

}

module.exports = new CommonElement;
 