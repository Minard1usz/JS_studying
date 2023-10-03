function fetchPostById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Пост не знайдено');
            }
            return response.json();
        });
}

function fetchCommentsByPostId(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json());
}

function displayPost(post) {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = `
        <h2 class="h2head">${post.title}</h2>
        <p>${post.body}</p>
        <button onclick="fetchComments(${post.id})">Переглянути коментарі</button>
    `;
}

function displayComments(comments) {
    const postContainer = document.getElementById('postContainer');
    const commentsList = document.createElement('ul');
    comments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.textContent = comment.body;
        commentsList.appendChild(commentItem);
    });
    postContainer.appendChild(commentsList);
}

function fetchComments(postId) {
    fetchCommentsByPostId(postId)
        .then(comments => {
            displayComments(comments);
        })
        .catch(error => {
            alert('Не вдалося отримати коментарі.');
            console.error(error);
        });
}

function searchPost() {
    const postId = document.getElementById('postId').value;
    fetchPostById(postId)
        .then(post => {
            displayPost(post);
        })
        .catch(error => {
            alert('Пост не знайдено.');
            console.error(error);
        });
}