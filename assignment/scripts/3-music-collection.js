console.log('***** Music Collection *****')


// let collection = [];

// function addToCollection (title, artist, yearPublished){
//     const album0 = {
//         title: 'Dreamland',
//         artist: 'Glass Animals',
//         yearPublished: '2020'
//     }
//     collection.push(album0);
//     return album0; 
// };
// console.log(addToCollection(collection));



let collection = [];

function addToCollection (title, artist, yearPublished){
    const album0 = {
        title,
        artist,
        yearPublished,
    };
    collection.push(album0);
    return album0; 
};
console.log(addToCollection('Dreamland', 'Glass Animals', '2020'));
console.log(addToCollection('Dreamland', 'Glass Animals', '2020'));
console.log(addToCollection('Dreamland', 'Glass Animals', '2020'));
console.log(addToCollection('Dreamland', 'Glass Animals', '2020'));
console.log(addToCollection('Dreamland', 'Glass Animals', '2020'));
console.log(addToCollection('Dreamland', 'Glass Animals', '2020'));
console.log(addToCollection('Dreamland', 'Glass Animals', '2020'));
console.log(collection);


function showCollection (albums){
    console.log(albums.length);
    for (let i of albums){
        console.log(i);
    }
}
showCollection(collection);


// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

// title: title,
// artist: artist,
// yearPublished: yearPublished

   // const album1 = {
    //     title: 'God Loves Ugly',
    //     artist: 'Atmosphere',
    //     yearPublished: '2002'
    // }
    // const album2 = {
    //     title: 'How to: Friend, Love, Freefall',
    //     artist: 'Rainbow Kitten Surprise',
    //     yearPublished: '2018'
    // }
    // const album3 = {
    //     title: 'Good News for People who Love Bad News',
    //     artist: 'Modest Mouse',
    //     yearPublished: '2004'
    // }
    // const album4 = {
    //     title: 'Bayani Redux',
    //     artist: 'Blue Scholars',
    //     yearPublished: '2007'   
    // }
    // const album5 = {
    //     title: 'Can\'t Wake Up',
    //     artist: 'Shakey Graves',
    //     yearPublished: '2018'
    // }
    // const album6 = {
    //     title: 'House of the Holy',
    //     artist: "Led Zeppelin",
    //     yearPublished: '1973'
    // }
