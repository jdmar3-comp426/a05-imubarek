window.addEventListener("load" , function(){

    function sendData(){
        const sendRequest = new XMLHttpRequest() ; 

        const signupInfo = new URLSearchParams(new FormData(form)) ;

        sendRequest.addEventListener("load" , function(event){
            alert("Your account was created!") ; 
        })

        sendRequest.addEventListener("error" , function(event){
            alert("Submission Unsuccesful! Please try again.") ; 
        }
        ) ; 
  
        
        
        sendRequest.open("POST" , "http://localhost:5000/app/new/" ) ; 
        sendRequest.send(signupInfo) ; 
    }

    //Sets the html of a button to the username of the first user in the database
    function getData(button){ 
        const sendRequest = new XMLHttpRequest() ;
        sendRequest.open("GET" , "http://localhost:5000/app/users/" ) ;
        sendRequest.addEventListener("load" , function(event){
            button.innerHTML = JSON.parse(sendRequest.response)[0]["user"];
        }) ; 
        sendRequest.send() ; 
    }

  


    const form = document.getElementById("signup") ; 
    form.addEventListener( "submit" , function(event){
        event.preventDefault(); 
        sendData() ; 
    }
    ); 


    const button = document.getElementById("getdata") ; 
    button.addEventListener("click" , function(event){
        event.preventDefault() ; 
        getData(button) ; 
    })   


}

) ;
