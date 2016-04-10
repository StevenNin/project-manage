/**
 * Created by Alkali on 16/3/20.
 */
$(function(){
    var extArray = [".gif", ".jpg", ".png"];
    function limitAttach(file) {
        var allowSubmit = false;
        if (!file) return;
        while (file.indexOf("\\") != -1) {
            file = file.slice(file.indexOf("\\") + 1);
        }
        var ext = file.slice(file.indexOf(".")).toLowerCase();
        for (var i = 0; i < extArray.length; i++) {
            if (extArray[i] == ext) {
                allowSubmit = true;
                break;
            }
        }
        return allowSubmit;
    }

    var uploadFile = $('#upload-file');
    uploadFile.change(function () {
        var file = $(this).val();
        console.log(file);
        if(limitAttach($(this).val())){
            //TODO 上传文件
        }else{
            alert("请重新上传,允许上传以下文件:\n" + (extArray.join("  ")));
            $(this).val('');
        }
    });

    $('#Personal_intro').keyup(function(){
        countCar($(this));
    });
    function countCar(val){
        var len = val.val().length;
        $('#number').html(100 - len);
        if (len >= 100) {
            val.val(val.val().substring(0, 100));
            $('#number').html(0);
        }
    }
});
