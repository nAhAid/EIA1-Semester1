let sound = {
    a: new Audio('assets/L08_task_material_assets_Keyboard_a.mp3'),
    af: new Audio('assets/L08_task_material_assets_Keyboard_af.mp3'),
    b: new Audio('assets/L08_task_material_assets_Keyboard_b.mp3'),
    bf: new Audio('assets/L08_task_material_assets_Keyboard_bf.mp3'),
    c: new Audio('assets/L08_task_material_assets_Keyboard_c.mp3'),
    d: new Audio('assets/L08_task_material_assets_Keyboard_d.mp3'),
    df: new Audio('assets/L08_task_material_assets_Keyboard_df.mp3'),
    e: new Audio('assets/L08_task_material_assets_Keyboard_e.mp3'),
    ef: new Audio('assets/L08_task_material_assets_Keyboard_ef.mp3'),
    f: new Audio('assets/L08_task_material_assets_Keyboard_f.mp3'),
    g: new Audio('assets/L08_task_material_assets_Keyboard_g.mp3'),
    gf: new Audio('assets/L08_task_material_assets_Keyboard_gf.mp3'),
}

function playSample(sound_list: HTMLAudioElement[]) {
    let currentindex = 1;
    sound_list[0].play();
    setInterval(() => {
        if (currentindex > sound_list.length - 1) {
            clearInterval();
            return
        }
        sound_list[currentindex].play();
        currentindex += 1 //oder "++" => erhöt index um 1
        console.log(currentindex)
    }, 3000)

}


document.querySelector('#taste1').addEventListener('click', () => { playSample([sound.c]) });
document.querySelector('#taste2').addEventListener('click', () => { playSample([sound.d]) });
document.querySelector('#taste3').addEventListener('click', () => { playSample([sound.e]) });
document.querySelector('#taste4').addEventListener('click', () => { playSample([sound.f]) });
document.querySelector('#taste5').addEventListener('click', () => { playSample([sound.g]) });
document.querySelector('#taste6').addEventListener('click', () => { playSample([sound.a]) });
document.querySelector('#taste7').addEventListener('click', () => { playSample([sound.b]) });

document.querySelector('#staste1').addEventListener('click', () => { playSample([sound.df]) });
document.querySelector('#staste2').addEventListener('click', () => { playSample([sound.ef]) });
document.querySelector('#staste3').addEventListener('click', () => { playSample([sound.gf]) });
document.querySelector('#staste4').addEventListener('click', () => { playSample([sound.af]) });
document.querySelector('#staste5').addEventListener('click', () => { playSample([sound.bf]) });

document.querySelector('#play').addEventListener('click', () => {
    playSample([sound.c, sound.d, sound.e, sound.f, sound.g, sound.g, sound.a, sound.a, sound.a, sound.a, sound.g, sound.a, sound.a, sound.a, sound.a, sound.g, sound.f, sound.f, sound.f, sound.f, sound.e, sound.e, sound.d, sound.d, sound.d, sound.d, sound.c])
});

document.querySelector('#staste1').addEventListener('keydown.1', () => { playSample([sound.c]) });
document.getElementById('#taste1').addEventListener('keypress', (keypress: KeyboardEvent) => { playSample([sound.c]) });