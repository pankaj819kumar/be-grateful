// change 'edit' text to 'save' after click
$('.edit').on('click', function (event) {
    if ($(this).text() == 'Edit') {
        $(this).text('Save');
        $(this).closest('.data-container').attr('contenteditable', 'true');
    }
    else {
        $(this).text('Edit');
        $(this).closest('.data-container').attr('contenteditable', 'true');
        var text = $(this).closest('.data-container').text();
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
        // refresh page after adding
        $(document).ajaxStop(function () {
            setTimeout(function () {
                window.location.reload();
            }, 500);
        });
    }).fail(function () {
        window.alert('Request failed');
    })
});

$('.delete').on('click', function (event) {
    let id = $(this).closest('div').attr('id');
    $.ajax({
        method: 'DELETE',
        url: '/',
        data: {
            id: id
        },
        success: function (data, status, xhr) {
            $(document).ajaxStop(function () {
                setTimeout(function () {
                    window.location.reload();
                }, 500);
            });
        }
    }).fail(function () {
        console.log("request failed");
    })
})