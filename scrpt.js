let counter=0;
const advice=document.querySelector('#advice');
const adviceNumber=document.querySelector('#adviceNumber');
document.querySelector('#oval').addEventListener('click',function(){
    const apiURL=`https://api.adviceslip.com/advice`;
    fetch(apiURL)
     .then(response=>{
         if(!response.ok){
             throw new Error('HTTP error')
         }
         if(response.status===200){
            counter++;
            adviceNumber.textContent=`ADVICE #${counter}`
         }
         return response.json();
     })
     //https://dog.ceo/api/breeds/image/random
     .then(data=>{
         advice.textContent=JSON.stringify(data.slip.advice,null,2)
     })
     .catch(error=>{
         advice.textContent='Error';
         console.log(error)
     });
 })