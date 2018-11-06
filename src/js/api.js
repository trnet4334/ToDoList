const resource_jsonplaceholder = 'posts';
const url_jsonPlaceholder = `https://jsonplaceholder.typicode.com/${resource_jsonplaceholder}`;
const url_randomUserGenerator = 'https://randomuser.me/api/?result=401';

// Fetch fake data from JSON Placeholder to fill message section
fetch(url_jsonPlaceholder)
    .then(data => data.json())
    .then(result => result.slice(0, 20))
    .then(json => {
        return json.map(x => {
            let item = document.getElementById('message-content');
            let div = document.createElement('div');
            let inputMessage = document.createElement('p');
            let subjectTitle = document.createElement('h3');
            subjectTitle.innerText = `SUBJECT: ${x.title}`;
            inputMessage.innerHTML = `<h3>MESSAGE:</h3> ${x.body}`;
            div.appendChild(subjectTitle);
            div.appendChild(inputMessage);
            let hr = document.createElement('hr');
            div.appendChild(hr);
            item.appendChild(div);
        })
    }).catch(error => {
        console.log(error);
    });

// Fetch fake data from Random User Generator to generate random user picture and email address
fetch(url_randomUserGenerator)
    .then(data => data.json())
    .then(json => {
        return json.results.map(x => {
            let div = document.getElementById('user__image-section');
            let image = document.getElementById('user__message-image');
            // div.style.backgroundImage = `url('${x.picture.thumbnail}')`;
            image.setAttribute('src', x.picture.thumbnail);
            let emailAddress = document.getElementById('user__email-address');
            emailAddress.innerText = x.email;
            div.appendChild(emailAddress);
        })
    })
    .catch(error => {
        console.log(error);
    });