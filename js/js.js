$(document).ready(function() {
    $('.comment:contains("Admin")').addClass('admin');
});
$('.read-more').click(function(e) {
    e.preventDefault(); 
    let nextParagraph = $(this).closest('.content').find('p.hidden:first');
    if (nextParagraph.length > 0) {
        nextParagraph.removeClass('hidden');
        $(this).appendTo(nextParagraph);
    }
    if ($(this).closest('.content').find('p.hidden').length === 0) {
        $(this).hide();
    }
});
$(document).ready(function() {
    $('.toggle-panel').click(function() {
        let content = $(this).closest('.panel').find('.content1');
        content.slideToggle(400, function() {
            $(this).closest('.panel').find('.toggle-panel').text($(this).is(':visible') ? 'Закрыть \u25B2' : 'Открыть \u25BC');
        });
    });
});