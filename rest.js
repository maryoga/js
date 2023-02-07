/*
    Parametros Rest ó Agrupados
    La sig. es la forma convencional de def. parametros.
    function hardware(p1, p2, p3)
    La forma de de def. parametros agrupadas esta en la siguiente función hardware(...componets)
*/

function hardware(...components) {
    // console.log(components);
    for (let component of components){
        console.log(component);
    }
}


hardware("RAM","HDD", "Mother Board");