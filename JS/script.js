document.querySelector('[data-button]').addEventListener('click',function(){
    console.log('button clicked')
    var namex = document.querySelector('#name').value
    localStorage.setItem('name', namex);
    var telephone = document.querySelector('#tn').value
    localStorage.setItem('telephone', telephone);
    var mobile = document.querySelector('#mn').value
    localStorage.setItem('mobile', mobile);
    var email = document.querySelector('#email').value
    localStorage.setItem('email', email);
    var color = document.querySelector('#color').value
    localStorage.setItem('color', color);
        
})

    if (localStorage.name){
    first = document.createElement("div")
    first.innerText = "welcome: " + localStorage.name
    document.body.appendChild(first)


    second = document.createElement("div")
    second.innerText = "your telephonr is : " + localStorage.telephone
    document.body.appendChild(second)

    third = document.createElement("div")
    third.innerText = "your email is : " + localStorage.email
    document.body.appendChild(third)


    forth = document.createElement("div")
    forth.innerText = "your fav color is : " + localStorage.color
    document.body.appendChild(forth)
}