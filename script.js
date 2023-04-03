var detailsForm = document.querySelector('#destination_details');
detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit() {
    event.preventDefault();
    var destName = event.target.elements["name"].value;
    var destLocation = event.target.elements["location"].value;
    var destPhoto = event.target.elements["photo"].value;
    var destDesc = event.target.elements["description"].value;
    for (var i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
    }
    var destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);
    var wishListContainer = document.getElementById('destinations_container');
    if (wishListContainer.children.length === 0) {
        document.querySelector('title').innerHTML = "My Wish List";
    }
    document.querySelector('#destination_container').appendChild(destCard);
}

function createDestinationCard(name, location, PhotoUrl, description) {
    var card = document.createElement("div");
    card.className = 'card';
    var img = document.createElement('img');
    img.setAttribute('alt', name);
    var constantPhotoUrl = "images/signpost.jpg";
    if (PhotoUrl.length === 0) {
        img.setAttribute('src', constantPhotoUrl);
    } else {
        img.setAttribute('src', PhotoUrl);
    }
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardTitle.appendChild(cardTitle);

    var cardSubTile = document.createElement("h4");
    cardSubTile.innerText = location;
    cardBody.appendChild(cardSubTile);
    if (description.length !== 0) {
        var cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }
    var cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";
    cardDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteBtn);
    card.appendChild(cardBody);
    return card;
}

function removeDestination(event) {
    var card = event.target.parentElement.parentElement;
    card.remove();

}