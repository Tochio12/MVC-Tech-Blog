async function newFormHandler(event) {
    event.preventDefault();
    
    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postText = document.querySelector('input[name="post-text"]').value;

    const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
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
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler)