var vue = new Vue({
	el:'#app',
    data:{
	    userList:[]
    },
    methods:{
        findAll:function(){
            var _this=this; //this代表是vue对象
            axios.get("./user/findAll").then(function(response){
//          this变成了window（可以使用_this或者vue）
                _this.userList = response.data;
            }).catch(function (error) {

            })
        }
    },
    created:function () {
        this.findAll();
    }
})