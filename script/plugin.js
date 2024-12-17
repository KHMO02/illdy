

document.getElementById('menu').addEventListener('click', function() {
    var div = document.getElementById('mobile-navigators');
    var computedStyle = window.getComputedStyle(div);
    var visible = computedStyle.getPropertyValue('visibility');
    if(visible == 'hidden'){
        div.style.visibility = 'visible';
    }
    else{
        div.style.visibility = 'hidden';
    }


});
