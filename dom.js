let playerDetails = [
    {
        playerPhoto: "https://www.hindustantimes.com/ht-img/img/2025/05/13/550x309/CRICKET-AUS-IND-48_1734624763453_1747135341749.jpg",
        playerName: 'NAME : Virat',
        playerAge: 'AGE : 36',
        Country: 'COUNTRY:India'
    },
    {
        playerPhoto: "https://www.hindustantimes.com/ht-img/img/2025/05/13/550x309/CRICKET-AUS-IND-48_1734624763453_1747135341749.jpg",
        playerName: 'NAME : Virat',
        playerAge: 'AGE : 36',
        Country: 'COUNTRY:India'
    },
    {
        playerPhoto: "https://www.hindustantimes.com/ht-img/img/2025/05/13/550x309/CRICKET-AUS-IND-48_1734624763453_1747135341749.jpg",
        playerName: 'NAME : Virat',
        playerAge: 'AGE : 36',
        Country: 'COUNTRY:India'
    }
]
console.log(playerDetails);


// 1.String Approach
// let player = "<section>";
// for (let i = 0; i < playerDetails.length; i++) {
//     player += '<figure>';
//     player += '<img src="' + playerDetails[i].playerPhoto + '" alt="cricket" />';
//     player += '<figcaption>' + playerDetails[i].playerName + '</figcaption>';
//     player += '<figcaption>' + playerDetails[i].playerAge + '</figcaption>';
//     player += '<figcaption>' + playerDetails[i].Country + '</figcaption>';
//     player += '</figure>';
// }
// player += "</section>";

// document.write(player);

// // 2.back-ticks
// let player = "<section>";
// for (let i = 0; i < playerDetails.length; i++){
//     player += `
//     <figure>
//     <img src = " ${playerDetails[i].playerPhoto}"alt="cricket"/>
//     <figcaption>${playerDetails[i].playerName}</figcaption>
//     <figcaption>${playerDetails[i].playerAge}</figcaption>
//     <figcaption>${playerDetails[i].Country}</figcaption>
//     </figure>
//      `
// }
// document.write(player);


// 3.DOM - Methods / Manipulation
let parentElement = document.createElement('section')
let figureElement = document.createElement('figure')

let imgElement = document.createElement('img')
imgElement.setAttribute('src', 'https://www.hindustantimes.com/ht-img/img/2025/05/13/550x309/CRICKET-AUS-IND-48_1734624763453_1747135341749.jpg')
imgElement.setAttribute('alt','Cricket')

let figureElement1 = document.createElement('figcaption')
 let figureElement1Text = document.createTextNode("playerName: 'NAME : Virat',")
 figureElement1.appendChild(figureElement1Text)

let figureElement2 = document.createElement('figcaption')
 let figureElement2Text = document.createTextNode( "playerAge: 'AGE : 36'")
 figureElement2.appendChild(figureElement2Text)

let figureElement3 = document.createElement('figcaption')
 let figureElement3Text = document.createTextNode("Country: 'COUNTRY:India'")
figureElement3.appendChild(figureElement3Text)


//  adding figcaption to figure
figureElement.appendChild(imgElement);
figureElement.appendChild(figureElement1);
figureElement.appendChild(figureElement2);
figureElement.appendChild(figureElement3);

// adding figure into section
parentElement.appendChild(figureElement)

console.log(parentElement);


document.body.appendChild(parentElement)
