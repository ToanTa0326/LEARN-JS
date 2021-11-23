//bài 2
var boxHTMLCollection=document.getElementsByClassName('box');

var box1Element=document.querySelector('.box:first-child');

var box2Element=document.querySelector('.box:nth-child(2)');

var allItemElements=document.getElementsByTagName('li');

var box1ItemElements=box1Element.getElementsByClassName('li');

var box2ItemElements=box2Element.getElementsByClassName('li');

//bài 5
var checkboxNodes = document.getElementsByTagName('input');

var checkbox1Element = document.querySelector('input[type="checkbox"][value="1"]');

var checkboxCheckedAndNotDisabled = document.querySelector('input[type="checkbox"]:checked:not(:disabled)');

var checkboxDisabledAndNotChecked = document.querySelector('[type="checkbox"]:disabled:not(:checked)');

var checkboxCheckedAndDisabled = document.querySelector('input[type="checkbox"]:checked:disabled');

// Bài 6
var listItems1=document.querySelectorAll('.parent>li');

var listItems2=document.querySelectorAll('.parent>ul>li');

var listItems3=document.querySelectorAll('.parent>li, .parent>ul>li');
