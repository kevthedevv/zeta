class CommonElement {

    loginLink() {
         return '.d-md-inline-flex[href$="/login.html"]'
    }

    googleSearch() {
        return '[name="q"]';
    }

    bingSearch() {
        return '[name="q"]';
    }

    yahooSearch() {
        return '[name="p"]';
    }

    googleSend() {
        return '[name="btnK"]';
    }

    yahooSend() {
        return '#ybar-search';
    }

    bingSend() {
        return '#search_icon';
    }

    googleClickFirstResult() {
        return '#rso div h3 >> nth=0'
    }

    bingClickFirstResult() {
        return '#b_results .b_algo .b_title >> nth=0'
    }



}

module.exports = new CommonElement;
 