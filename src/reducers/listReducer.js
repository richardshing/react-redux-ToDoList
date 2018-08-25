const listReducer = (state = {
  taskList: [],
  uniqIdArray: [],
  taskUniqId: 0
}, action) => {
  switch (action.type){
    case "ADD_TASK":
      if (action.payload.replace(/\s+/g, "") === ""){
        break;
      }
      else{
        var copyTaskList = state.taskList.slice();
        var copyUniqIdList = state.uniqIdArray.slice();
        var newId = state.taskUniqId
        copyTaskList.push(action.payload);
        copyUniqIdList.push(state.taskUniqId);
        newId += 1;
        state = {
          ...state,
          taskList: copyTaskList,
          uniqIdArray: copyUniqIdList,
          taskUniqId: newId
        };
        break;
    }
    case "DELETE_TASK":
      var newTaskArray = state.taskList.slice();
      var newUniqIdArray = state.uniqIdArray.slice();
      var removeTaskIndex = newTaskArray.indexOf(action.payload);
      newTaskArray.splice(removeTaskIndex, 1);
      newUniqIdArray.splice(removeTaskIndex, 1);
      state = {
        ...state,
        taskList: newTaskArray,
        uniqIdArray: newUniqIdArray
      };
      break;      
    case "EDIT_TASK":
      var newArray = state.taskList.slice();
      var editIndex = newArray.indexOf(action.original);
      newArray[editIndex] = action.payload;
      state = {
        ...state,
        taskList: newArray
      };
      break;
  }
  return state;
};

export default listReducer;