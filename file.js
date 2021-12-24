buttonsName = function (direction) {
    var all = $('.tbmpf-fieldset input:radio');
    var current = $('.tbmpf-fieldset input:radio:checked');
    var index;
    if (direction == 'prev') {
        index = all.index(current) - 1;       
    } else {
        index = all.index(current) + 1;        
    }
    
    if(index >= all.size()) index = 0;
    all.eq(index).click();
    return false;
};


buttonsName = function (direction) {
    var all = $('.tbmpf-fieldset input:radio');
    var current = $('.tbmpf-fieldset input:radio:checked');
    var index;
    if (direction == 'prev') {
        index = all.index(current) - 1;       
    } else {
        index = all.index(current) + 1;        
    }
    
    if(index >= all.size()) index = 0;
    all.eq(index).click();
    return false;
};

