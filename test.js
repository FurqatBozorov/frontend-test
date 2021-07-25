function getAndList() {
    let params = new URLSearchParams(window.location.search)
    let result =params.getAll('tags').toString(); 
    let myArray = result.split(',');
    
    let myUl= document.getElementById("my-list");
       
    for(let item of myArray){
        let myList = document.createElement('li')
        myList.innerText=item;
        if(item ===""){
            myList.style.display='none'
        }
        myList.onclick = deleteListItem;
        myUl.appendChild(myList);
    }      
}

function addNewParam(e) {
    e.preventDefault();
    let param =e.target.newParam.value;
    e.target.newParam.value='';
    let params = new URLSearchParams(window.location.search)
    let result =params.getAll('tags').toString(); 
    console.log(result);
    if(param!=""){
       if(result!=""){
        let newResult ='tags='+ result + `,${param}`;
        history.replaceState(null, null, "?"+ newResult);
       }else{
        let newResult ='tags='+ result + `${param}`;
        history.replaceState(null, null, "?"+ newResult);
       }
        
    }     
    let myUl= document.getElementById("my-list");
    myUl.innerHTML='';
    getAndList();  
}


function deleteListItem(e) {
    let paramForDelete= e.target.innerText;
    let params = new URLSearchParams(window.location.search)
    let result =params.getAll('tags').toString(); 
    let myArray = result.split(',');
   
    var filtered = myArray.filter(function(value, index, arr){ 
        return value != paramForDelete;
    });
    let queryString = 'tags=';
   
    for(let item of filtered){
       queryString= queryString + item +',' 
    }    
     queryString = queryString.slice(0,queryString.length-1)
     //console.log(queryString);
     if(queryString == 'tags='){
        queryString =''
     }
     history.replaceState(null, null, "?"+ queryString);
     let myUl= document.getElementById("my-list");
     myUl.innerHTML='';
     getAndList(); 
}

