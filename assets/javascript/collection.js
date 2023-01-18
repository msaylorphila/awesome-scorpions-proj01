// GET https://api.petfinder.com/v2/animals/{id}

let doggyDash = document.querySelector('.doggy-dash');
let dogInfo = document.querySelector('.dog-info')
function grabCardsFromStorage() {
    doggyDash.replaceChildren()
    let dogCollection = JSON.parse(localStorage.getItem("dogCollectionArr"));
    console.log(dogCollection)
    for (var i = 0; i < dogCollection.length; i++) {
        let currentDog = dogCollection[i];
        console.log(currentDog)
        makeDogCard(currentDog);
    }
}
let dogCollection = JSON.parse(localStorage.getItem("dogCollectionArr"));
function makeDogCard(currentDog) {
    console.log(currentDog)
    let dogCardBorder = document.createElement('div');
    let cardHeader = document.createElement('div');
    let name = document.createElement('span');
    let age = document.createElement('span');
    let breed = document.createElement('span');
    let photo = document.createElement('img');
    let dogAttr = document.createElement('div');
    let size = document.createElement('span');
    let houseTrained = document.createElement('span');
    let dogStats = document.createElement('div');
    let dogCard = document.createElement('div');
    let description = document.createElement('div');
    let protectiveness = document.createElement('span');
    let playfulness = document.createElement('span');
    let trainability = document.createElement('span');
    let energy = document.createElement('span');
    let powerLevel = document.createElement('div');
    let bark = document.createElement('span');
    let gender = document.createElement('span');
    dogCard.setAttribute('data-id', currentDog.ID);
    bark.setAttribute('class', "item evil");
    powerLevel.setAttribute('class', 'power-level');
    dogCard.setAttribute('class', "card");
    dogCardBorder.setAttribute('class', 'card-border');
    cardHeader.setAttribute('class', 'card-header');
    name.setAttribute('class', 'name');
    gender.setAttribute('class', 'gender')
    age.setAttribute('class', 'age');
    breed.setAttribute('class', 'breed');
    photo.setAttribute('src', currentDog.photo);
    photo.onerror = function () {
        photo.setAttribute('src', "./assets.images/default-dog.png")
    }
    photo.setAttribute('alt', "photo of Doggo")
    dogAttr.setAttribute('class', 'dog-attributes');
    size.setAttribute('class', 'size');
    dogStats.setAttribute('class', 'dog-stats');
    houseTrained.setAttribute('class', 'house-trained');
    description.setAttribute('class', 'description');
    protectiveness.setAttribute('class', 'item');
    playfulness.setAttribute('class', 'item');
    trainability.setAttribute('class', 'item');
    energy.setAttribute('class', 'item')
    energy.textContent = "Energy:";
    protectiveness.textContent = "Protectiveness:";
    playfulness.textContent = "Playfulness:";
    trainability.textContent = "Trainability:";
    bark.textContent = "barking";
    name.textContent = currentDog.name;
    age.textContent = currentDog.age;
    breed.textContent = currentDog.breed;
    size.textContent = currentDog.size;
    gender.textContent = currentDog.sex;
    if (currentDog.houseTrained === true) {
        let toiletIcon = document.createElement('i');
        toiletIcon.setAttribute('class', 'fa-solid fa-toilet');
        houseTrained.appendChild(toiletIcon);
    } else {
        let poopIcon = document.createElement('i');
        poopIcon.setAttribute('class', ' fa-solid fa-poop');
        houseTrained.appendChild(poopIcon);
    }
    dogCard.appendChild(dogCardBorder);
    dogCardBorder.appendChild(cardHeader);
    cardHeader.appendChild(name);
    cardHeader.appendChild(age);
    cardHeader.appendChild(breed);
    cardHeader.appendChild(gender);
    dogCardBorder.appendChild(photo);
    dogCardBorder.appendChild(dogAttr);
    dogAttr.appendChild(size);
    dogAttr.appendChild(houseTrained);
    dogCardBorder.appendChild(dogStats);
    dogStats.appendChild(description);
    description.appendChild(energy);
    description.appendChild(trainability);
    description.appendChild(playfulness);
    description.appendChild(protectiveness);
    description.appendChild(bark);
    dogStats.appendChild(powerLevel);
    console.log(currentDog.energy)
    energyIcon(currentDog.energy);
    trainIcon(currentDog.trainability);
    playIcon(currentDog.playfulness);
    protectIcon(currentDog.protectiveness);
    barkIcon(currentDog.barking);

    function energyIcon(num) {
        if (num == 0) {
            let createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'item2');
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', 'fa-solid fa-bolt-lightning');
            createSpan.appendChild(createIcon);
            powerLevel.appendChild(createSpan);
        }
        console.log('energyIcon called')
        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', 'fa-solid fa-bolt-lightning');
            createSpan.appendChild(createIcon);
            powerLevel.appendChild(createSpan);

        }
    }
    function trainIcon(num) {
        if (num == 0) {
            let createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'item2');
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-poop');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }

        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-poop');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    function playIcon(num) {
        if (num == 0) {
            let createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'item2');
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-face-grin-tears');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-face-grin-tears');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    function protectIcon(num) {
        if (num == 0) {
            let createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'item2');
            let createIcon = document.createElement('i')
            createIcon.setAttribute('class', 'fa-solid fa-shield');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }

        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i')
            createIcon.setAttribute('class', 'fa-solid fa-shield');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    function barkIcon(num) {
        if (num == 0) {
            let createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'item2');

            createIcon.setAttribute('class', ' fa-solid fa-poop');
            let createIcon = document.createElement('i');
            createSpan.appendChild(createIcon);
            powerLevel.appendChild(createSpan);
        }

        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-poop');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
     function dogInfoDisplay(event) {
        dogInfo.replaceChildren()

        dogID = dogCard.getAttribute('data-id')
        console.log(allDogsGoToVar)
        for (var i = 0; i < allDogsGoToVar.animals.length; i++) {
            if (dogID == allDogsGoToVar.animals[i].id) {
                let ourDog = allDogsGoToVar.animals[i];
                console.log(ourDog)
                console.log(currentDog)
                let name = document.createElement('span');
                let photo = document.createElement('img');
                let sex = document.createElement('span');
                let primaryBreed = document.createElement('span')
                let heightRange = document.createElement('span')
                let weightRange = document.createElement('span')
                let description = document.createElement('span')
                let status = document.createElement('span')
                let contactEmail = document.createElement('a')
                let phoneNumber = document.createElement('a')
                let emailIcon = document.createElement('img')
                let phoneIcon = document.createElement('img')
                let saveBtn = document.createElement('button')
                saveBtn.setAttribute('id', 'collect')
                phoneNumber.setAttribute('href', 'tel: +1' + ourDog.contact.phone)
                contactEmail.setAttribute('href', 'mailto:' + ourDog.contact.email)
                phoneIcon.setAttribute('src', './assets/images/Phone-Icon-PNG.png')
                phoneIcon.setAttribute('class', 'phoneIcon')
                emailIcon.setAttribute('src', './assets/images/mail.png')
                emailIcon.setAttribute('class', 'emailIcon')
                saveBtn.textContent = "add Dog to the pack"
                status.textContent = ourDog.status
                description.textContent = ourDog.description
                primaryBreed.textContent = ourDog.breeds.primary
                heightRange.textContent = currentDog.minHeightFemale + "lbs - " + currentDog.maxHeightMale + "lbs"
                weightRange.textContent = currentDog.minWeightFemale + "lbs - " + currentDog.maxWeightMale + "lbs"

                sex.textContent = ourDog.gender
                photo.setAttribute('src', currentDog.photo);

                name.textContent = ourDog.name
                dogInfo.appendChild(name)
                dogInfo.appendChild(photo)
                dogInfo.appendChild(sex)
                dogInfo.appendChild(primaryBreed)
                dogInfo.appendChild(heightRange)
                dogInfo.appendChild(weightRange)
                dogInfo.appendChild(description)
                dogInfo.appendChild(status)
                dogInfo.appendChild(contactEmail)
                contactEmail.appendChild(emailIcon)
                dogInfo.appendChild(phoneNumber)
                phoneNumber.appendChild(phoneIcon)
                dogInfo.appendChild(saveBtn)
                let pressedBtn = document.getElementById('collect')
                pressedBtn.addEventListener('click', collectCurrentDog(currentDog))


            }
        }
    }
    // function dogInfoDisplay(event) {
    //     dogInfo.replaceChildren()

    //     dogID = dogCard.getAttribute('data-id')
    //     console.log(allDogsGoToVar)
    //     for (var i = 0; i < dogCollection.length; i++) {
    //         if (dogID == dogCollection[i].id) {
    //             let ourDog = dogCollection[i];
    //             console.log(ourDog)
    //             console.log(currentDog)
    //             let name = document.createElement('span');
    //             let photo = document.createElement('img');
    //             let sex = document.createElement('span');
    //             let primaryBreed = document.createElement('span')
    //             let heightRange = document.createElement('span')
    //             let weightRange = document.createElement('span')
    //             let description = document.createElement('span')
    //             let status = document.createElement('span')
    //             let contactEmail = document.createElement('a')
    //             let phoneNumber = document.createElement('a')
    //             let emailIcon = document.createElement('img')
    //             let phoneIcon = document.createElement('img')
    //             let saveBtn = document.createElement('button')
    //             saveBtn.setAttribute('id', 'collect')
    //             phoneNumber.setAttribute('href', 'tel: +1' + ourDog.contact.phone)
    //             contactEmail.setAttribute('href', 'mailto:' + ourDog.contact.email)
    //             phoneIcon.setAttribute('src', './assets/images/Phone-Icon-PNG.png')
    //             emailIcon.setAttribute('src', './assets/images/mail.png')
    //             saveBtn.textContent = "add Dog to the pack"
    //             status.textContent = ourDog.status
    //             description.textContent = ourDog.description
    //             primaryBreed.textContent = ourDog.breeds.primary
    //             heightRange.textContent = currentDog.minHeightFemale + "lbs - " + currentDog.maxHeightMale + "lbs"
    //             weightRange.textContent = currentDog.minWeightFemale + "lbs - " + currentDog.maxWeightMale + "lbs"

    //             sex.textContent = ourDog.gender
    //             photo.setAttribute('src', currentDog.photo);

    //             name.textContent = ourDog.name
    //             dogInfo.appendChild(name)
    //             dogInfo.appendChild(photo)
    //             dogInfo.appendChild(sex)
    //             dogInfo.appendChild(primaryBreed)
    //             dogInfo.appendChild(heightRange)
    //             dogInfo.appendChild(weightRange)
    //             dogInfo.appendChild(description)
    //             dogInfo.appendChild(status)
    //             dogInfo.appendChild(contactEmail)
    //             contactEmail.appendChild(emailIcon)
    //             dogInfo.appendChild(phoneNumber)
    //             phoneNumber.appendChild(phoneIcon)
    //         }
    //     }
    // }
    doggyDash.appendChild(dogCard);

    dogCard.addEventListener('click', dogInfoDisplay)
}
collectionButton.addEventListener('click', grabCardsFromStorage)