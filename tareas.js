var  tareas = []

function agregarTare(desc) {
    const nuevaTarea = {
        "id":tareas.length+1,
        "desc":desc,
        "conpletado":false
    }
    tareas.push(nuevaTarea)
    console.log("tarea agregada")
}

function vertarea(id) {
    for (let index = 0; index < tareas.length; index++) {
        if (id == tareas[index].id) {
        const element = tareas[index];
        console.log(element);
        }
    }
}
function conpletartarea(id) {
    for (let index = 0; index < tareas.length; index++) {
        if (id == tareas[index].id) {
            tareas[index].conpletado = true 
        }
    }
    console.log("tarea completada"); 
}
function eliminartarea(id) {
    let indice = tareas.findIndex(obj => obj.id === id)
    tareas.splice(indice , 1)
}
while (true) {
    console.log("Opciones");
    console.log("1- Agregar tarea");
    console.log("2- ver tareas");
    console.log("3- ver tarea");
    console.log("4- conpletar tarea");
    console.log("5- eliminar tarea");
    const x = prompt("indique opcion: ");
    if (x == "1") {
        const desc = prompt(" Indique descrepcion de la tarea: ")
        agregarTare(desc)
    }
    if (x == "2") {
        console.log(tareas
        )
    }
    if (x == "3") {
        const id = prompt("cual es la tarea que busca: ")
        vertarea(id)
    }
    if (x == "4") {
        const id = prompt("cual es la tarea que busca completar: ")
        conpletartarea(id)
    }
    if (x == "5") {
        const id = prompt("cual es la tarea que busca eliminar: ")
        eliminartarea(id)
    }
}