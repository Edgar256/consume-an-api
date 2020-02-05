window.onload = () => {
    const main = document.getElementById('root');
    const logo = document.createElement('img');
    const container = document.createElement('div');


    logo.src = './images/api-logo.png';
    logo.setAttribute('class', 'img-wrap')
    container.setAttribute('class', 'container container-flex');
    main.appendChild(logo)
    main.append(container)

    var request = new XMLHttpRequest()

    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
    request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {

            const card = document.createElement('div');
            card.setAttribute('class', 'card card-flex');
            const title = document.createElement('h3');
            title.textContent =  `Movie Title:  ${movie.title}`;
            const description = document.createElement('p');
            const director = document.createElement('h5');
            description.textContent = `Movie Description :   ${movie.description.substring(0,150)} ...`;
            description.setAttribute('class', 'justify-text');
            director.textContent = `Movie Director :   ${movie.director}`;
            
            card.appendChild(title);
            card.appendChild(director);
            card.appendChild(description)
            
            container.appendChild(card);
            console.log(movie)
        })
    } else {
        console.log('error')
    }
    }

    request.send()
}