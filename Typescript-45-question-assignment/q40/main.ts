/*Question 40: Album: Create objects for music albums.
Explain & TIP: Use functions to return objects. 
This exercise practices creating and manipulating objects, and introducing optional function parameters.*/

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist , title} ;
        if (tracks) {
            album['tracks'] = tracks;
        }
        return album;
    }
console.log(make_album("Artisit 1", "album title 1"));
console.log(make_album("Artisit 2", "album title 2"));
console.log(make_album("Artisit 3", "album title 3", 10));