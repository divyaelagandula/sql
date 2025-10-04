const url="http://localhost:3000/buses"
document.addEventListener("DOMContentLoaded", function() {
  axios.get(url)
  .then((res) => {
            console.log(res.data)
            let result=res.data
            for(let i=0;i<result.length;i++){
                displayOnScreen(result[i])  
            }
  })
  .catch((err) => {
            console.log("Error occurs", err)
  })
});
    

const form=document.querySelector('form')
temp_id=null;


form.addEventListener("submit",function (event){
  event.preventDefault() 
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const phone=document.getElementById("tel").value
    const bus_number=document.getElementById("bustype").value
    let obj={
        name,email,phone,bus_number
    }
    if(temp_id!=null){
      axios.put(`${url}/${temp_id}`,obj)
      .then((res)=>{    
           obj.id=temp_id
           const li=document.getElementById(temp_id)
           li.remove()
           displayOnScreen(obj)
           temp_id = null;
        
         })
      .catch((err)=>{
          console.log("Error occurs",err)
      })  

    }
    else{
        axios.post(url,obj)
          .then((res)=>{
              console.log(res.data)
              displayOnScreen(res.data)
          })
          .catch((err)=>{
              console.log("Error occurs",err)
          })
    }
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("tel").value=""
    document.getElementById("bustype").value=""
    
})
function displayOnScreen(data){
    const ul=document.getElementById("list")
    const li=document.createElement("li")
    li.id=data.id  
    li.innerHTML=`${data.name}-${data.email}-${data.phone}-<b>${data.bus_number}</b>`
   
    const deletebtn=document.createElement('button')
    deletebtn.textContent="delete"
    const editbtn=document.createElement('button')
    editbtn.textContent="edit"
    li.appendChild(deletebtn)
    li.appendChild(editbtn)
     ul.appendChild(li)
    deletebtn.addEventListener('click',()=>{
        deleteData(li,data.id)
  
    })
    editbtn.addEventListener('click',()=>{
        editData(data)
    })
    
    
}
function deleteData(li,id){
    li.remove()
    axios.delete(`${url}/${id}`)
    .then((res)=>{
        console.log("removed")
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}
function editData(data){
    temp_id=data.id
 

    document.getElementById("name").value=data.name
    document.getElementById("email").value=data.email
   document.getElementById("tel").value=data.phone
   document.getElementById("bustype").value=data.bus_number
}
const filter=document.getElementById("filter")
filter.addEventListener("change",function(event){
    const filteredvalue=event.target.value
    const ul=document.getElementById("list")
    ul.innerHTML=""
    axios.get(url)
    .then((res)=>{
        const result=res.data
        for(let i=0;i<result.length;i++){
            if(result[i].e_bustype===filteredvalue){
                displayOnScreen(result[i])
            }
            if(filteredvalue==="all"){
                displayOnScreen(result[i])
            }
        }
    })




})