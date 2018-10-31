const resource_jsonplaceholder = 'posts';
const url_jsonPlaceholder = `https://jsonplaceholder.typicode.com/${resource_jsonplaceholder}`;
const url_randomUserGenerator = 'https://randomuser.me/api/?result=401';

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
            // let br = document.createElement('br');
            div.appendChild(subjectTitle);
            // div.appendChild(br);
            div.appendChild(inputMessage);
            let hr = document.createElement('hr');
            div.appendChild(hr);
            item.appendChild(div);
        })
    }).catch(err => {
        console.log(err);
});

fetch(url_randomUserGenerator)
    .then(data => data.json())
    .then(json => {
        return json.results.map(x => {
            let div = document.getElementById('user__image-section');
            let image = document.getElementById('user__message-image');
            image.setAttribute('src', x.picture.thumbnail);
            let emailAddress = document.createElement('h4');
            emailAddress.innerText = x.email;
            div.appendChild(emailAddress);
        })
    })
    .catch(error => {
        console.log(error);
    });