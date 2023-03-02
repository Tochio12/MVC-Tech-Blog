const postId = document.querySelector('input[name="post-id"]').value;

async function editFormHandler(event) {
    event.preventDefault();

    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postText = document.querySelector('input[name="post-text"]').value;

    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id,
            postTitle,
            postText,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document
    .querySelector('.edit-post-form')
    .addEventListener('submit', editFormHandler);