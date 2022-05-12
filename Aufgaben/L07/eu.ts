/* Daten EU */
var eu_einwohner_gesamt: number = 447010000;
/** Quelle: https://de.statista.com/themen/2332/bevoelkerung-in-eu-und-euro-zone/#dossierKeyfigures */
var eu_einwohner_ges_2005: number = 434420000;
/** Quelle: https://de.statista.com/download/MTY1MTc2ODkyMCMjNDQzMTQjIzI0NzU2IyMxIyNwZGYjI1N0dWR5 */
var eu_internetnutzer_rel: number = 0.882;
/** Quelle:  https://de.statista.com/themen/3118/internetnutzung-in-europa/ */
var eu_internetnutzer_fest: number = eu_einwohner_gesamt * eu_internetnutzer_rel;

let deutschland_objekt = {
    name: "Deutschland",
    einwohner_ges: 83140000,
    einwohner_05: 82440000,
    anteil_internetnutzer: 0.92,
    anteil_internetnutzer_05: 0.71
}

let spanien_objekt = {
    name: "Spanien",
    einwohner_ges: 47110000,
    einwohner_05: 43660000,
    anteil_internetnutzer: 0.94,
    anteil_internetnutzer_05: 0.5
}

let frankreich_objekt = {
    name: "Frankreich",
    einwohner_ges: 65120000,
    einwohner_05: 60960000,
    anteil_internetnutzer: 0.93,
    anteil_internetnutzer_05: 1
}

let italien_objekt = {
    name: "Italien",
    einwohner_ges: 59580000,
    einwohner_05: 58040000,
    anteil_internetnutzer: 0.81,
    anteil_internetnutzer_05: 0.38

};


document.querySelector('#deutschland').addEventListener('click', function () {
    ausgabe(deutschland_objekt)
});
document.querySelector('#frankreich').addEventListener('click', function () {
    ausgabe(frankreich_objekt)
});
document.querySelector('#spanien').addEventListener('click', function () {
    ausgabe(spanien_objekt)
});

document.querySelector('#italien').addEventListener('click', () => {
    ausgabe(italien_objekt)
});


function ausgabe(land) {
    var ausgabe_land: string = land.name;
    var einwohner_land: number = land.einwohner_ges;
    var einwohner_anteil_eu: number = land.einwohner_ges / eu_einwohner_gesamt * 100;
    var internetnutzer_2021: number = land.einwohner_ges * land.anteil_internetnutzer;
    var internetnutzer_2005: number = land.einwohner_05 * land.anteil_internetnutzer_05;
    var aenderung_internetnutzer: number = internetnutzer_2021 - internetnutzer_2005;
    var aenderung_internetnutzer_prozentual: number = internetnutzer_2021 / internetnutzer_2005 * 100;
    document.querySelector('#einwohner').innerHTML = formatNumber(einwohner_land);
    document.querySelector('#land').innerHTML = ausgabe_land;
    document.querySelector('#relativ').innerHTML = (einwohner_anteil_eu.toFixed(2)).toLocaleString() + "%";
    document.querySelector('#nutzer').innerHTML = formatNumber(internetnutzer_2021);
    document.querySelector('#wachstum').innerHTML = formatNumber(aenderung_internetnutzer);
    document.querySelector('.chartWrapper .chart').setAttribute("style", "height: " + einwohner_anteil_eu + "%")
    document.querySelector('.wrapper.active').classList.remove('active')
    document.querySelector('#' + land.name.toLowerCase()).classList.add('active')
}



function formatNumber(nummer: number) {
    if (nummer >= 1e9) {
        nummer = nummer / 1e9;
        return nummer.toFixed(2).toString() + " Mrd.";
    }
    if (nummer >= 1e6) {
        nummer = nummer / 1e6;
        return nummer.toFixed(2).toString() + " Mio.";
    }
    return nummer.toString();
};


