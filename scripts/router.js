
//This files should only be used by /404.html

//Get the URL the user typed
var desiredURL = window.location.pathname;

//The second item in each array is what the user could have typed
//The first item in each array is a known good URL to forward them to
//The comment after some of these shows other words it would also catch
var dictionary = [
    ["/animation.html", "ani"], //anim, anims, animations
    ["/animation.html", "gif"], //gifs
    ["/animation.html", "apng"],
    ["/example.html", "ex"], //exam, example, examples
    ["/example.html", "demo"], //demos, demonstration, demonstrations
    ["/responisve.html", "res"], //resp, response, responsive, responsive-design
    ["/responsive.html", "rwd"],
    ["/index.html", "index"],
    ["/index.html", "home"],
    ["/index.html", "default"]
];

function forward(arr) {
    //RegExp to match any URL (after the domain) with "gifs" in it
    var regex = new RegExp ( "^(?:\/)(?:[^\ ]*)(?:" + arr[1] + ")(?:.*)$", "gm" );

    //If the typed URL has "gif" anywhere in it
    if (regex.test(desiredURL)) {
        //go to /animation.html
        window.location.replace(arr[0]);
        return
    }
}

//Cycle through the dictionary array
for (var i = 0; i < dictionary.length; i++) {
    //test each dictionary item against typed URL
    forward(dictionary[i]);
}
