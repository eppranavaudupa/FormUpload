const myname=document.querySelector('.username');
const myusn=document.querySelector('.userusn');
const mycity=document.querySelector('.usercity');
const button=document.querySelector('button');
button.addEventListener('click',()=>{
    console.log(`button clicked`)
    const obj={
        name:myname.Value,
        usn:myusn.value,
        city:mycity.value
    };
    fetch("/contact",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)
     });

})