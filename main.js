var list=document.getElementById('list');
if(list!=''){
    document.getElementById('error-place').innerHTML='Well, you don\'t have any tasks today!';
}
function myFunction1(){
    let input=document.getElementById('enter').value;
    let showError=document.getElementById('error-place');
    showError.innerHTML='';
    try{
        if(input.trim()==''){
            showError.innerHTML='Write something in the box';
            let fakeTask;
            fakeTask='';
            document.getElementById('list').innerHTML+=fakeTask;
        }else{
            let task;
            task='<li class="listElement">'+input+'</li>';
            document.getElementById('list').innerHTML+=task;
        }
    }catch(err){
        console.log(err);
    }finally{
        document.getElementById('enter').value='';
    }
}
function myFunction2(){
    document.getElementById('list').innerHTML='';
}
