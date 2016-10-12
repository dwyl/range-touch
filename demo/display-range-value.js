$(function() {
  // display value of range while sliding
  $("input.display-value").change( function(){
    $(this).next().val($(this).val());
  })

  // see: http://stackoverflow.com/a/18389801/1148249
  $('input[type="range"]').change(function () {
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, '
        + 'color-stop(' + val + ', #94A14E), '
        + 'color-stop(' + val + ', #C5C5C5)'
        + ')'
      );
  });
}());
