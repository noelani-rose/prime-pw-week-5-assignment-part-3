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
        yearPublished
    };
    collection.push(album0);
    return album0; 
};
console.log(addToCollection('Dreamland', 'Glass Animals', '2020'));
console.log(addToCollection('God Loves Ugly', 'Atmosphere', '2002'));
console.log(addToCollection('How to: Friend, Love, Freefall', 'RKS', '2018'));
console.log(addToCollection('Good News for People who Love Bad News', 'Modest Mouse', '2004'));
console.log(addToCollection('Bayani Redux', 'Blue Scholars', '2007'));
console.log(addToCollection('Can\'t Wake Up', 'Shakey Graves', '2018'));
console.log(addToCollection('House of the Holy', 'Led Zeppelin', '1973'));
console.log(collection);


function showCollection (albums){
    console.log(albums.length);
    for (let i of albums){
        console.log(i['title'] + ' by ' + i['artist'] + 
        ' published in ' + i['yearPublished']);
    }
}
showCollection(collection);


function findByArtist (artist){
    artistArray = [];
    for (let x = 0; x < collection.length; x++) {
         if (collection[x].artist === artist){
            artistArray.push(artist);
        }
    }
        return artistArray;
     }
console.log(findByArtist('Atmosphere'));
console.log(findByArtist('Aesop Rock'));


// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects 
    // with a matching artist to the array.
//   - Return the array with the matching results. If no results 
    //are found, return an empty array.

// title: title,
// artist: artist,
// yearPublished: yearPublished
 