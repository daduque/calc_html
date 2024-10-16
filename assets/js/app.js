const results = document.getElementById('results');
const calcForm = document.getElementById('calcForm');

calcForm.addEventListener('submit', event =>{
    event.preventDefault();
    let num1 = parseInt(event.target.num1.value);
    let num2 = Number(event.target.num2.value);

    const operacion = event.submitter.id

    let resultado = 0;
console.log(operacion);
    switch(operacion){
        case 'add':
            resultado = num1 + num2;
            break;
        case 'res':
            resultado = num1 - num2;    
           break;   
    }
    results.innerHTML = `El resultado de ${operacion} es 
    <span style="font-weight:bold; font-size:2rem">
    ${resultado}
    </span>`;
   
} )