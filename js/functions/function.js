import {formSearch, selectMarca, selectYear, selectMinimo, selectMaximo, selectPuertas, selectColor, selectTransmision} from '../helpers/selector.js'
import ui from '../classes/UI.js'
import { autos } from '../db/data.js'


const objBusqueda = {}

export function eventListener(){
    document.addEventListener('DOMContentLoaded', ui.completeOptionYear)
    selectMarca.addEventListener('change',llenarFiltrado)
    selectYear.addEventListener('change',llenarFiltrado)
    selectMinimo.addEventListener('change',llenarFiltrado)
    selectMaximo.addEventListener('change',llenarFiltrado)
    selectPuertas.addEventListener('change',llenarFiltrado)
    selectColor.addEventListener('change',llenarFiltrado)
    selectTransmision.addEventListener('change',llenarFiltrado)
}


function llenarFiltrado(e){{
  
    objBusqueda[e.target.id] =e.target.value

    
    filtrarBusqueda()
}}



function filtrarBusqueda(){
    const resultado = autos.filter(filtrarMarca) .filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarColor).filter(filtrarTransmision) 

    if(resultado.length === 0){
        
        ui.pintarBusquedaVacia()
        return
    }
    ui.pintarHTML(resultado)
}


function filtrarMarca(auto){
    
    const {marca} = objBusqueda
    if(marca){
        return auto.marca === marca
        
    }

    return auto
} 


function filtrarYear(auto){
    const {year} = objBusqueda
    

    if(year){
        return auto.year === Number(year)
    }
    return auto
}


function filtrarMinimo(auto){
    const {minimo} = objBusqueda
    if(minimo){
        return auto.precio >= Number(minimo)
    }

    return auto
}

function filtrarMaximo(auto){
    const {maximo} = objBusqueda
    if(maximo){
        return auto.precio <= Number(maximo)
    }
    return auto
}

function filtrarPuertas(auto){
    const {puertas} = objBusqueda
    if(puertas){
        return auto.puertas === Number(puertas)
    }   
    return auto
}

function filtrarColor(auto){
    const {color} = objBusqueda
    if(color){
        return auto.color=== color
    }
    return auto
}


function filtrarTransmision(auto){
    const {transmision} = objBusqueda
    if(transmision){
        return auto.transmision === transmision
    }

    return auto
}