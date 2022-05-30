let sound = {
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
function playSample1(soundList) {
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
function keyboard1(keyboard1Event) {
    console.log(keyboard1Event.key);
    if (keyboard1Event.key === "1") {
        sound.c.play();
    }
    else if (keyboard1Event.key === "2") {
        sound.d.play();
    }
    else if (keyboard1Event.key === "3") {
        sound.e.play();
    }
    else if (keyboard1Event.key === "4") {
        sound.f.play();
    }
    else if (keyboard1Event.key === "5") {
        sound.g.play();
    }
    else if (keyboard1Event.key === "6") {
        sound.a.play();
    }
    else if (keyboard1Event.key === "7") {
        sound.b.play();
    }
    else if (keyboard1Event.key === "q") {
        sound.df.play();
    }
    else if (keyboard1Event.key === "w") {
        sound.ef.play();
    }
    else if (keyboard1Event.key === "e") {
        sound.gf.play();
    }
    else if (keyboard1Event.key === "r") {
        sound.af.play();
    }
    else if (keyboard1Event.key === "t") {
        sound.bf.play();
    }
    else {
        console.log("Unbekannte Taste");
    }
}
document.querySelector("#taste1").addEventListener("click", () => { playSample1([sound.c]); });
document.querySelector("#taste2").addEventListener("click", () => { playSample1([sound.d]); });
document.querySelector("#taste3").addEventListener("click", () => { playSample1([sound.e]); });
document.querySelector("#taste4").addEventListener("click", () => { playSample1([sound.f]); });
document.querySelector("#taste5").addEventListener("click", () => { playSample1([sound.g]); });
document.querySelector("#taste6").addEventListener("click", () => { playSample1([sound.a]); });
document.querySelector("#taste7").addEventListener("click", () => { playSample1([sound.b]); });
document.querySelector("#staste1").addEventListener("click", () => { playSample1([sound.df]); });
document.querySelector("#staste2").addEventListener("click", () => { playSample1([sound.ef]); });
document.querySelector("#staste3").addEventListener("click", () => { playSample1([sound.gf]); });
document.querySelector("#staste4").addEventListener("click", () => { playSample1([sound.af]); });
document.querySelector("#staste5").addEventListener("click", () => { playSample1([sound.bf]); });
document.querySelector("#play").addEventListener("click", () => {
    console.log(1);
    playSample1([sound.c, sound.d, sound.e, sound.f, sound.g, sound.g, sound.a, sound.a, sound.a, sound.a, sound.g, sound.a, sound.a, sound.a, sound.a, sound.g, sound.f, sound.f, sound.f, sound.f, sound.e, sound.e, sound.d, sound.d, sound.d, sound.d, sound.c]);
});
addEventListener("keypress", (e) => { keyboard1(e); });
//addEventListener("keypress", (keypress: KeyboardEvent) => { playSample1([sound.c]) });
//addEventListener("keypress", (keypress: KeyboardEvent) => { playSample1([sound.d]) });
//# sourceMappingURL=script.js.map