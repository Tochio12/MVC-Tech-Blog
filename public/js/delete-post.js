const postId = document.querySelector('input[name="post-id"]').value;

async function deleteFormHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            postId: id,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document
    .querySelector('.delete-post-btn')
    .addEventListener('click', deleteFormHandler);