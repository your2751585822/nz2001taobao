jQuery.fn.extend({
    check:function($subCheck,$unCheck){
        this.click(function(){
            $subCheck.prop("checked",this.checked)
        })
        if($unCheck){
            $unCheck.click(function(){
                $subCheck.each(function(){
                    this.checked= !this.checked
                })
                res()
            })
        }
        $subCheck.click(function(){
            res()
        })
        var res = ()=>{
            let allCheck = true
            $subCheck.each(function(){
                if(this.checked!=true){
                    allCheck = false
                }
            })
            
            this.prop("checked",allCheck)
        }
    }
})