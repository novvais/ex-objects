const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = [

]

const adultos = [

]

for (let usuario = 0; usuario < usuarios.length; usuario++) {
    if (usuarios[usuario].idade >= 18) {
        adultos.push(usuarios[usuario])
    } else if (usuarios[usuario].idade < 18) {
        jovens.push(usuarios[usuario])
    }
}

console.log(adultos, "\n", jovens)
