export function addTask(task) {
  return{
    type: "ADD_TASK",
    payload: task
  }  
}

export function removeTask(task) {
  return{
    type: "DELETE_TASK",
    payload: task
  }  
}

export function editTask(task, originalValue) {
  return{
    type: "EDIT_TASK",
    payload: task,
    original: originalValue
  }  
}