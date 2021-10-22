let operators = ["+","-","%","/","*"]
let xs = [];
let opers = [];
let ys = [];
let results = [];
let ask = true;

function loadCalc() {  
    (async () => {
        loadTable();
        await sleep(0);
        while(ask) {
            await getInputs();
            let opTable = document.getElementById("opTable");
            let row = opTable.insertRow(1);
            let xCell = row.insertCell(0);
            let opCell = row.insertCell(1);
            let yCell = row.insertCell(2);
            let resultCell = row.insertCell(3);
            let x = xs.at(-1);
            let op = opers.at(-1)
            let y = ys.at(-1);
            xCell.innerHTML = x;
            opCell.innerHTML = op;
            opCell.classList.add("ops");
            yCell.innerHTML = y;
            if(isNaN(x) || isNaN(y)) {
                resultCell.innerHTML = "wrong input number";
            }
            else {
                o = operators.lastIndexOf(opers.at(-1));
                if (o < 0){
                    resultCell.innerHTML = "computation error";
                }
                else {
                    let result;
                    switch(o) {
                        case 0:
                            result = Number(x) + Number(y);
                            break;
                        case 1:                            
                            result = Number(x) - Number(y);
                            break;
                        case 2:
                            result = Number(x) % Number(y);
                            break;
                        case 3:
                            result = Number(x) / Number(y);
                            break;
                        case 4:
                            result = Number(x) * Number(y);
                            break;
                        default:
                            break;
                    }
                    results.push(result);
                    resultCell.innerHTML = result;
                }
            }
            await sleep(0);
            await getConfirm();
            await sleep(0);
        }; 
        let min = Math.min(...results);
        let max = Math.max(...results);
        let sumAll = (a, b) => a + b;        
        let total = results.reduce(sumAll);
        let avg = total/results.length;
        document.body.innerHTML += '<table id="statsTable"><tr><th>Min</th><th>Max</th><th>Average</th><th class="results">Total</th></tr>' + 
        '<tr><td>'+min+'</td><td>'+max+'</td><td>'+avg+'</td><td>'+total+'</td></tr>'+'</table>';
        console.log(results);
    })();
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

function getInputs() {
    return new Promise(resolve => {
        xs.push(prompt("Value for x"));
        opers.push(prompt("operator"));
        ys.push(prompt("Value for y"));
        resolve();
    });
}

function getConfirm() {
    return new Promise(resolve => {
        ask = confirm("Continue?");
        resolve();
    });
}

function loadTable() {
    return new Promise(resolve => {
        document.body.innerHTML = '<table id="opTable"><tr><th>x</th><th>op</th><th>y</th><th class="results">result</th></tr></table>';
        resolve();
    });
}

function updateValues(values) {
    document.body.innerHTML += values + "\n"; 
}

function prompter(message) {
    return window.prompt(message);
}