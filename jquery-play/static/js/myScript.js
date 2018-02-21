$(document).ready(function() {
  // console.log('myScript.js loaded!');
  $('#red-sentence').hover(function() {
    // First remove the purple-text class in case it was added first.
    $(this).removeClass('purple-text');
    // Then add the red-text class to turn the sentence red.
    $(this).addClass('red-text');
  });

  $('#blue-button').click(function() {
    // We can also "chain" methods together like this:
    $('#blue-sentence')
    .removeClass('purple-text')
    .addClass('blue-text');
  });

  $('#purple-button').click(function() {
x  });

  $('#sans-font-sentence').click(function() {
    $(this).removeClass('purple-text');
    $(this).addClass('sans-text');
  });
  $('#pink-sentence').hover(function() {
    $(this).removeClass('purple-text');
    $(this).addClass('pink-text');
  });

});
