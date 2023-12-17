const getInfo = async ()=> {
    let aprobados = document.querySelector(".num-aprobados");
    let reprobados = document.querySelector(".num-reprobados");
    try {
        resultado = await axios("informacion.txt"); //await no trabaja con .then y catch, se tiene que trabajar con try y catch
        // resultado = resultado.data;
        // console.log(resultado);
        aprobados.innerHTML = resultado.data.aprobados;
        reprobados.innerHTML = resultado.data.reprobados;
    } catch(e) {
        // console.log(e);
        aprobados.innerHTML = "La API falló";
        reprobados.innerHTML = "La API falló";
    }
}

document.getElementById("getInfo").addEventListener("click", getInfo);