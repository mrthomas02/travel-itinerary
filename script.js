function addDestination() {
    const input = document.getElementById('destination');
    const value = input.value.trim();
    if (value) {
        const list = document.getElementById('destination-list');
        const listItem = document.createElement('li');
        listItem.textContent = value;
        list.appendChild(listItem);
        input.value = '';
    }
}

function addAccommodation() {
    const input = document.getElementById('accommodation');
    const value = input.value.trim();
    if (value) {
        const list = document.getElementById('accommodation-list');
        const listItem = document.createElement('li');
        listItem.textContent = value;
        list.appendChild(listItem);
        input.value = '';
    }
}

function addActivity() {
    const input = document.getElementById('activity');
    const value = input.value.trim();
    if (value) {
        const list = document.getElementById('activity-list');
        const listItem = document.createElement('li');
        listItem.textContent = value;
        list.appendChild(listItem);
        input.value = '';
    }
}
