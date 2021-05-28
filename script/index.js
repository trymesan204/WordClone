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
// var headingItems = document.getElementsByClassName('heading-item');
// Array.from(headingItems).forEach(function(headingItem){
//     headingItem.addEventListener('click', function(){
//         var id = headingItem.getAttribute('id');
//         switch(id){
//             case 'normal':
//                 document.execCommand('formatBlock', false, 'p');
//                 break;
//             case 'h1':
//                 document.execCommand('formatblock', false, "h1");
//                 content.focus();
//                 break;
//             case 'h2':
//                 document.execCommand('formatBlock', false, 'h2');
//                 break;
//             case 'h3':
//                 document.execCommand('formatBlock', false, 'h3');
//                 break;
//             case 'h4':
//                 document.execCommand('formatBlock', false, 'h4');
//                 break;
//         }
//     });
// });

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
            console.log('hell0');
            var table = document.createElement('table');
            table.style.height = '100px';
            for ( var i = 0; i<3; i++){
                var row = document.createElement('tr');
                for ( var j = 0; j < 3; j++){
                    var cell = document.createElement('td');
                    var div = document.createElement('div');
                    div.contentEditable = true;
                    cell.appendChild(div);
                    cell.style.width = '100px';
                    cell.style.border = '1px solid black';
                    row.append(cell);
                }
                table.append(row);
            }
            var contentContainer = document.getElementById('content-container');
            contentContainer.appendChild(table);
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
    var font = fontSize.options[fontSize.selectedIndex].value;
    document.execCommand('fontSize', false, font);
});


//font color
var textColor = document.getElementById('color-text');
textColor.addEventListener('click', function(){
    var colorText = document.getElementById('text-color');
    colorText.addEventListener('input', function(){
        document.execCommand('foreColor', false, colorText.value);
    });
    colorText.click();
});


//background color
var backgroundColor = document.getElementById('color-background');
backgroundColor.addEventListener('click', function(){
    var colorBack = document.getElementById('background-color');
    colorBack.addEventListener('input', function(){
        document.execCommand('backColor', false, colorBack.value);
    });
    colorBack.click();
});


//content container
var content = document.getElementById('content');
content.focus();


var h1 = document.getElementById('h1');
h1.addEventListener('click', function(){
    document.execCommand('formatblock', false, '<h1>');
    content.focus();
});

var h2 = document.getElementById('h2');
h2.addEventListener('click', function(){
    document.execCommand('formatblock', false, '<h2>');
    content.focus();
});

var h3 = document.getElementById('h3');
h3.addEventListener('click', function(){
    document.execCommand('formatblock', false, '<h3>');
    content.focus();
});

var h4 = document.getElementById('h4');
h4.addEventListener('click', function(){
    document.execCommand('formatblock', false, '<h4>');
    content.focus();
});

var normal = document.getElementById('normal');
normal.addEventListener('click', function(){
    document.execCommand('formatblock', false, 'p');
    content.focus();
});


//create new page
var pageCount = 0;

window.addEventListener('keyup', function(event){
    if (event.keyCode === 13  && event.ctrlKey){
        var content = document.getElementById('content-container');
        var clone = content.cloneNode(true);
        clone.style.marginTop = '25px';
        var body = document.getElementById('rest-body');
        body.appendChild(clone);
        
        var allContents = document.getElementsByClassName('content');
        allContents[allContents.length-1].innerHTML = '';
        allContents[allContents.length-1].focus();

        if(pageNumberSelected){
            var lastFooter = document.getElementsByClassName('footer-input');
            pageCount++;
            lastFooter[lastFooter.length-1].innerHTML = pageCount;
        }
    }
});


//insert page number
var pageNumberSelected = false;
var pageNumber = document.getElementById('insert-page');

pageNumber.addEventListener('click', function(){
    var footerItems = document.getElementsByClassName('footer-input');
    if(!pageNumberSelected){
        Array.from(footerItems).forEach(function(footerItem){
            pageCount++;
            console.log('works');
            footerItem.innerHTML = pageCount;
        });
    }else{
        Array.from(footerItems).forEach(function(footerItem){
            footerItem.innerHTML = '';
        });
        pageCount = 0;
    }
    pageNumberSelected = !pageNumberSelected;
});


//insert header
var headers = content.getElementsByClassName('header-input');
