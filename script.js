let hunger = 100;
let happiness = 100;
let energy = 100;
let selectedPet = "dog";

const petImages = {
    dog: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cute_dog_cartoon.png",
    cat: "https://upload.wikimedia.org/wikipedia/commons/1/15/Cartoon-cat.png"
};

function updateStats() {
    document.getElementById('hunger').textContent = hunger;
    document.getElementById('happiness').textContent = happiness;
    document.getElementById('energy').textContent = energy;
    localStorage.setItem('petData', JSON.stringify({
        hunger,
        happiness,
        energy,
        selectedPet
    }));
}

function feedPet() {
    hunger = Math.min(100, hunger + 10);
    happiness = Math.min(100, happiness + 2);
    updateStats();
}

function playPet() {
    happiness = Math.min(100, happiness + 10);
    energy = Math.max(0, energy - 5);
    updateStats();
}

function restPet() {
    energy = Math.min(100, energy + 10);
    hunger = Math.max(0, hunger - 5);
    updateStats();
}

function changePet() {
    selectedPet = document.getElementById('pet-select').value;
    document.getElementById('pet-img').src = petImages[selectedPet];
    updateStats();
}

function loadPetData() {
    const savedData = localStorage.getItem('petData');
    if (savedData) {
        const data = JSON.parse(savedData);
        hunger = data.hunger;
        happiness = data.happiness;
        energy = data.energy;
        selectedPet = data.selectedPet || "dog";
        document.getElementById('pet-select').value = selectedPet;
    }
    document.getElementById('pet-img').src = petImages[selectedPet];
    updateStats();
}

setInterval(() => {
    hunger = Math.max(0, hunger - 1);
    happiness = Math.max(0, happiness - 1);
    energy = Math.max(0, energy - 1);
    updateStats();
}, 5000);

loadPetData();
