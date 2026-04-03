$(document).ready(function() {

  $('.chapter_block').hide();

  $('.open_chapter').on('click', function() {
    const $chapter = $(this).closest('.chapter');
    const $panel = $chapter.find('.chapter_block');
    const $icon = $(this).find('img');

    if ($panel.is(':visible')) {
      $panel.slideUp(300);
      $icon.css('transform', 'rotate(0deg)');
    } else {
      $panel.slideDown(300);
      $icon.css('transform', 'rotate(180deg)');
    }
  });
});
