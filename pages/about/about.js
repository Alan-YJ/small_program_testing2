Page({
    data:{
        time:''
    },
    onLoad(){
        this.setData({
            time: Date.now()
        })
    }
})