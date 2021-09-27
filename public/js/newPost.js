
const newPostFormHandler = async function(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="postTitle"]').value;
    const body = document.querySelector('textarea[name="postBody"]').value;

    await fetch(`/api/new-post/`, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/dashboard');
};

document.querySelector('.newPostBtn').addEventListener('submit', newPostFormHandler);

