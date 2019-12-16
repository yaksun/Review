export default{
     computednNum(state){
      return  state.todos.reduce((perNum,todo)=> perNum + (todo.done ? 1 : 0) ,0)
     },
    allNum(state){
       return state.todos.length
    }

}
