const works = [
    { author: "Micheal Jackson", lifetime: "1022-1055", tips: "Human", photos: ["human1.jpg", "human2.jpg", "human3.jpg"] },
    { author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"] },
    { author: "John Herry UY", lifetime: "1894-1928", tips: "Abstract", photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"] },
    { author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"] }
];
for (work of works) {
    var item = document.createElement("div");
    item.className = "item";

    var genre = document.createElement("h4");
    genre.innerText = "Genre : " + work["tips"];
    item.appendChild(genre);

    var box1 = document.createElement("div");
    var title1 = document.createElement("h3");
    title1.innerText = work["author"];
    var title2 = document.createElement("h5");
    title2.setAttribute("style", "margin-top:0px;display:inline;margin-left:1em;font-family:'Oswald', Arial, sans-serif;font-size:12pt")
    title2.innerText = "lifetime:" + work["lifetime"];
    title1.appendChild(title2);
    box1.appendChild(title1);
    box1.className = "inner-box";
    item.appendChild(box1);

    var box2 = document.createElement("div");
    var title3 = document.createElement("h3");
    title3.innerText = "Popular Photos";
    box2.appendChild(title3);
    for (s of work["photos"]) {
        var image = document.createElement("img");
        image.src = s;
        image.className = "photo";
        box2.appendChild(image);
    }
    box2.className = "inner-box";
    item.appendChild(box2);

    var button = document.createElement("button");
    button.innerText = "Visit";
    item.appendChild(button);

    var container = document.getElementsByClassName("flex-container justify")[0];
    container.appendChild(item);
}
