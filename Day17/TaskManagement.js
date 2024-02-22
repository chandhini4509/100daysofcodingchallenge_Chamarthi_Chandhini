let tasks=['learn java script','execute file'];
function addtasks(task){
    tasks.push(task);
}
function displaytasks(){
    for(i=0;i<tasks.length;i++){
        console.log(tasks[i]+" ");
    }
}
addtasks('install packages');
displaytasks();