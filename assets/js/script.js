$(document).ready(function(){
  var label = '#firstName,#lastName';
  $(label).focusout(function(){
    $(label).css({'border': '1px solid red'});
  });
  $(label).focus(function(){
    $(label).css({'border': '1px solid green'});
  });
});
