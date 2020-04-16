var fbconfig = {
    apiKey: "AIzaSyB2vWUs5xac3PmF-c3V6iFq9WiHkK3lw4U",
    authDomain: "alpine-mile.firebaseapp.com",
    databaseURL: "https://alpine-mile.firebaseio.com",
    projectId: "alpine-mile",
    storageBucket: "alpine-mile.appspot.com",
    messagingSenderId: "359761817676",
    appId: "1:359761817676:web:9e511aa5a9c3a8baca84e9"
  };
  
  firebase.initializeApp(fbconfig);
  
  var tuduRef = firebase.database().ref('tudus');


  //var getTudus = JSON.stringify(tuduRef) ;
  // var getTD = XMLHttpRequest('https://alpine-mile.firebaseio.com/todos.json');

function todofunc() {
    return {
   
//data
randID: Math.random().toString(36).slice(2),
task: '',

todos: [{id: '', task: 'First fetch the list', isComplete: false }],
isLoading: false,

setTudus() { 
    this.isLoading= true;
    var tds = [ {id: '', task: 'First fetch the list', isComplete: false } ];
    tuduRef.once('value').then(function(snap) {
            snap.forEach(function(childSnapshot) {
            tds.push({
                id: childSnapshot.val().id,
                task: childSnapshot.val().task,
                isComplete: false
            }); 
        }
      );
      console.log('promise done');
      //this.todos= tds;
    })
      //setTimeout(this.setNow(tds), 4000);
      this.todos = tds;

},  

setNow(){
    //let evt1 = new Event('keyup');
    this.todos=this.todos;
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
removeTask(todoToRemove) {
    //tuduRef.child(todoToRemove).remove();
    firebase.database().ref('/tudus/' + todoToRemove).remove();
    this.todos = this.todos.filter(todo => todo.id != todoToRemove);
    
}

}
        
}