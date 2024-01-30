// JavaScript interactions

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded.');

    // Click event for the home link
    const homeLink = document.getElementById('home-link');
    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        alert('You clicked on the Home link!');
    });

    // Click event for the about link
    const aboutLink = document.getElementById('about-link');
    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        alert('You clicked on the About link!');
    });

    // Click event for the contact link
    const contactLink = document.getElementById('contact-link');
    contactLink.addEventListener('click', function (event) {
        event.preventDefault();
        alert('You clicked on the Contact link!');
    });

    // Fetch data dynamically and update content
    const fetchDataButton = document.getElementById('fetch-data-button');
    const dynamicContentContainer = document.getElementById('dynamic-content-container');

    fetchDataButton.addEventListener('click', function () {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                dynamicContentContainer.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});
