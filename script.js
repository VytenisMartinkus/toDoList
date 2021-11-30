// "use strict"

const task=document.getElementById('task');
const priority=document.getElementById('priority');
const status=document.getElementById('status');
const date=document.getElementById('date')
const progress=document.getElementById('progress');
const myTable=document.querySelector('tbody');
const myForm=document.querySelector('form');

const myButton=document.getElementById('myButton');

myButton.addEventListener('click', function(e){
    e.preventDefault();
    addToDo();
    myForm.reset();
});


function addToDo(){
    if(task.value !==""&&priority.value!=="Choose Priority"){
        console.log(task.value);
        console.log(priority.value);
        // kuriu eilute,ja idedu i table body
        const myRow=document.createElement('tr');
        myTable.appendChild(myRow);
        // kuriu stulpeli, i ji idedu task reiksme
        const myCol=document.createElement('td');
        myCol.textContent=task.value;
        // stulpeli appendinu eilutei
        myRow.appendChild(myCol);

        // mano kodas priority reiksmei ideti
        const myCol1=document.createElement('td');
        const myPriority=document.createElement('p');
        myPriority.innerText=priority.value;
        switch(priority.value){
                case 'High':
                    myPriority.className="btn btn-warning";
                    break;
                case 'Normal':
                    myPriority.className="btn btn-success";
                    break;
                case 'Low':
                    myPriority.className="btn btn-info";
                    break;
                    

        }
        myCol1.appendChild(myPriority)
        myRow.appendChild(myCol1);

        priority.value ="Choose Priority"
        task.value = " "

        const myCol2=document.createElement('td');
        const myStatus=document.createElement('p');
        myStatus.innerText=status.value;
        switch(status.value){
            case    'Complete':
                    myStatus.className="btn btn-secondary";
                    break;
                case 'In progress':
                    myStatus.className="btn btn-secondary";
                    break;
                case 'New':
                    myStatus.className="btn btn-secondary";
                    break;
        }

        myCol2.appendChild(myStatus);
        myRow.appendChild(myCol2);


        const myCol3=document.createElement('td');
        const myprogress=document.createElement('p');
        myprogress.innerText=progress.value;
        switch(progress.value){
            case    '100%':
                    myprogress.className="progress-bar progress-bar-striped bg-success";
                    myprogress.style="width: 100%"
                    break;
                case '75%':
                    myprogress.className="progress-bar progress-bar-striped bg-warning"
                    myprogress.style="width: 75%"
                    break;
                case '50%':
                    myprogress.className="progress-bar progress-bar-striped bg-info";
                    myprogress.style="width: 50%"
                    break;
                case '25%':
                    myprogress.className="progress-bar progress-bar-striped bg-danger"
                    myprogress.style="width: 25%"
                    break;
                case '0%':
                    myprogress.className="progress-bar progress-bar-striped bg-danger"
                    myprogress.style="width: 0%"
                    break;
        }


        myCol3.appendChild(myprogress);
        myRow.appendChild(myCol3);

       let dateControl=document.querySelector('input[type="date"]');
       const datos=document.createElement('td');
       const myDate=document.createElement('p')
       myDate.innerText=dateControl.value;

       datos.appendChild(myDate);
       myRow.appendChild(datos);

       

       const myCol4=document.createElement('td');        
       const myDeleteBtn=document.createElement('button');        myDeleteBtn.innerText="Delete";        
       myDeleteBtn.className="btn btn-danger";        
       
       myCol4.appendChild(myDeleteBtn);        
       myRow.appendChild(myCol4);          
       
       myDeleteBtn.addEventListener("click", function(){             myTable.removeChild(myRow)})

    } else{
        alert("Iveskite uzduoti")
    }
}