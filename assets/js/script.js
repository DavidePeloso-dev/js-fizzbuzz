const rowDomEl = document.querySelector('.row')

for(let i = 1; i <= 100; i++){
    if(i % 5 == 0 && i % 3 == 0){
        let i = 'FizzBuzz'
        const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-fizzbuzz'>${i}</div></div>`;
        rowDomEl.insertAdjacentHTML('beforeend', colMarkUp)
        console.log(i);

    } else if(i % 3 == 0){
        let i = 'Fizz';
        const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-fizz'>${i}</div></div>`;
        rowDomEl.insertAdjacentHTML('beforeend', colMarkUp)
        console.log(i);
    } else if(i % 5 == 0){
        let i = 'Buzz';
        const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-buzz'>${i}</div></div>`;
        rowDomEl.insertAdjacentHTML('beforeend', colMarkUp)
        console.log(i);
    } else {
        const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-i'>${i}</div></div>`;
        rowDomEl.insertAdjacentHTML('beforeend', colMarkUp)
    };
    

}