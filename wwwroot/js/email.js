const btn = document.querySelector('button')
const inputs = document.querySelector('form')
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
 
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["fmail"].value).trim()
    const msg = (inputs.elements["message"].value).trim()
    const phone = (inputs.elements["phone"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !phone.length > 0) {
        alert("All fields are mandatory")
        
        return
    }
    Email.send({
        SecureToken : "aea4d6f7-4509-4e06-91f7-207108fa1e6f",
        To : "govepoov00pi@gmail.com",
        From : "govepoov00pi@gmail.com",
        ReplyAddress : email,
        FromName : name,
        Subject: "Customer query from " + name,
        Body: msg + "<br>" + name + "<br>" + email + "<br>" + phone 
        })
        .then(alert("Email successfully sent")
        )
    wait(5000)
        Email.send({
            SecureToken : "aea4d6f7-4509-4e06-91f7-207108fa1e6f",
            To : email,
            From : "govepoov00pi@gmail.com",
            FromName : "KidZone",
            Subject: "Customer Query",
            Body: "Good Day " + name + "<br>" + "You will be contacted shortly regarding below query" +"<br>" + msg + "<br>" + name + "<br>" + email +"<br>"+phone + "<br>" 
            })
    
    
        
})

