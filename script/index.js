var editItems = document.getElementsByClassName('edit-item');

Array.from(editItems).forEach(function(editItem){
    editItem.addEventListener('click', function(){
        var id = editItem.getAttribute('id');
        switch (id){
            case 'redo':
                document.execCommand('redo');
                break;
            case 'undo':
                document.execCommand('undo');
                break;
            case 'cut':
                document.execCommand('cut');
                break;
            case 'copy':
                document.execCommand('copy');
                break;
            case 'paste':
                document.execCommand('paste');
                break;
        }
    });
});


//bold italic underline and aligning
var formatItems = document.getElementsByClassName('format-menu-image');

Array.from(formatItems).forEach(function(formatItem){
    formatItem.addEventListener('click', function(){
        var id = formatItem.getAttribute('id');
        switch(id){
            case 'bold':
                document.execCommand(id);
                break;
            case 'italic':
                document.execCommand(id);
                break;
            case 'underline':
                document.execCommand(id);
                break;
            case 'left-align':
                document.execCommand('justifyleft');
                break;
            case 'center-align':
                document.execCommand('justifycenter');
                break;
            case 'right-align':
                document.execCommand('justifyright');
                break;
            case 'justify-text':
                document.execCommand('justifyfull');
                break;
        }
    });
});


//list and indent

var miscItems = document.getElementsByClassName('misc-items');
Array.from(miscItems).forEach( function(miscItem) {
    miscItem.addEventListener('click', function(){
        var id = miscItem.getAttribute('id');
        switch(id){
            case 'numbered-list':
                document.execCommand('insertorderedlist');
                break;
            case 'bullet-list':
                document.execCommand('insertunorderedlist');
                break;
            case 'left-indent':
                document.execCommand('outdent');
                break;
            case 'right-indent':
                document.execCommand('indent');
                break;
        }
    });
});


//headings
var headingItems = document.getElementsByClassName('heading-item');
Array.from(headingItems).forEach(function(headingItem){
    headingItem.addEventListener('click', function(){
        var id = headingItem.getAttribute('id');
        switch(id){
            case 'normal':
                document.execCommand('formatBlock', false, 'p');
                break;
            case 'h1':
                document.execCommand('heading', false, 'H1');
                break;
            case 'h2':
                document.execCommand('formatBlock', false, 'h2');
                break;
            case 'h3':
                document.execCommand('formatBlock', false, 'h3');
                break;
            case 'h4':
                document.execCommand('formatBlock', false, 'h4');
                break;
        }
    });
});

//insert image
var insertItems = document.getElementsByClassName('insert-item');
Array.from(insertItems).forEach(function(insertItem){
    insertItem.addEventListener('click', function(){
        var id = insertItem.getAttribute('id');
        if(id === 'image'){
            var input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';

            input.onchange = ( function(event) {
                var file = event.target.files[0];
                
                var reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function(readerEvent) {
                    var content = readerEvent.target.result;
                    var contentContainer = document.getElementById('content-container');
                    var image = document.createElement('img');
                    image.src = content;
                    image.style.height = '50px';
                    image.style.width = '50px';
                    contentContainer.appendChild(image);
                }
            });

            input.click();

        }else if(id === 'table'){
            
        }
    });
});


//font family
var fontFamily = document.getElementById('family');
fontFamily.addEventListener('change', function(){
    var fontName = fontFamily.options[fontFamily.selectedIndex].text;
    document.execCommand('fontName', false, fontName);
});

//font size
var fontSize = document.getElementById('size');
fontSize.addEventListener('change',function(){
    var font = fontSize.options[fontSize.selectedIndex].text;
    document.execCommand('fontSize', false, font);
});
