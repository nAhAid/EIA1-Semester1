"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyboard = exports.playSample = exports.sound = void 0;
exports.sound = {
    a: new Audio("assets/L08_task_material_assets_Keyboard_a.mp3"),
    af: new Audio("assets/L08_task_material_assets_Keyboard_af.mp3"),
    b: new Audio("assets/L08_task_material_assets_Keyboard_b.mp3"),
    bf: new Audio("assets/L08_task_material_assets_Keyboard_bf.mp3"),
    c: new Audio("assets/L08_task_material_assets_Keyboard_c.mp3"),
    d: new Audio("assets/L08_task_material_assets_Keyboard_d.mp3"),
    df: new Audio("assets/L08_task_material_assets_Keyboard_df.mp3"),
    e: new Audio("assets/L08_task_material_assets_Keyboard_e.mp3"),
    ef: new Audio("assets/L08_task_material_assets_Keyboard_ef.mp3"),
    f: new Audio("assets/L08_task_material_assets_Keyboard_f.mp3"),
    g: new Audio("assets/L08_task_material_assets_Keyboard_g.mp3"),
    gf: new Audio("assets/L08_task_material_assets_Keyboard_gf.mp3")
};
function playSample(soundList) {
    let currentIndex = 1;
    soundList[0].play();
    setInterval(() => {
        if (currentIndex > soundList.length - 1) {
            clearInterval();
            return;
        }
        soundList[currentIndex].play();
        currentIndex += 1; //oder "++" => erhöt index um 1
        console.log(currentIndex);
    }, 3000);
}
exports.playSample = playSample;
function keyboard(keyboardEvent) {
    console.log(keyboardEvent.key);
    if (keyboardEvent.key === "1") {
        exports.sound.c.play();
    }
    else if (keyboardEvent.key === "2") {
        exports.sound.d.play();
    }
    else if (keyboardEvent.key === "3") {
        exports.sound.e.play();
    }
    else if (keyboardEvent.key === "4") {
        exports.sound.f.play();
    }
    else if (keyboardEvent.key === "5") {
        exports.sound.g.play();
    }
    else if (keyboardEvent.key === "6") {
        exports.sound.a.play();
    }
    else if (keyboardEvent.key === "7") {
        exports.sound.b.play();
    }
    else if (keyboardEvent.key === "q") {
        exports.sound.df.play();
    }
    else if (keyboardEvent.key === "w") {
        exports.sound.ef.play();
    }
    else if (keyboardEvent.key === "e") {
        exports.sound.gf.play();
    }
    else if (keyboardEvent.key === "r") {
        exports.sound.af.play();
    }
    else if (keyboardEvent.key === "t") {
        exports.sound.bf.play();
    }
    else {
        console.log("Unbekannte Taste");
    }
}
exports.keyboard = keyboard;
document.querySelector("#taste1").addEventListener("click", () => { playSample([exports.sound.c]); });
document.querySelector("#taste2").addEventListener("click", () => { playSample([exports.sound.d]); });
document.querySelector("#taste3").addEventListener("click", () => { playSample([exports.sound.e]); });
document.querySelector("#taste4").addEventListener("click", () => { playSample([exports.sound.f]); });
document.querySelector("#taste5").addEventListener("click", () => { playSample([exports.sound.g]); });
document.querySelector("#taste6").addEventListener("click", () => { playSample([exports.sound.a]); });
document.querySelector("#taste7").addEventListener("click", () => { playSample([exports.sound.b]); });
document.querySelector("#staste1").addEventListener("click", () => { playSample([exports.sound.df]); });
document.querySelector("#staste2").addEventListener("click", () => { playSample([exports.sound.ef]); });
document.querySelector("#staste3").addEventListener("click", () => { playSample([exports.sound.gf]); });
document.querySelector("#staste4").addEventListener("click", () => { playSample([exports.sound.af]); });
document.querySelector("#staste5").addEventListener("click", () => { playSample([exports.sound.bf]); });
document.querySelector("#play").addEventListener("click", () => {
    playSample([exports.sound.c, exports.sound.d, exports.sound.e, exports.sound.f, exports.sound.g, exports.sound.g, exports.sound.a, exports.sound.a, exports.sound.a, exports.sound.a, exports.sound.g, exports.sound.a, exports.sound.a, exports.sound.a, exports.sound.a, exports.sound.g, exports.sound.f, exports.sound.f, exports.sound.f, exports.sound.f, exports.sound.e, exports.sound.e, exports.sound.d, exports.sound.d, exports.sound.d, exports.sound.d, exports.sound.c]);
});
addEventListener("keypress", (e) => { keyboard(e); });
//addEventListener("keypress", (keypress: KeyboardEvent) => { playSample([sound.c]) });
//addEventListener("keypress", (keypress: KeyboardEvent) => { playSample([sound.d]) });
//# sourceMappingURL=script.js.map