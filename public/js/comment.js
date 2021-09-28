const commentFormHandler = async function(event) {
    event.preventDefault();

    const commentId = document.querySelector('input[name="postId"]').value;
    const body = document.querySelector('textarea[name="commentBody"]').value;

    await fetch(`/api/post/${postId}`, {
        method: 'POST',
        body: JSON.stringify({ commentId, body }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.reload();
};

document.querySelector('.btn').addEventListener('submit', commentFormHandler);
