async function commentFormHandler(event) {
    event.preventDefault();

    const commentText = document.querySelector('input[name="comment-body"]').value;
    const postId = document.querySelector('input[name="post-id"]').value;

    if (commentText) {
        const response = await fetch('api/comment', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                commentText,
        }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.status);
        }
    }
}

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);