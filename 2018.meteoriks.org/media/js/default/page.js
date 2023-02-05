$(function() {
    // Category detail modal
    $('.show-category-description').on('click', function (event) {
        var headline = $(this).parent().parent().find('h3').html();
        var description = $(this).parent().parent().find('.detail').html();

        $('#category-description .modal-title').html(headline);
        $('#category-description .modal-body').html(nl2br(description));
    });
});

function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}