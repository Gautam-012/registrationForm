let submit = document.querySelector('.submit');

submit.addEventListener('click', ()=>{
    var output = document.querySelector('.output');
    // console.log(output);

    let imgUrl = document.querySelector('#img').value;
    let generatedUrl = `https://drive.google.com/uc?export=view&id=${imgUrl}`;

    const data = {
        name : document.getElementById("name").value,
        img : generatedUrl,
        email : document.getElementById("email").value,
        websitelink : document.getElementById("websitelink").value,
        skills : document.getElementById("skills").value
    };
    // console.log(data);

    let newList = document.createElement('div');
    newList.classList.add('addData');
    newList.innerHTML= `
        
    <img src="${generatedUrl}" alt="image"></br>
    <h4 class="card-title">Name: ${data.name}</h4>
  
        <label for="title" class="form-label">Email: 
            <a class="card-text" href="#"> ${data.email}</a>
        </label>

        <label for="title" class="form-label">Website : 
            <a class="card-text" href="#">${data.websitelink}</a>
        </label>
    
    <h6 class="card-title">Skills: ${data.skills}</h6> 
    `
    // console.log(newList);

    output.appendChild(newList);

    let input = document.querySelectorAll('input');
    input.forEach(input => {
        input.value='';
    });
})

//1yGYbg6F-XujxaMSwfCGGK5w0fBNhC8D1