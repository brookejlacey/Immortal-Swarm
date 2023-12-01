console.log('javascript loaded');

let hoursLeft = 5;


const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
];

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
];

console.log('Locations and people loaded:', locations, people);

function drawPeople() {
    locations.forEach(locationEmoji => {
        const filteredPeople = people.filter(person => person.location === locationEmoji);
        const peoplePictures = filteredPeople.map(person => person.picture);
        const locationParagraph = document.getElementById(`citizens-${locationEmoji}`);
        locationParagraph.innerText = peoplePictures.join(' ');
    });
}

function movePeople() {
    people.forEach(person => {
        if (person.picture !== '🦇') {
            person.location = locations[Math.floor(Math.random() * locations.length)];
        }
    });
}

function checkWinCondition() {
    const allBats = people.every(person => person.picture === '🦇');
    if (allBats) {
        alert("Victory! All citizens have been turned into bats.");
    }
}

function attackLocation(locationEmoji) {
    console.log(`Attacked location: ${locationEmoji}`);
    const foundPeople = people.filter(person => person.location === locationEmoji);
    foundPeople.forEach(person => {
        person.picture = '🦇';
    });
    hoursLeft -= 1;
    if (hoursLeft <= 0) {
        alert("The sun has risen. You have perished!");
        console.log('this all works great')

    } else {
        movePeople();
        drawPeople();
        checkWinCondition();
    }
}

function buildTown() {
    const locationsContainer = document.getElementById('locations-container');
    locationsContainer.innerHTML = '';

    locations.forEach(locationEmoji => {
        const attackButton = document.createElement('button');
        attackButton.textContent = `Attack ${locationEmoji}`;
        attackButton.onclick = function () {
            attackLocation(locationEmoji);
        };
        locationsContainer.appendChild(attackButton);

        const citizensParagraph = document.createElement('p');
        citizensParagraph.id = `citizens-${locationEmoji}`;
        locationsContainer.appendChild(citizensParagraph);
    });
}

buildTown();
drawPeople();
