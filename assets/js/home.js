// change 'edit' text to 'save' after click
var edit = true;
$('.edit').on('click', function (event) {
    let dataDiv = $(this).closest('.journal-top').next();
    if (edit) {
        $(this).html('<i class="fa-solid fa-check"></i>');
        dataDiv.attr('contenteditable', 'true');
        dataDiv.css({
            'background-color': 'rgba(253,253,253,1)',
            border: '1px solid #fdf1f4'
        })
        edit = !edit;
        setEndOfContenteditable(dataDiv[0]);
    }
    else {
        edit = !edit;
        $(this).html('<i class="fa-solid fa-pen">');
        dataDiv.attr('contenteditable', 'false');
        var text = dataDiv.text();
        let id = $(this).closest('div').attr('id');
        updateJournal(text, id);
        dataDiv.css({
            'background-color': '#f5f9fc',
            border: 'none'
        })
    }
});

// resizeable textarea
textarea = document.querySelector("#input");
textarea.addEventListener('input', autoResize, false);
      
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 5 + 'px';
}

// placing cursor in div during edit
function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    range = document.createRange();
    range.selectNodeContents(contentEditableElement);
    range.collapse(false);
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

// TODO do this without page reload
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
    }).fail(function (err) {
        window.alert('Request failed', err);
    })
});

$('.delete').on('click', function (event) {
    // this refers to the elemnt which triggered the event
    let id = $(this).closest('div').attr('id');
    $.ajax({
        method: 'DELETE',
        url: '/',
        data: {
            id: id
        },
        success: function (data, status, xhr) {
            // refresh after some to for changes to take effect
            $(document).ajaxStop(function () {
                setTimeout(function () {
                    window.location.reload();
                }, 500);
            });
        }
    }).fail(function (err) {
        console.log("delete request failed", err);
    })
})

function updateJournal(text, id) {
    $.ajax({
        method: 'PUT',
        url: '/',
        data: {
            new_journal_data: text,
            id:id
        },
        success: function (data, status, xhr) {
            console.log('data updated successfully, id:', id);
        }
    }).fail(function (err) {
        console.log('update request failed:', err);
    })
}