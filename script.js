function delete_last_item() {
    var disp = document.getElementById('display');
    disp.value = disp.value.slice(0, -1);
    disp.placeholder = '';
}

function clear_screen() {
    var disp = document.getElementById('display').value = '';
    disp.placeholder = '';
}

function calculate() {
    var res = document.getElementById('display');
    var text = "Please Enter First";
    if(document.getElementById('display').value == '') {
        res.placeholder = text;
    }
    else {
        if (res.value != '') {
            var res = document.getElementById('display').value = eval(display.value);
        }
    }
}

