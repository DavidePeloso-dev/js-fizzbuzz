const rowDomEl = document.querySelector('.row')

for(let i = 1; i <= 100; i++){
    if(i % 5 == 0 && i % 3 == 0){
        let i = 'FizzBuzz'
        const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-danger bg-gradient'>${i}</div></div>`;
        rowDomEl.insertAdjacentHTML('beforeend', colMarkUp)
        console.log(i);

    } else if(i % 3 == 0){
        let i = 'Fizz';
        const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-success bg-gradient'>${i}</div></div>`;
        rowDomEl.insertAdjacentHTML('beforeend', colMarkUp)
        console.log(i);
    } else if(i % 5 == 0){
        let i = 'Buzz';
        const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-warning bg-gradient'>${i}</div></div>`;
        rowDomEl.insertAdjacentHTML('beforeend', colMarkUp)
        console.log(i);
    } else {
        const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-primary bg-gradient'>${i}</div></div>`;
        rowDomEl.insertAdjacentHTML('beforeend', colMarkUp)
    };
    

}