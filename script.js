console.log("now satart javascript work")

const userList = document.querySelector('.user-list')

const userForm = document.querySelector('form')

const button = document.querySelector('#button')

let editUserId = null;


const userData = [
    {
    id: 1,
    name: "Karan Maurya",
    age: 20,
    email: "karan@example.com",
    image : '871235490433531374.jfif'
},
    {
    id: 2,
    name: "Meeka",
    age: 21,
    email: "meeka@example.com",
    image : '871235490433531374.jfif'
    }
]



userList.addEventListener("click", (event) => {
  // EDIT
    if (event.target.classList.contains("edit-btn")) {

        const id = Number(event.target.dataset.id);

        const user = userData.find((elem) => elem.id === id);

        editUserId = id;

        document.querySelector("#name").value = user.name;
        document.querySelector("#email").value = user.email;
        document.querySelector("#age").value = user.age;
    }


    // DELETE
    if (event.target.classList.contains("delete-btn")) {

        const id = Number(event.target.dataset.id);

        const userIndex = userData.findIndex((elem) => elem.id === id);

        userData.splice(userIndex, 1);

        renderUser();
    }
});

function renderUser(){
    userList.innerHTML = "";


    userData.forEach((elem) => {
    userList.innerHTML += `<div class="card">
            <div class="box">
            <img src="${elem.image}" alt="User Image">
            </div>
            <div class="user-details">
                <h3> <b>Name:</b> ${elem.name}</h3>
                <p ><b>Email:</b> ${elem.email} </p>
                <p><b>Age:</b> ${elem.age} </p>
                <div class="action">
                <button class="delete-btn" data-id="${elem.id}">🗑️</button>
                <button class="edit-btn" data-id="${elem.id}">✏️</button>
                </div>      
            </div>
        </div>`
});
}
renderUser()

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value
    const  email= document.querySelector('#email').value
    const age = document.querySelector('#age').value
    const image = document.querySelector('#image').files[0]


    if (editUserId !== null) {

        //UPDATE

        const user = userData.find((elem) => elem.id === editUserId);

        user.name = name;
        user.email = email;
        user.age = age;

        if (image) {
            user.image = URL.createObjectURL(image);
        }

        editUserId = null;

        
    }
    else{
          // ADD NEW USER

        const user = {
            id: Date.now(),
            name: name,
            email: email,
            age: age,
            image: image
                ? URL.createObjectURL(image)
                : null
        };

         if (!name || !email || !age) {
        alert("Please fill all fields")
        return
    }
    else{
        userData.push   (user)
        console.log(userData)
       
    }
    }
  
     userForm.reset()
        renderUser()

   
})














