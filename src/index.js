function getCardBrand(cardNumber) {
    const cardPatterns = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        MasterCard: /^5[1-5][0-9]{14}$/,
        AmericanExpress: /^3[47][0-9]{13}$/,
        DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        EnRoute: /^(2014|2149)[0-9]{11}$/,
        JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
        Voyager: /^8699[0-9]{11}$/,
        HiperCard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        Aura: /^50[0-9]{14,17}$/
    };

    for (const [brand, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return brand;
        }
    }

    return 'Unknown';
}

// Exemplo de uso:
const cardNumber = '4111111111111111';
console.log(getCardBrand(cardNumber)); // saída: Visa