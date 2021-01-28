var picture = document.querySelector('picture');

function addImages(amount)
{
    for (var i = 0; i <= (amount); ++i)
    {
        var image = document.createElement("img");
        image.setAttribute("src", "../../images/spring/" + i + ".png");
        image.setAttribute("id", i);
        image.setAttribute("class", "column");
        image.setAttribute("onclick", "openGallery(this)");
        document.querySelector("picture").appendChild(image);
    }
}

function next(amount)
{
    var slide = document.getElementsByClassName("slide")[0];
    var idx = Number(slide.getAttribute('id')) + 1;
    if (idx > amount)
        idx = 0;
    slide.src = "../../images/spring/" + idx + ".jpg";
    slide.id = idx;
}

function prev(amount)
{
    var slide = document.getElementsByClassName("slide")[0];
    var idx = Number(slide.getAttribute('id')) - 1;
    if (idx < 0)
        idx = amount;
    slide.src = "../../images/spring/" + idx + ".jpg";
    slide.id = idx;
}

function openGallery(source)
{
    document.getElementById('gallery').style.display = "grid";
    var slide = document.getElementsByClassName("slide")[0];
    slide.id = source.getAttribute('id');
    slide.src = "../../images/spring/" + slide.id + ".jpg";
}

function closeGallery()
{
    document.getElementById('gallery').style.display = "none";
}
