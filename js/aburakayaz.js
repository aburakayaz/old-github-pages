// Creating line numbers
var i, j;

for (i = 1; i <= 22; i++) {
    var lineNum = document.createElement('div');
    lineNum.className = 'line-number';
    lineNum.innerText = i;
    document.getElementById('line-numbers').appendChild(lineNum);
}

// Styling multi-line comments
var comments = document.getElementsByClassName('multi-line-comment');
var temp, tempArray;

for (i = 0; i < comments.length; i++) {
    temp = comments[i].innerHTML;
    tempArray = temp.split('<br>');
    comments[i].innerHTML = '/**<br>';
    for (j = 0; j < tempArray.length; j++) {
        tempArray[j] = '&nbsp*&nbsp' + tempArray[j];
    }
    temp = tempArray.join('<br>');
    comments[i].innerHTML += temp;
    comments[i].innerHTML += '<br>&nbsp*/';
}