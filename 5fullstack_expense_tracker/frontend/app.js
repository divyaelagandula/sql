window.addEventListener("DOMContentLoaded",()=>{
    axios.get("http://localhost:4000/expenses")
    .then((response)=>{
        console.log(response);
        for(var i=0;i<response.data.length;i++){
            displayOnScreen(response.data[i])
        }
    })
    .catch((err)=>{
        console.log(err);
    });
})
const form=document.getElementById('expense-form');
let temp_id=null;
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const amount=document.getElementById('expenseamount').value;
    const description=document.getElementById('description').value;
    const category=document.getElementById('category').value;
    const object={amount,description,category};
   if(temp_id!=null){
      axios.put(`http://localhost:4000/expenses/${temp_id}`,object)
      .then((res)=>{    
           object.id=temp_id
           const li=document.getElementById(temp_id)
           li.remove()
           displayOnScreen(object)
           temp_id = null;
        
         })
      .catch((err)=>{
          console.log("Error occurs",err)
      })  

    }
    else{
         axios.post("http://localhost:4000/expenses",object)
    .then((response)=>{
        console.log(response.data);
        displayOnScreen(response.data);
    })
    .catch((err)=>{
        console.log(err);
    });

    }
   
});
function displayOnScreen(obj){
    const ul=document.getElementById("expense-list")
    const li=document.createElement("li")
    li.id=obj.id  
    li.innerHTML=`${obj.amount}-${obj.description}-${obj.category}-<b>${obj.id}</b>`

    const deletebtn=document.createElement('button')
    deletebtn.textContent="delete"
    const editbtn=document.createElement('button')
    editbtn.textContent="edit"
    li.appendChild(deletebtn)
    li.appendChild(editbtn)
     ul.appendChild(li)
    deletebtn.addEventListener('click',()=>{
        deleteData(li)
  
    })
    editbtn.addEventListener('click',()=>{
        editData(obj)
    })
    

}
function deleteData(li){
    axios.delete(`http://localhost:4000/expenses/${li.id}`)
    .then((response)=>{
        console.log(response);
        li.remove();
    })
    .catch((err)=>{
        console.log(err);
    });
}
function editData(obj){
    temp_id=obj.id;
    document.getElementById('expenseamount').value=obj.amount;
    document.getElementById('description').value=obj.description;
    document.getElementById('category').value=obj.category;
    
}
