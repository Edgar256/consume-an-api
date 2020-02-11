window.onload = () => {
    const main = document.getElementById('root');
    const search = document.getElementById('search');
    const logo = document.createElement('img');
    const container = document.createElement('div');


    logo.src = './images/api-logo.png';
    logo.setAttribute('class', 'img-wrap')
    container.setAttribute('class', 'container container-flex');
    search.appendChild(logo)
    main.append(container)

    var request = new XMLHttpRequest()

    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
    request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    // console.log(Object.values(data),Object.keys(data))
    let html = ``
    // let fullhtml = ``

    if (request.status >= 200 && request.status < 400) {

        Object.keys(data).forEach((key,value) => {
            const id = data[key]
            const details = data[value]

            if(data.length !== 0){
                //console.log(details.description)
                const limitDecription = details.description.substring(0,150)
                html +=`
                        <div class="card card-flex">
                            <h4 class="title">Movie Title: ${details.title}</h4>
                            <h6 class="title-2">Movie Director :   ${details.director}</h6>
                            <p class="justify-text">
                                Movie Description :   ${limitDecription} ...
                            </p>
                            <button class="btn">See more</button>
                        </div>              
                    `
                // fullhtml +=`
                //     <div class="card card-flex card-100">
                //         <h4 class="title">Movie Title: ${details.title}</h4>
                //         <h6 class="title-2">Movie Director :   ${details.director}</h6>
                //         <p class="justify-text">
                //             Movie Description :   ${details.description}                       
                //         </p>
                //         <button class="btn">See more</button>
                //     </div>              
                // `

                

            }else{
                html = `<p class=""> API server down, please check your network or reloading your browser </p>`
                console.log('loading api data')
            }            
        })

        console.log(data)

        $('#comps').html(html)
        // $('#fullhtml').html(fullhtml)

        


        /*data.forEach(movie => {

            const card = document.createElement('div');
            card.setAttribute('class', 'card card-flex');
            const title = document.createElement('h4');
            title.textContent =  `Movie Title:  ${movie.title}`;
            const description = document.createElement('p');
            const director = document.createElement('h6');
            description.textContent = `Movie Description :   ${movie.description.substring(0,150)} ...`;
            description.setAttribute('class', 'justify-text');
            director.textContent = `Movie Director :   ${movie.director}`;
            
            card.appendChild(title);
            card.appendChild(director);
            card.appendChild(description)
            
            container.appendChild(card);
        })*/
    } else {
        console.log('error')
    }
    }

    request.send()
}