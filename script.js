console.log("now satart javascript work")

const userList = document.querySelector('.user-list')

const userForm = document.querySelector('form')



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
                    <button class="delete-btn"> 🗑️</button>
                    <button class="edit-btn">✏️</button>
                </div>      
            </div>
        </div>`
});
}
renderUser()

userForm.addEventListener('submit', (event) => {
    const name = document.querySelector('#name').value
    const  email= document.querySelector('#email').value
    const age = document.querySelector('#age').value
    const image = document.querySelector('#image').files[0]


    const user =  {
        name,
        email,
        age,
        image: image ? URL.createObjectURL(image) : null
    }

    if (!name || !email || !age) {
        alert("Please fill all fields")
        return
    }
    else{
        userData.push   (user)
        console.log(userData)
        userForm.reset()
        renderUser()
    }
})












