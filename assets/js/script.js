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

const rowElAp = document.querySelector('.ap-row')
for(let i = 101; i <= 200; i++){
    if(i % 5 == 0 && i % 3 == 0){
        let i = 'FizzBuzz'
        //const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-fizzbuzz'>${i}</div></div>`;
        const colEL = document.createElement('div');
        const boxEl = document.createElement('div');
        colEL.classList = 'col col-lg-2 col-xl py-3';
        boxEl.classList = 'box bg-fizzbuzz';
        boxEl.innerHTML = i;
        colEL.append(boxEl);
        console.log(boxEl);
        rowElAp.append(colEL);
        console.log(i);

    } else if(i % 3 == 0){
        let i = 'Fizz';
        //const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-fizz'>${i}</div></div>`;
        const colEL = document.createElement('div');
        const boxEl = document.createElement('div');
        colEL.classList = 'col col-lg-2 col-xl py-3';
        boxEl.classList = 'box bg-fizz';
        boxEl.innerHTML = i;
        colEL.append(boxEl);
        console.log(boxEl);
        rowElAp.append(colEL);
        console.log(i);

    } else if(i % 5 == 0){
        let i = 'Buzz';
        //const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-buzz'>${i}</div></div>`;
        const colEL = document.createElement('div');
        const boxEl = document.createElement('div');
        colEL.classList = 'col col-lg-2 col-xl py-3';
        boxEl.classList = 'box bg-buzz';
        boxEl.innerHTML = i;
        colEL.append(boxEl);
        console.log(boxEl);
        rowElAp.append(colEL);
        console.log(i);

    } else {
        //const colMarkUp = `<div class='col col-lg-2 col-xl py-3'><div class='box bg-i'>${i}</div></div>`;
        const colEL = document.createElement('div');
        const boxEl = document.createElement('div');
        colEL.classList = 'col col-lg-2 col-xl py-3';
        boxEl.classList = 'box bg-i';
        boxEl.innerHTML = i;
        colEL.append(boxEl);
        console.log(boxEl);
        rowElAp.append(colEL);
        console.log(i);
    };
    

}