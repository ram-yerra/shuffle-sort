let numbers = [
    {num: 1, color: '#6F98A8'}, {num: 2, color: '#2B8EAD'}, 
    {num: 3, color: '#2F454E'}, {num: 4, color: '#2B8EAD'}, 
    {num: 5, color: '#2F454E'}, {num: 6, color: '#BFBFBF'}, 
    {num: 7, color: '#BFBFBF'}, {num: 8, color: '#6F98A8'}, 
    {num: 9, color: '#2F454E'}];

appendNumbers(numbers);

function shuffle() {
    let i = numbers.length;
    let nums = [...numbers];
    let j;
    while(--i > 0){
        j= Math.floor(Math.random() * (i+1));
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    appendNumbers(nums);
};
function sort() {
    appendNumbers([...numbers.sort((a, b) => a.num - b.num)]);
};

function appendNumbers(numbers) {
    document.getElementById('app').innerHTML = '';
    let numbersReturnString = '';
    numbers.forEach((number, index) => {
        numbersReturnString += `<div class="card card-${index}" style="background:${number.color};border-left: 10px solid ${number.color};">
            ${number.num}
        </div>`;
    });
    const numbersStr =  `
        <h3> Shuffle & Sort</h3>
        <div class="shuffle-sort-container">
            <div class="numbers-container">
                ${numbersReturnString}
            </div>
            <div class="buttons-container">
                <button id="shuffle" class="shuffle" onClick={shuffle}>Shuffle</button>
                <button id="sort" class="sort" onClick={sort}>Sort</button>
            </div>
        </div>            
        <p>Shuffle & Sort by Ram Kapil Yerra</p>
    `;
    document.getElementById('app').innerHTML = numbersStr;
    document.getElementById('shuffle').addEventListener('click', shuffle);
    document.getElementById('sort').addEventListener('click', sort);

};


