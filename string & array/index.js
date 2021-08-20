/*------------------
8. An array contains the names (strings) of many English JavaScript related books. If you don't know the name of the JavaScript related book, do a Google search. Then run a loop to see which books have "javascript" in their names. Then put the names of those books in another array. And yes, when you check if you have javascript, you will notice that it is uppercase or lowercase. That means the case will be insensitive.

------------------*/


const books = ['1) A Smarter Way to Learn JavaScript.',
    '2) JavaScript: The Definitive Guide.',
    '3) Head First JavaScript Programming: A Brain-Friendly Guide.',
    '4) Eloquent JavaScript, 3rd Edition.',
    '5) The Principles of Object-Oriented JavaScript.',
    '6) JavaScript: The Good Parts.',
    "7) JavaScript: You don't know JS."
];

const searching = 'js';
const bookName = [];

for(const book of books){
    if(book.toLowerCase().includes(searching.toLowerCase())){
        bookName.push(book)
    }
}
console.log(bookName)




/* -----------------
9.9. Take an array with many numbers. Then sort that array. will be sorted by serial number from small to large. ------------------*/
const numbers = [1,23,33,44,22,5,500,7,43,90,365,286,45,12,100,568];
// const sortedNumbers = numbers.sort()
const sortedNumbers = numbers.sort(function(a,b){
    return a-b;
})
console.log('sortedNumbers = ', sortedNumbers)
