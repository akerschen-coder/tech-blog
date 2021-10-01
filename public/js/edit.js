// edit post and delete on edit-post
const editFormHandler = async function(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="postTitle"]').value;
    const body = document.querySelector('input[name="postBody"]').value;

    await fetch(`/api/post/${postId}`, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/dashboard');
};

const deleteFormHandler = async function(event) {
    event.preventDefault();
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
    });
    document.location.replace('/dashboard');
}

document.querySelector('#editPost').addEventListener('submit', editFormHandler);

document.querySelector('.deleteBtn').addEventListener('click', deleteFormHandler); 

