var images = ["https://m.media-amazon.com/images/I/91vbbHMuEdL.jpg","IMG-3612.jpg","IMG-3159.jpg","IMG-2931.jpg"];
var names = ["Family Book, Sridhar Kollipara (my dad)", "Szilvia Szarvas (my mom)", "Jaabili Kollipara (me!!)"]
var i = 0;
function update() 
{
    i++
    var family_members_in_array = 3
    if(i > family_members_in_array)
    {
        i = 0;
    }
}
var updatedImage = [images[i]];
var updatedName = [names[i]];

document.getElementById("family_img").src = updatedImage;
document.getElementById("family_name").innerHTML = updatedName;