let isPlaying: boolean = false;
let tones = {
    a: new Audio("../L08/assets/L08_task_material_assets_Keyboard_a.mp3"),
    af: new Audio("../L08/assets/L08_task_material_assets_Keyboard_af.mp3"),
    b: new Audio("../L08/assets/L08_task_material_assets_Keyboard_b.mp3"),
    bf: new Audio("../L08/assets/L08_task_material_assets_Keyboard_bf.mp3"),
    c: new Audio("../L08/assets/L08_task_material_assets_Keyboard_c.mp3"),
    d: new Audio("../L08/assets/L08_task_material_assets_Keyboard_d.mp3"),
    df: new Audio("../L08/assets/L08_task_material_assets_Keyboard_df.mp3"),
    e: new Audio("../L08/assets/L08_task_material_assets_Keyboard_e.mp3"),
    ef: new Audio("../L08/assets/L08_task_material_assets_Keyboard_ef.mp3"),
    f: new Audio("../L08/assets/L08_task_material_assets_Keyboard_f.mp3"),
    g: new Audio("../L08/assets/L08_task_material_assets_Keyboard_g.mp3"),
    gf: new Audio("../L08/assets/L08_task_material_assets_Keyboard_gf.mp3")
};
let list = [
    tones.a,
    tones.af,
    tones.b,
    tones.bf,
    tones.c,
    tones.d,
    tones.df,
    tones.e,
    tones.ef,
    tones.f,
    tones.g,
    tones.gf
];

function playSample(tonesList: HTMLAudioElement[], doShuffle: boolean = false): void {
    let currentIndex: number = 1;
    tonesList[0].play();
    setInterval(() => {
        if (currentIndex > tonesList.length - 1) {
            if (isPlaying) {
                currentIndex = 0;
            }
            else {
                clearInterval();
                return;
            }
        }
        if (!isPlaying) {
            clearInterval();
            return;
        }

        tonesList[currentIndex].play();
        if (!doShuffle) {
            currentIndex += 1;//oder "++" => erhöt index um 1
        }
        else {
            currentIndex = Math.round(Math.random() * (tonesList.length - 1));
        }
        console.log(currentIndex);
    }, 3000);

}

function keyboard(keyboardEvent: KeyboardEvent): void {
    console.log(keyboardEvent.key);
    if (keyboardEvent.key === "1") {
        tones.c.play();
    }
    else if (keyboardEvent.key === "2") {
        tones.d.play();
    }
    else if (keyboardEvent.key === "3") {
        tones.e.play();
    }
    else if (keyboardEvent.key === "4") {
        tones.f.play();
    }
    else if (keyboardEvent.key === "5") {
        tones.g.play();
    }
    else if (keyboardEvent.key === "6") {
        tones.a.play();
    }
    else if (keyboardEvent.key === "7") {
        tones.b.play();
    }
    else if (keyboardEvent.key === "q") {
        tones.df.play();
    }
    else if (keyboardEvent.key === "w") {
        tones.ef.play();
    }
    else if (keyboardEvent.key === "e") {
        tones.gf.play();
    }
    else if (keyboardEvent.key === "r") {
        tones.af.play();
    }
    else if (keyboardEvent.key === "t") {
        tones.bf.play();
    }
    else {
        console.log("Unbekannte Taste");
    }
}





document.querySelector("#taste1").addEventListener("click", () => { playSample([tones.c]); });
document.querySelector("#taste2").addEventListener("click", () => { playSample([tones.d]); });
document.querySelector("#taste3").addEventListener("click", () => { playSample([tones.e]); });
document.querySelector("#taste4").addEventListener("click", () => { playSample([tones.f]); });
document.querySelector("#taste5").addEventListener("click", () => { playSample([tones.g]); });
document.querySelector("#taste6").addEventListener("click", () => { playSample([tones.a]); });
document.querySelector("#taste7").addEventListener("click", () => { playSample([tones.b]); });

document.querySelector("#staste1").addEventListener("click", () => { playSample([tones.df]); });
document.querySelector("#staste2").addEventListener("click", () => { playSample([tones.ef]); });
document.querySelector("#staste3").addEventListener("click", () => { playSample([tones.gf]); });
document.querySelector("#staste4").addEventListener("click", () => { playSample([tones.af]); });
document.querySelector("#staste5").addEventListener("click", () => { playSample([tones.bf]); });

document.querySelector("#play").addEventListener("click", () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
        playSample([tones.c, tones.d, tones.g, tones.f, tones.d, tones.d, tones.c]);
        document.querySelector("#play").classList.remove("fa-play");
        document.querySelector("#play").classList.add("fa-stop");
    }
    else {
        document.querySelector("#play").classList.add("fa-play");
        document.querySelector("#play").classList.remove("fa-stop");
    }
});
document.querySelector("#remix").addEventListener("click", () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
        playSample(list, true);
        document.querySelector("#remix").classList.remove("fa-play");
        document.querySelector("#remix").classList.add("fa-stop");
    }
    else {
        document.querySelector("#remix").classList.add("fa-play");
        document.querySelector("#remix").classList.remove("fa-stop");
    }
});

addEventListener("keypress", (e: KeyboardEvent) => { keyboard(e); });