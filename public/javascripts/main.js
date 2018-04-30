"use strict";

import EventHandler from './EventHandler.js';

class Main {
    constructor(zips) {
        this.date = new Date();
        this.eventHandler = new EventHandler(zips);
        // document.getElementById("weekDay").innerText = `${this.date.getMonth() + 1}/${this.date.getDate()}/${this.date.getFullYear()}`;
        this.prepUX();
    }

    prepUX() {
        this.eventHandler.displayVariable();
    }

    static async populateZips() {
        const response = await fetch(`/data/ZipCodeDB.csv`, {
            method: 'post',
            headers: {'x-requested-with': 'fetch.0'}
        });
        return response.text();
    }
}

window.addEventListener('load', () => {
    Main.populateZips().then((zips) => {
        zips = JSON.parse(zips);
        new Main(zips);
    });
});