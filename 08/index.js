const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]



for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].pets.length >= 2) {
        console.log(`Eu sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} pets`)
    } else if (usuarios[i].pets.length == 1) {
        console.log(`Eu sou ${usuarios[i].nome} e tenho 1 pet`)
    } else {
        console.log(`Sou ${usuarios[i].nome} e não tenho pets`)
    }
}