const inputfield=document.getElementById("inputext");
const button=document.getElementById("btn");


function searchEmoji(){

    function checkAli(alias){
    return alias.startsWith(inputfield.value);
}

const ressultdata=document.getElementById("resultdata");
ressultdata.innerText="";

let filteredList=emojiList.filter((element)=>{
   
     if(element.category.startsWith(inputfield.value)){
        return true;
    }

    if(element.aliases.some(checkAli)){
        console.log("working");
        return true;
    }

    if(element.tags.some((element)=>{element.startsWith(inputfield.value)})){
        return true;
    }

  
    
})


filteredList.map((element)=>{
    const heading=document.createElement("h1");
    const heading2=document.createElement("h3");
    const heading3=document.createElement("h5");
    heading.innerText=element.emoji;
    heading2.innerText=element.aliases;
    heading3.innerText=element.description;
    //  const main=document.querySelector(".main");
 
   
     ressultdata.appendChild(heading);
     ressultdata.appendChild(heading2);
     ressultdata.appendChild(heading3);
})




}


function searchemojii(){
    function checkAli(alias){
        return alias.startsWith(inputfield.value);
    }
    console.log("hello");
    console.log(inputfield.value);
    
    const ressultdata=document.getElementById("resultdata");
    ressultdata.innerText="";
    
    let filteredList=emojiList.filter((element)=>{
       
         if(element.category.startsWith(inputfield.value)){
            return true;
        }
    
        if(element.aliases.some(checkAli)){
            console.log("working");
            return true;
        }
    
        if(element.tags.some((element)=>{element.startsWith(inputfield.value)})){
            return true;
        }
    
      
        
    })
    
    
    filteredList.map((element)=>{
        const heading=document.createElement("h1");
        const heading2=document.createElement("h3");
        const heading3=document.createElement("h5");
        heading.innerText=element.emoji;
        heading2.innerText=element.aliases;
        heading3.innerText=element.description;
        //  const main=document.querySelector(".main");
     
       
         ressultdata.appendChild(heading);
         ressultdata.appendChild(heading2);
         ressultdata.appendChild(heading3);
    })
}

button.addEventListener("click",searchEmoji);
// button.addEventListener("keyup",searchemojii);

window.onload =()=>{
    searchEmoji();
}
