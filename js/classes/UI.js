import {selectYear, results} from '../helpers/selector.js'
class UI{
    constructor(){}

    completeOptionYear(){
        const yearActually= new Date().getFullYear()
        const yearMin = yearActually - 15
        for(let i=yearActually ; i > yearMin ; i--){
            const option = document.createElement('option')
            option.value = i
            option.textContent = i
            selectYear.appendChild(option)
        }
    }
    pintarHTML(resultado) {

        this.limpirarHTML()
        console.log(resultado)
        resultado.forEach(r => {

            const {marca,modelo,year, precio, puertas, color, transmision} = r
                   
            const  p = document.createElement('p')
            p.textContent += 
                `${marca} - ${modelo} -${year} - $${precio} - ${color} - Puertas : ${puertas} - Transmision : ${transmision}`
            results.appendChild(p)
        })
    }

    pintarBusquedaVacia(){
        this.limpirarHTML()
        const p = document.createElement('p')
        p.textContent = 'No hay resultados encontrados!'
        results.appendChild(p)
    }
    limpirarHTML() {
        while(results.firstChild){
            results.removeChild(results.firstChild)
        }
    }
}

const ui = new UI();

export default ui;