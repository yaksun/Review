(
    function(){
        const myPlugin={}

        myPlugin.install=function(Vue,option){
                Vue.globalFn = function(){
                    console.log('插件全局函数')
                }

                Vue.directive('toupper',function (el,binding) {
                    el.innerHTML = binding.value.toUpperCase()
                })
                // 固定语法
                Vue.prototype.$mySee = function(){
                    console.log('插件实例方法')
                }
        }

        window.myPlugin = myPlugin
    }
)()
