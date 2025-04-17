var persona = {"nombre" : "sebastian","edad" : 26, "notas" : [{"asignatura" : "metodologia", "nota" : 7},{"asignatura" : "base de datos" ,"nota": 7},{"asignatura" : "sistema de informacion", "nota" : 4}]};

console.log("su nombre es:",persona.nombre);
console.log("su edad es:",persona.edad);
for (let index = 0; index < persona.notas.length; index++) {
    if (persona.notas[index].asignatura == "base de datos") {
        console.log(persona.notas[index].nota);
    }
    
}
