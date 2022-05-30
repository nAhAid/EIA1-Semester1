"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const L08 = require("../L08/script");
let isPlaying = false;
document.querySelector("#taste1").addEventListener("click", () => { L08.playSample([L08.sound.c]); });
document.querySelector("#taste2").addEventListener("click", () => { L08.playSample([L08.sound.d]); });
document.querySelector("#taste3").addEventListener("click", () => { L08.playSample([L08.sound.e]); });
document.querySelector("#taste4").addEventListener("click", () => { L08.playSample([L08.sound.f]); });
document.querySelector("#taste5").addEventListener("click", () => { L08.playSample([L08.sound.g]); });
document.querySelector("#taste6").addEventListener("click", () => { L08.playSample([L08.sound.a]); });
document.querySelector("#taste7").addEventListener("click", () => { L08.playSample([L08.sound.b]); });
document.querySelector("#staste1").addEventListener("click", () => { L08.playSample([L08.sound.df]); });
document.querySelector("#staste2").addEventListener("click", () => { L08.playSample([L08.sound.ef]); });
document.querySelector("#staste3").addEventListener("click", () => { L08.playSample([L08.sound.gf]); });
document.querySelector("#staste4").addEventListener("click", () => { L08.playSample([L08.sound.af]); });
document.querySelector("#staste5").addEventListener("click", () => { L08.playSample([L08.sound.bf]); });
document.querySelector("#play").addEventListener("click", () => {
    isPlaying = !isPlaying;
    while (isPlaying) {
        L08.playSample([L08.sound.c, L08.sound.d, L08.sound.e, L08.sound.f, L08.sound.g, L08.sound.g, L08.sound.a, L08.sound.a, L08.sound.a, L08.sound.a, L08.sound.g, L08.sound.a, L08.sound.a, L08.sound.a, L08.sound.a, L08.sound.g, L08.sound.f, L08.sound.f, L08.sound.f, L08.sound.f, L08.sound.e, L08.sound.e, L08.sound.d, L08.sound.d, L08.sound.d, L08.sound.d, L08.sound.c]);
    }
});
addEventListener("keypress", (e) => { L08.keyboard(e); });
//# sourceMappingURL=script.js.map