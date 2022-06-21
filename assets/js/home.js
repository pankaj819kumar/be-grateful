// change edit text to save after click
$('.edit').on('click', function () {
    if ($('.edit').text() == 'Edit') {
        $('.edit').text('Save');
        $('.data-container').attr('contenteditable', 'true');
    }
    else {
        $('.edit').text('Edit');
        $('.data-container').attr('contenteditable', 'false');
        var text = $('.data-container').text();
        console.log(text);
    }
});

// resizeable textarea
textarea = document.querySelector("#input");
textarea.addEventListener('input', autoResize, false);
      
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 5 + 'px';
}

// add journal using ajax
$('#btn').on('click', function (event) {
    event.preventDefault();
    $.ajax({
        method: 'POST',
        url: '/add-journal',
        data: {
            journal_data: $('#input').val()
        }
    }).done(function (data) {
        $('#input').val("");
    }).fail(function () {
        window.alert('Request failed');
    })
});