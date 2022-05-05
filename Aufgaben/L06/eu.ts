var eu_einwohner_gesamt : number = 447010000;
    var quelle_eu_einwohner_gesamt : string = "https://de.statista.com/themen/2332/bevoelkerung-in-eu-und-euro-zone/#dossierKeyfigures";

var eu_internetnutzer_rel : number = 0.882;
    var quelle_eu_internetnuter_rel : string = "https://de.statista.com/themen/3118/internetnutzung-in-europa/"
var eu_internetnutzer_fest : number = eu_einwohner_gesamt*eu_internetnutzer_rel;
console.log("Internetnutzer in der EU: " + eu_internetnutzer_fest);
console.log("Internetnutzer in der EU relativ zu Gesamtbevölkerung: " + eu_internetnutzer_rel*100 + " %")

var de_einwohner_gesamt : number = 83140000;
    var quelle_de_einwohner_gesamt : string = "https://de.statista.com/themen/2332/bevoelkerung-in-eu-und-euro-zone/#dossierKeyfigures";
console.log("Deutschland Einwohneranteil an der EU: " + de_einwohner_gesamt/eu_einwohner_gesamt*100 +" %");

var de_internetnutzer_rel : number = 0.92;
    var quelle_de_internetnutzer_rel : string = "https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/";
console.log("Internetnutzer in Deutschland: " + de_einwohner_gesamt*de_internetnutzer_rel);


var fr_einwohner_gesamt : number = 65120000;
    var quelle_fr_einwohner_gesamt : string = "https://de.statista.com/statistik/daten/studie/19298/umfrage/gesamtbevoelkerung-in-frankreich/" +" Stand 2020";
console.log("Frankreich Einwohneranteil an der EU: " + fr_einwohner_gesamt/eu_einwohner_gesamt*100 +" %");

var fr_internetnutzer_rel : number = 0.93;
    var quelle_fr_internetnutzer_rel : string = "https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/";
console.log("Internetnutzer in Frankreich: " + fr_einwohner_gesamt*fr_internetnutzer_rel);


var sp_einwohner_gesamt : number = 47110000;
    var quelle_sp_einwohner_gesamt : string = "https://de.statista.com/statistik/daten/studie/19315/umfrage/gesamtbevoelkerung-in-spanien/" +" Stand 2020";
console.log("Spanien Einwohneranteil an der EU: " + sp_einwohner_gesamt/eu_einwohner_gesamt*100 +" %");

var sp_internetnutzer_rel : number = 0.94;
    var quelle_sp_internetnutzer_rel : string = "https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/";
console.log("Internetnutzer in Spanien: " + sp_einwohner_gesamt*sp_internetnutzer_rel);




