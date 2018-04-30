"use strict";

export default class EventHandler {
    constructor(data) {
        this.variable = data;
        this.handleButtons();
    }

    displayVariable() {
        console.log(this.variable);
    }

    handleButtons() {
        for (let i = 0; i < document.getElementsByName('formSubmit').length; i++) {
            document.getElementsByName('formSubmit')[i].addEventListener('click', () => {
                let value = document.getElementsByName('formSubmit')[i].getAttribute('value').substr(15, 1);
                let qty = Number(prompt(`How many?`));
                this.simulateRoll(qty, value);
            });
        }
    }

    simulateRoll(qty, type) {
        let results = [];
        let total = 0;
        for (let i = 0; i < qty; i++) {
            results[i] = Math.floor((Math.random() * type) + 1);
            total += results[i];
            console.log(results[i]);
        }
        alert(total);
    }
}