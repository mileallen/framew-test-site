


  //var getTudus = JSON.stringify(tuduRef) ;
  // var getTD = XMLHttpRequest('https://alpine-mile.firebaseio.com/todos.json');

function todofunc() {
    return {
   
//data
randID: Math.random().toString(36).slice(2),
task: '',

todos: null,
isLoading: false,

setTudus() { 
    //this.isLoading= true;
    //setTimeout(this.setNow(tds), 4000);
    this.todos = tds;

},  

setNow(){
    //let evt1 = new Event('keyup');
    this.todos=this.todos;
    //console.log("setnow called");
},

/**/
addNewTask() {
    //Return if empty
    if (this.task.trim() === '') return;
    //Add new todo and clear task
    /*tuduRef.push({
        id: this.randID++,
        task: this.task,
        isComplete: false
    });*/
    firebase.database().ref('tudus/' + this.randID).set({
        id: this.randID,
        task: this.task,
        isComplete: false
      });

    this.todos.push({
        id: this.randID,
        task: this.task,
        isComplete: false
    });
    this.task = '';
    this.randID = Math.random().toString(36).slice(2);
    //this.randID++;
},

togDone(tdID, tdDone){
    firebase.database().ref('/tudus/' + tdID).update({
        isComplete: !tdDone
      })
      console.log('done completed');
},

removeTask(tdDel) {
    //tuduRef.child(todoToRemove).remove();
    firebase.database().ref('/tudus/' + tdDel).remove();
    this.todos = this.todos.filter(todo => todo.id != tdDel);
    
}

}
        
}