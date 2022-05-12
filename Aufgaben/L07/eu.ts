/* Daten EU */
var eu_einwohner_gesamt: number = 447010000;
/** Quelle: https://de.statista.com/themen/2332/bevoelkerung-in-eu-und-euro-zone/#dossierKeyfigures */
var eu_einwohner_ges_2005: number = 434420000;
/** Quelle: https://de.statista.com/download/MTY1MTc2ODkyMCMjNDQzMTQjIzI0NzU2IyMxIyNwZGYjI1N0dWR5 */
var eu_internetnutzer_rel: number = 0.882;
/** Quelle:  https://de.statista.com/themen/3118/internetnutzung-in-europa/ */
var eu_internetnutzer_fest: number = eu_einwohner_gesamt * eu_internetnutzer_rel;

/* Daten Deutschland */
var deutschland: string = "Deutschland";
var de_einwohner_gesamt: number = 83140000;
/** Quelle: https://de.statista.com/themen/2332/bevoelkerung-in-eu-und-euro-zone/#dossierKeyfigures */
var de_einwohner_ges_2005: number = 82440000;
/** Quelle: https://de.statista.com/statistik/daten/studie/2861/umfrage/entwicklung-der-gesamtbevoelkerung-deutschlands/ */
var de_internetnutzer_rel: number = 0.92;
/* Quelle: https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/ */
var de_internetnutzer_2005_rel: number = 0.71;
/* Quelle: https://de.statista.com/statistik/daten/studie/71009/umfrage/anteil-der-offliner-in-europa/ */


/* Daten Spanien */
var spanien: string = "Spanien";
var sp_einwohner_gesamt: number = 47110000;
/* Quelle: https://de.statista.com/statistik/daten/studie/19315/umfrage/gesamtbevoelkerung-in-spanien/" +" Stand 2020 */
var sp_internetnutzer_rel: number = 0.94;
/* Quelle: https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/ */
var sp_einwohner_2005: number = 43660000;
/* Quelle: https://de.statista.com/statistik/daten/studie/19315/umfrage/gesamtbevoelkerung-in-spanien/ */
var sp_internetnutzer_rel_2005: number = 0.5;
/* Quelle: https://de.statista.com/statistik/daten/studie/71009/umfrage/anteil-der-offliner-in-europa/ */

let spanien_objekt = {
    name: "Spanien",
    einwohner_ges: 47110000,
    einwohner_05: 43660000,
    anteil_internetnutzer: 0.94,
    anteil_internetnutzer_05: 0.5
}

/* Daten Frankreich */
var frankreich: string = "Frankreich";
var fr_einwohner_gesamt: number = 65120000;
/* Quelle: https://de.statista.com/statistik/daten/studie/19298/umfrage/gesamtbevoelkerung-in-frankreich/ Stand 2020 */
var fr_internetnutzer_rel: number = 0.93;
/* Quelle: https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/ */
var fr_einwohner_2005: number = 60960000;
/* Quelle: https://de.statista.com/statistik/daten/studie/19298/umfrage/gesamtbevoelkerung-in-frankreich/ */
var fr_internetnutzer_rel_2005: number = 1;
/* Quelle: https://de.statista.com/statistik/daten/studie/71009/umfrage/anteil-der-offliner-in-europa/ */

let frankreich_objekt = {
    name: "Frankreich",
    einwohner_ges: 65120000,
    einwohner_05: 60960000,
    anteil_internetnutzer: 0.93,
    anteil_internetnutzer_05: 1
}


/* Daten Italien */
var italien: string = "Italien";
var it_einwohner_gesamt: number = 59580000;
/* Quelle: https://de.statista.com/statistik/daten/studie/19304/umfrage/gesamtbevoelkerung-in-italien/ */
var it_einwohner_2005: number = 58040000;
/* Quelle: https://de.statista.com/statistik/daten/studie/19304/umfrage/gesamtbevoelkerung-in-italien/ */
var it_internetnutzer_rel: number = 0.81;
/* Quelle: https://de.statista.com/statistik/daten/studie/319345/umfrage/anteil-der-internetnutzer-in-italien/ */
var it_internetnutzer_rel_2005: number = 0.38;
/* Quelle: https://de.statista.com/statistik/daten/studie/71009/umfrage/anteil-der-offliner-in-europa/" */

let italien_objekt = {
    name: "Italien",
    einwohner_ges: 59580000,
    einwohner_05: 58040000,
    anteil_internetnutzer: 0.81,
    anteil_internetnutzer_05: 0.38

};

/* document.querySelector('#deutschland').addEventListener('click',function(){
    ausgabe(deutschland,de_einwohner_gesamt,de_internetnutzer_rel,de_einwohner_ges_2005,de_internetnutzer_2005_rel)
});
document.querySelector('#frankreich').addEventListener('click',function(){
    ausgabe(frankreich,fr_einwohner_gesamt,fr_internetnutzer_rel,fr_einwohner_2005,fr_internetnutzer_rel_2005)
});
document.querySelector('#spanien').addEventListener('click',function(){
    ausgabe(spanien)
});*/

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









/*EU Ausgabe */
console.log("EU:")
console.log("Internetnutzer in der EU im Jahr 2021: ", Number(eu_internetnutzer_fest.toFixed(2)).toLocaleString());
console.log("Internetnutzer in der EU relativ zu Gesamtbevölkerung im Jahr 2021: ", + eu_internetnutzer_rel * 100, "%");

/*Deutschland Ausgabe */
console.log("Deutschland:");
console.log("Deutschland Einwohneranteil an der EU im Jahr 2021: ", + de_einwohner_anteil_eu.toFixed(2), "%");
console.log("Internetnutzer in Deutschland im Jahr 2021: ", Number(de_internetnutzer_2021.toFixed(2)).toLocaleString());
console.log("Internetnutzer in Deutschland im Jahr 2005: ", Number(de_internetnutzer_2005.toFixed(2)).toLocaleString());
console.log("Neue Internetnutzer von 2005 zu 2021: ", Number(de_aenderung_internetnutzer.toFixed(2)).toLocaleString(),);
console.log("Internetnutzerzuwachs in Prozent: ", de_aenderung_internetnutzer_prozentual.toFixed(2) + "%");

/*Frankreich Ausgabe */
console.log("Frankreich:")
console.log("Frankreich Einwohneranteil an der EU im Jahr 2021: ", + fr_einwohner_anteil_eu.toFixed(2) + "%");
console.log("Anteil der Internetnutzer in Frankreich im Jahr 2021: ", Number(fr_internetnutzer_2021.toFixed(2)).toLocaleString());
console.log("Internetnutzer in Frankreich im Jahr 2021: ", fr_internetnutzer_rel * 100 + "%");
console.log("Neue Internetnutzer von 2005 zu 2021: ", Number(fr_aenderung_internetnutzer.toFixed(2)).toLocaleString());
console.log("Internetnutzerzuwachs in Prozent: ", fr_aenderung_internetnutzer_prozentual.toFixed(2) + "%");

/*Italien Ausgabe */
console.log("Italien:")
console.log("Italien Einwohneranteil an der EU im Jahr 2021: ", + it_einwohner_anteil_eu.toFixed(2) + "%");
console.log("Anteil der Internetnutzer in Italien im Jahr 2021: ", Number(it_internetnutzer_2021.toFixed(2)).toLocaleString());
console.log("Internetnutzer in Italien im Jahr 2021: ", it_internetnutzer_rel * 100 + "%");
console.log("Neue Internetnutzer von 2005 zu 2021: ", Number(it_aenderung_internetnutzer.toFixed(2)).toLocaleString());
console.log("Internetnutzerzuwachs in Prozent: ", it_aenderung_internetnutzer_prozentual.toFixed(2) + "%");


/*Spanien Ausgabe */
console.log("Spanien:")
console.log("Spanien Einwohneranteil an der EU im Jahr 2021: ", + sp_einwohner_anteil_eu.toFixed(2) + "%");
console.log("Anteil der Internetnutzer in Spanien im Jahr 2021: ", Number(sp_internetnutzer_2021.toFixed(2)).toLocaleString());
console.log("Internetnutzer in Spanien im Jahr 2021: ", sp_internetnutzer_rel * 100 + "%");
console.log("Neue Internetnutzer von 2005 zu 2021: ", Number(sp_aenderung_internetnutzer.toFixed(2)).toLocaleString());
console.log("Internetnutzerzuwachs in Prozent: ", sp_aenderung_internetnutzer_prozentual.toFixed(2) + "%");