
import {REQUESTINFO,ADD_TODO,DEL_TODO,ISALL,DELCOMPUTED} from './mutations-type'

export default{
    [REQUESTINFO](state){
       let todos =  JSON.parse(window.localStorage.getItem('todos_key'))  || []
       state.todos = todos
    },
    [ADD_TODO](state,{todo}){
        state.todos.push(todo)
    },
    [DEL_TODO](state,{index}){
        state.todos.splice(index,1)
    },
    [ISALL](state,{val}){
      state.todos.forEach(item => item.done=val)
    },
    [DELCOMPUTED](state){
      state.todos =  state.todos.filter(todo =>!todo.done)
    }
}
