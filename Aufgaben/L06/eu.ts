var eu_einwohner_gesamt : number = 447010000;
    var quelle_eu_einwohner_gesamt : string = "https://de.statista.com/themen/2332/bevoelkerung-in-eu-und-euro-zone/#dossierKeyfigures";

var eu_einwohner_ges_2005 : number = 434420000;
    var quelle_eu_einwohner_ges_2005 : string = "https://de.statista.com/download/MTY1MTc2ODkyMCMjNDQzMTQjIzI0NzU2IyMxIyNwZGYjI1N0dWR5";

var eu_internetnutzer_rel : number = 0.882;
    var quelle_eu_internetnuter_rel : string = "https://de.statista.com/themen/3118/internetnutzung-in-europa/";
var eu_internetnutzer_fest : number = eu_einwohner_gesamt*eu_internetnutzer_rel;

var de_einwohner_gesamt : number = 83140000;
    var quelle_de_einwohner_gesamt : string = "https://de.statista.com/themen/2332/bevoelkerung-in-eu-und-euro-zone/#dossierKeyfigures";

var de_einwohner_ges_2005 : number = 82440000;
    var quelle_de_einwohner_ges_2005 : string = "https://de.statista.com/statistik/daten/studie/2861/umfrage/entwicklung-der-gesamtbevoelkerung-deutschlands/";

var de_internetnutzer_rel : number = 0.92;
    var quelle_de_internetnutzer_rel : string = "https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/";

var de_internetnutzer_2005_rel : number =0.71;
    var quelle_de_internetnutzer_2005_rel : string = "https://de.statista.com/statistik/daten/studie/71009/umfrage/anteil-der-offliner-in-europa/";


var de_internetnutzer_2005 : number = de_einwohner_ges_2005*de_internetnutzer_2005_rel;
var de_internetnutzer_2021 : number = de_einwohner_gesamt*de_internetnutzer_rel;

    

    var de_einwohner_anteil_eu : number = de_einwohner_gesamt/eu_einwohner_gesamt;
    var de_internetnutzer_anteil : number = de_einwohner_gesamt*de_internetnutzer_rel;
    var de_aenderung_internetnutzer : number = de_internetnutzer_2021-de_internetnutzer_2005;
    /*Rechnung */
    var de_aenderung_internetnutzer_prozentual : number = de_internetnutzer_2005/de_internetnutzer_2021*100;





var fr_einwohner_gesamt : number = 65120000;
    var quelle_fr_einwohner_gesamt : string = "https://de.statista.com/statistik/daten/studie/19298/umfrage/gesamtbevoelkerung-in-frankreich/" +" Stand 2020";

var fr_internetnutzer_rel : number = 0.93;
    var quelle_fr_internetnutzer_rel : string = "https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/";



var sp_einwohner_gesamt : number = 47110000;
    var quelle_sp_einwohner_gesamt : string = "https://de.statista.com/statistik/daten/studie/19315/umfrage/gesamtbevoelkerung-in-spanien/" +" Stand 2020";

var sp_internetnutzer_rel : number = 0.94;
    var quelle_sp_internetnutzer_rel : string = "https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/";



console.log("Internetnutzer in der EU im Jahr 2021: ", + eu_internetnutzer_fest);
console.log("Internetnutzer in der EU relativ zu Gesamtbevölkerung im Jahr 2021: ", + eu_internetnutzer_rel*100, "%");

console.log("Deutschland Einwohneranteil an der EU im Jahr 2021: ", + de_einwohner_anteil_eu*100, "%");
console.log("Anteil der Internetnutzer in Deutschland im Jahr 2021: ", + de_internetnutzer_anteil, "%");
console.log("Internetnutzer in Deutschland im Jahr 2005: ", + de_internetnutzer_2005);
console.log("Internetnutzer in Deutschland im Jahr 2021: ", + de_internetnutzer_2021);
console.log("Anteiländerung der Internetnutzer von 2005 zu 2021: ", + de_aenderung_internetnutzer,)
/*Überprüfen */
console.log("Anteiländerung in Prozent: ", de_aenderung_internetnutzer_prozentual, "%")


console.log("Frankreich Einwohneranteil an der EU im Jahr 2021: ", + fr_einwohner_gesamt/eu_einwohner_gesamt*100 +"%");
console.log("Anteil der Internetnutzer in Frankreich im Jahr 2021: ", + fr_einwohner_gesamt*fr_internetnutzer_rel);


console.log(`Spanien Einwohneranteil an der EU im Jahr 2021: ${sp_einwohner_gesamt / eu_einwohner_gesamt * 100} %`);
console.log("Anteil der Internetnutzer in Spanien im Jahr 2021: " + sp_einwohner_gesamt*sp_internetnutzer_rel);
