async function getDetails() {
    const params =new URLSearchParams(window.location.search);
    const userId=params.get("id");
    const {data}=await axios.get(`https://node-react-10.onrender.com/users/${userId}`);
    console.log(data);
     document.getElementById("user-name").value = data.user.userName;
document.getElementById("user-email").value = data.user.email;
document.getElementById("user-password").setAttribute("type","text");
document.getElementById("user-password").value = data.user.password;}
getDetails();


const addUserForm = document.querySelector(".create-form");
addUserForm.onsubmit = async function(e){
    e.preventDefault();
        const params =new URLSearchParams(window.location.search);
    const userId=params.get("id");

    const user={
        userName:e.target.userName.value,
        email:e.target.email.value,
        password:e.target.password.value,
    }
    try{
   console.log(userId);
   const response= await axios.put(`https://node-react-10.onrender.com/users/${userId}`,user);
window.location.href="index.html";
}
catch(e){   
    
      document.querySelector(".text-danger").textContent="try again";
}
}


