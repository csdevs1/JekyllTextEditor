$(document).ready(function(){
  /*  $('#title').click(function(){
        $('#editor').append('[title]Hola[/title]');
        $('<h1>Hola</h1>').appendTo('#content');
    });    */
});

function titleFunction() {
    var titleVal = 'title- -title';
    $('#editor').append(titleVal).val();
    var editorVal = $('#editor').val();
   /* $('#editor').remove();
    $('#div').append("<textarea id='editor'>"+editorVal+"</textarea>");*/
    
    if(editorVal.length != 0) {
        $('#editor').remove();
        $('#div').append("<textarea id='editor'>"+editorVal+"</textarea>");
    } else {
        var titleVal = '[title][/title]';
        $('#editor').append(titleVal).val();
    }
}

function preview() {
   // var titleVal = '<h1></h1>';
    var contentVal = $('#content').val();    
    $('#content').remove();
    $('#content-div').append("<span id='content'></span>");
    var editorVal = $('#editor').val();
    
    var editorVal = editorVal.replace(new RegExp("title-", 'g'), "<h1>");
    var editorVal = editorVal.replace(new RegExp("-title", 'g'), "</h1>");
    $('#content').append(editorVal);
}

function clearFunction() {    
    $('#editor').remove();
    $('#div').append("<textarea id='editor'></textarea>");
    document.getElementById("content").innerHTML = " ";
}

function download(){
    var editorVal1 = $('#editor').val();
    var editorVal1 = editorVal1.replace(new RegExp("title-", 'g'), "<h1>");
    var editorVal1 = editorVal1.replace(new RegExp("-title", 'g'), "</h1>");
    var blob = new Blob([editorVal1], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "file.markdown");
}