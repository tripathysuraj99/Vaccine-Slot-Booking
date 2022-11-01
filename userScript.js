form.addEventListener('submit', (e)=>{
   
    e.preventDefault();
    let email=document.getElementById("email").value;
    let user_name=document.getElementById("userName").value;
    let age=document.getElementById("age").value;
    let phone=document.getElementById("phone").value;
    let adhaar=document.getElementById("adhaar").value;
    let address=document.getElementById("address").value; 
    let date=document.getElementById("date").value;   
    alert(date);

user_records=JSON.parse(localStorage.getItem("user_records"))?JSON.parse(localStorage.getItem("user_records")):[]


user_records.push({
    "name":user_name,
    "email":email,
    "age":age,
    "phone":phone,
    "adhaar":adhaar,
    "address":address,
    "date":date
});

localStorage.setItem('user_records', JSON.stringify(user_records));
})