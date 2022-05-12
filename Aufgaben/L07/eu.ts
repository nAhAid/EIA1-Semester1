/* Daten EU */
var eu_einwohner_gesamt : number = 447010000;
    /** Quelle: https://de.statista.com/themen/2332/bevoelkerung-in-eu-und-euro-zone/#dossierKeyfigures */
var eu_einwohner_ges_2005 : number = 434420000;
    /** Quelle: https://de.statista.com/download/MTY1MTc2ODkyMCMjNDQzMTQjIzI0NzU2IyMxIyNwZGYjI1N0dWR5 */    
var eu_internetnutzer_rel : number = 0.882;
    /** Quelle:  https://de.statista.com/themen/3118/internetnutzung-in-europa/ */
var eu_internetnutzer_fest : number = eu_einwohner_gesamt*eu_internetnutzer_rel;

/* Daten Deutschland */
var deutschland : string = "Deutschland";
var de_einwohner_gesamt : number = 83140000;
    /** Quelle: https://de.statista.com/themen/2332/bevoelkerung-in-eu-und-euro-zone/#dossierKeyfigures */
var de_einwohner_ges_2005 : number = 82440000;
    /** Quelle: https://de.statista.com/statistik/daten/studie/2861/umfrage/entwicklung-der-gesamtbevoelkerung-deutschlands/ */
var de_internetnutzer_rel : number = 0.92;
    /* Quelle: https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/ */
var de_internetnutzer_2005_rel : number =0.71;
    /* Quelle: https://de.statista.com/statistik/daten/studie/71009/umfrage/anteil-der-offliner-in-europa/ */


/* Daten Spanien */    
var spanien : string = "Spanien";
var sp_einwohner_gesamt : number = 47110000;
    /* Quelle: https://de.statista.com/statistik/daten/studie/19315/umfrage/gesamtbevoelkerung-in-spanien/" +" Stand 2020 */
var sp_internetnutzer_rel : number = 0.94;
    /* Quelle: https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/ */
var sp_einwohner_2005 : number = 43660000;
    /* Quelle: https://de.statista.com/statistik/daten/studie/19315/umfrage/gesamtbevoelkerung-in-spanien/ */    
var sp_internetnutzer_rel_2005 : number = 0.5;
    /* Quelle: https://de.statista.com/statistik/daten/studie/71009/umfrage/anteil-der-offliner-in-europa/ */    


/* Daten Frankreich */
var frankreich : string = "Frankreich";
var fr_einwohner_gesamt : number = 65120000;
    /* Quelle: https://de.statista.com/statistik/daten/studie/19298/umfrage/gesamtbevoelkerung-in-frankreich/ Stand 2020 */
var fr_internetnutzer_rel : number = 0.93;
    /* Quelle: https://de.statista.com/statistik/daten/studie/184636/umfrage/internetreichweite-anteil-der-nutzer-in-europa/ */
var fr_einwohner_2005 : number = 60960000;
    /* Quelle: https://de.statista.com/statistik/daten/studie/19298/umfrage/gesamtbevoelkerung-in-frankreich/ */
var fr_internetnutzer_rel_2005 : number = 1;
    /* Quelle: https://de.statista.com/statistik/daten/studie/71009/umfrage/anteil-der-offliner-in-europa/ */


/* Daten Italien */
var italien : string = "Italien";
var it_einwohner_gesamt : number = 59580000;
/* Quelle: https://de.statista.com/statistik/daten/studie/19304/umfrage/gesamtbevoelkerung-in-italien/ */
var it_einwohner_2005 : number = 58040000;
/* Quelle: https://de.statista.com/statistik/daten/studie/19304/umfrage/gesamtbevoelkerung-in-italien/ */
var it_internetnutzer_rel : number = 0.81;
/* Quelle: https://de.statista.com/statistik/daten/studie/319345/umfrage/anteil-der-internetnutzer-in-italien/ */
var it_internetnutzer_rel_2005 : number = 0.38;
/* Quelle: https://de.statista.com/statistik/daten/studie/71009/umfrage/anteil-der-offliner-in-europa/" */


function ausgabe (land,einwohner,nutzer_re,einwohner_05,nutzer_rel_05,){
    var ausgabe_land : string = land;
    var einwohner_land : number = einwohner; 
    var einwohner_anteil_eu : number = einwohner/eu_einwohner_gesamt*100;
    var internetnutzer_2021 : number = einwohner*nutzer_re;
    var internetnutzer_2005 : number = einwohner_05*nutzer_rel_05;
    var aenderung_internetnutzer : number = internetnutzer_2021-internetnutzer_2005;
    var aenderung_internetnutzer_prozentual : number = internetnutzer_2021/internetnutzer_2005*100;

    document.querySelector('#einwohner').innerHTML=(einwohner_land.toFixed(2)) + "Mio.";
    document.querySelector('#land').innerHTML=ausgabe_land;
    document.querySelector('#relativ').innerHTML=(einwohner_anteil_eu.toFixed(2)).toLocaleString();
    document.querySelector('#nutzer').innerHTML=(internetnutzer_2021.toFixed(2));
    document.querySelector('#wachstum').innerHTML=(aenderung_internetnutzer.toFixed(2));
    
}

document.querySelector('#deutschland').addEventListener('click',function(){
    ausgabe(deutschland,de_einwohner_gesamt,de_internetnutzer_rel,de_einwohner_ges_2005,de_internetnutzer_2005_rel)
});
document.querySelector('#frankreich').addEventListener('click',function(){
    ausgabe(frankreich,fr_einwohner_gesamt,fr_internetnutzer_rel,fr_einwohner_2005,fr_internetnutzer_rel_2005)
});
document.querySelector('#spanien').addEventListener('click',function(){
    ausgabe(spanien,sp_einwohner_gesamt,sp_internetnutzer_rel,sp_einwohner_2005,sp_internetnutzer_rel_2005)
});
document.querySelector('#italien').addEventListener('click',function(){
    ausgabe(italien,it_einwohner_gesamt,it_internetnutzer_rel,it_einwohner_2005,it_internetnutzer_rel_2005)
});















    /*EU Ausgabe */    
console.log("EU:")
console.log("Internetnutzer in der EU im Jahr 2021: ", Number(eu_internetnutzer_fest.toFixed(2)).toLocaleString());
console.log("Internetnutzer in der EU relativ zu Gesamtbevölkerung im Jahr 2021: ", + eu_internetnutzer_rel*100, "%");

/*Deutschland Ausgabe */
console.log("Deutschland:");
console.log("Deutschland Einwohneranteil an der EU im Jahr 2021: ", + de_einwohner_anteil_eu.toFixed(2), "%");
console.log("Internetnutzer in Deutschland im Jahr 2021: ", Number(de_internetnutzer_2021.toFixed(2)).toLocaleString());
console.log("Internetnutzer in Deutschland im Jahr 2005: ", Number(de_internetnutzer_2005.toFixed(2)).toLocaleString());
console.log("Neue Internetnutzer von 2005 zu 2021: ",  Number(de_aenderung_internetnutzer.toFixed(2)).toLocaleString(),);
console.log("Internetnutzerzuwachs in Prozent: ", de_aenderung_internetnutzer_prozentual.toFixed(2) + "%");

/*Frankreich Ausgabe */
console.log("Frankreich:")
console.log("Frankreich Einwohneranteil an der EU im Jahr 2021: ", + fr_einwohner_anteil_eu.toFixed(2) +"%");
console.log("Anteil der Internetnutzer in Frankreich im Jahr 2021: ",  Number(fr_internetnutzer_2021.toFixed(2)).toLocaleString());
console.log("Internetnutzer in Frankreich im Jahr 2021: ", fr_internetnutzer_rel*100 +"%");
console.log("Neue Internetnutzer von 2005 zu 2021: ", Number(fr_aenderung_internetnutzer.toFixed(2)).toLocaleString());
console.log("Internetnutzerzuwachs in Prozent: ", fr_aenderung_internetnutzer_prozentual.toFixed(2) +"%");

/*Italien Ausgabe */
console.log("Italien:")
console.log("Italien Einwohneranteil an der EU im Jahr 2021: ", + it_einwohner_anteil_eu.toFixed(2) +"%");
console.log("Anteil der Internetnutzer in Italien im Jahr 2021: ",  Number(it_internetnutzer_2021.toFixed(2)).toLocaleString());
console.log("Internetnutzer in Italien im Jahr 2021: ", it_internetnutzer_rel*100 +"%");
console.log("Neue Internetnutzer von 2005 zu 2021: ", Number(it_aenderung_internetnutzer.toFixed(2)).toLocaleString());
console.log("Internetnutzerzuwachs in Prozent: ",it_aenderung_internetnutzer_prozentual.toFixed(2) +"%");


/*Spanien Ausgabe */
console.log("Spanien:")
console.log("Spanien Einwohneranteil an der EU im Jahr 2021: ", + sp_einwohner_anteil_eu.toFixed(2) +"%");
console.log("Anteil der Internetnutzer in Spanien im Jahr 2021: ",  Number(sp_internetnutzer_2021.toFixed(2)).toLocaleString());
console.log("Internetnutzer in Spanien im Jahr 2021: ", sp_internetnutzer_rel*100 +"%");
console.log("Neue Internetnutzer von 2005 zu 2021: ", Number(sp_aenderung_internetnutzer.toFixed(2)).toLocaleString());
console.log("Internetnutzerzuwachs in Prozent: ", sp_aenderung_internetnutzer_prozentual.toFixed(2) +"%");