
import {ADD_TODO, REQUESTINFO,DEL_TODO,ISALL,DELCOMPUTED} from './mutations-type'

export default{
      reqestInfo({commit}){
          setTimeout(()=>{
            commit(REQUESTINFO)
          },1000)
        },
      addTodo({commit},todo){
          commit(ADD_TODO,{todo})
      },
      delTodo({commit},index){
        commit(DEL_TODO,{index})
      },
    isAll({commit},val){
        commit(ISALL,{val})
    },
     delComputed({commit}){
          commit(DELCOMPUTED)
     }
}
