console.log('hi')
document.querySelector('form').addEventListener('submit',formsubmit)
let ar=[]


function handleClick(){
    if(document.getElementById('exampleInputName').value =='' 
    || document.getElementById('exampleInputEmail1').value==''
     || document.getElementById('exampleInputPassword1').value=='' ){
        document.querySelector('.btn.btn-primary').disabled = true;
    }else{
        document.querySelector('.btn.btn-primary').disabled = false;

    }
}

function formsubmit(e){
    e.preventDefault()
    let fomdata={
        name: document.getElementById('exampleInputName').value ,
        email:document.getElementById('exampleInputEmail1').value ,
        pass:document.getElementById('exampleInputPassword1').value,
     }


ar.push(fomdata)
    console.log(ar)
    localStorage.setItem('data',JSON.stringify(ar))



    const getdata=JSON.parse(localStorage.getItem('data')) || []
    console.log(getdata,'getdata')


window.location.href='product.html'
}

document.getElementById('exampleInputName').addEventListener('input', handleClick);
document.getElementById('exampleInputEmail1').addEventListener('input', handleClick);
document.getElementById('exampleInputPassword1').addEventListener('input', handleClick);


