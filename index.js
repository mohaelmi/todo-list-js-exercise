// function that task object live in --OOP
function newTask(title, description) {
  // One object that storing all state and logic related to the task --OOP
  const task = {
    title: title,
    description: description,
    isComplete: false,
    completeTask: function() {
      this.isComplete = true 
    },
    logTaskState: function() {
      console.log(`${this.title} has${this.isComplete ? " " : " not "}been completed`);
    }
  }

  return task
}


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];


task1.logTaskState();
task1.completeTask()
task1.logTaskState();

console.log(tasks)