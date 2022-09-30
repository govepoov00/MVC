try {
    

var sortBtn = document.querySelector('.filter-menu').children;
var sortItem = document.querySelectorAll('.row>div');
console.log(sortBtn, sortItem);
var filterset = null;
for (var i = 0; i < sortBtn.length; i++) {

    sortBtn[i].addEventListener('click', function () {
        // removing class current from all li items of ul class filter-menu
        for (var j = 0; j < sortBtn.length; j++) {
            //removing currect class from all buttons
            sortBtn[j].classList.remove('current');
        }

      //  console.log(this);
        //this is regering to sortBtn[i]
        this.classList.add('current');

        if(filterset!=null)
        {
            document.getElementById(filterset+"-filter").style.color = '';
            document.getElementById(filterset+"-filter").style.backgroundColor = '';
            document.getElementById(filterset+"-filter").style.border = '';  
        }
        var targetData = this.getAttribute('data-target');//getting the data-target value
        // console.log(targetData);// data-target value will be displayed e.g. js
        
        for (var k = 0; k < sortItem.length; k++) {
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            // console.log(sortItem[k].getAttribute('data-item')); 
            if (sortItem[k].getAttribute('data-item') == targetData || sortItem[k].getAttribute('data-item2') == targetData || targetData == "Reset") {
                //var onlyUrl = window.location.href.replace(window.location.search,'');
                
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
       
    });
}
}
catch (error) {
    
}

try {
    console.log("In the code")
    const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const filter = urlParams.get('filter-menu')
console.log(filter);
if(filter == null){
filter='Reset'}
console.log(filter);
filterset=filter;
for (var k = 0; k < sortItem.length; k++) {
    sortItem[k].classList.remove('active');
    sortItem[k].classList.add('delete');

    // console.log(sortItem[k].getAttribute('data-item')); 
    if (sortItem[k].getAttribute('data-item') == filter || sortItem[k].getAttribute('data-item2') == filter) {
        //var onlyUrl = window.location.href.replace(window.location.search,'');
        window.history.replaceState({}, document.title, "/" + "product.html");
        sortItem[k].classList.remove('delete');
        sortItem[k].classList.add('active');
       
        document.getElementById(filter+"-filter").style.color = "black";
        document.getElementById(filter+"-filter").style.backgroundColor = "white";
        document.getElementById(filter+"-filter").style.border= "2px solid #FCB941";
        
    }
   
    
}

} catch (error) {
    
}