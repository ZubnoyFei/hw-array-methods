const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
)}

function showListOfFilms(arr) {
return arr.reduce((acc, curr)=> `${typeof(acc)==='object'? acc.name : acc}, ${curr.name}`)
}

showListOfFilms(films);


function setFilmsIds(films) {
    return arr.map((film,i)=>{
    film.id=i;
    return film;
});
}

const transformedArray = setFilmsIds(films);

function checkFilms(arr) {
if(transformedArray.id=== true) {
return arr.every(film => film.id || film.id === 0)
}
}

checkFilms(transformedArray);



const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
return data.filter(item=> item.amount>0).reduce((acc, curr)=> acc + curr.amount, 0 )

};

const getTotalIncomeAmount = (data) => {
return data.some(item=> item.amount<0)? data.reduce((acc,curr) => acc+curr.amount,0): getPositiveIncomeAmount(data);
};

getTotalIncomeAmount(funds);