function yesClicked() {
    // Replace everything with the "LET'S GOOOO" message
    const container = document.querySelector('.container');
    container.innerHTML = '<h1 class="spooky-text">LET\'S GOOOOO</h1>';
}

function moveNoButton() {
    // Randomly move the 'NO' button to a new position
    const noButton = document.querySelector('.no-btn');
    const container = document.querySelector('.container');

    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    // Random new position within the container
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}
