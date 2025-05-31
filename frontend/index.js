async function fetchPosts() {
    try {
        const response = await fetch('http://localhost:5271/api/posts');
        const data = await response.json();
        const posts = data.$values || [];
        console.log('Fetched posts:', posts);
        
        const userId = localStorage.getItem('userId') || '1';
        
        // Populate "My Posts" section
        const myPostsContainer = document.getElementById('my-posts');
        myPostsContainer.innerHTML = '';
        const myPosts = posts.filter(post => post.userId == userId);
        if (myPosts.length === 0) {
            myPostsContainer.innerHTML = '<p>You have no posts yet.</p>';
        } else {
            for (const post of myPosts) {
                const commentsResponse = await fetch(`http://localhost:5271/api/comments?postId=${post.id}`);
                const commentsData = await commentsResponse.json();
                const comments = commentsData.$values || [];

                const postDiv = document.createElement('div');
                postDiv.className = 'post';
                postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.text}</p>
                    <p><small>Posted by ${post.user?.email || 'Unknown'} on ${new Date(post.timestamp).toLocaleString()}</small></p>
                    ${post.userId == userId ? '<button class="delete-post-btn" data-post-id="' + post.id + '">Delete Post</button>' : ''}
                    <div class="comments-container">
                        <h4>Comments</h4>
                        ${comments.length > 0 ? comments.map(comment => `
                            <div class="comment">
                                <p>${comment.text}</p>
                                <p><small>Commented by ${comment.user?.email || 'Unknown'} on ${new Date(comment.timestamp).toLocaleString()}</small></p>
                                ${comment.userId == userId ? '<button class="delete-comment-btn" data-comment-id="' + comment.id + '">Delete Comment</button>' : ''}
                            </div>
                        `).join('') : '<p>No comments yet.</p>'}
                    </div>
                    <form class="create-comment-form" data-post-id="${post.id}">
                        <textarea class="comment-text" placeholder="Add a comment..." required></textarea>
                        <input type="hidden" class="comment-user-id" value="${userId}">
                        <button type="submit">Comment</button>
                    </form>
                `;
                myPostsContainer.appendChild(postDiv);
            }
        }

        // Populate "All Posts" section
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = '';
        for (const post of posts) {
            const commentsResponse = await fetch(`http://localhost:5271/api/comments?postId=${post.id}`);
            const commentsData = await commentsResponse.json();
            const comments = commentsData.$values || [];

            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.text}</p>
                <p><small>Posted by ${post.user?.email || 'Unknown'} on ${new Date(post.timestamp).toLocaleString()}</small></p>
                ${post.userId == userId ? '<button class="delete-post-btn" data-post-id="' + post.id + '">Delete Post</button>' : ''}
                <div class="comments-container">
                    <h4>Comments</h4>
                    ${comments.length > 0 ? comments.map(comment => `
                        <div class="comment">
                            <p>${comment.text}</p>
                            <p><small>Commented by ${comment.user?.email || 'Unknown'} on ${new Date(comment.timestamp).toLocaleString()}</small></p>
                            ${comment.userId == userId ? '<button class="delete-comment-btn" data-comment-id="' + comment.id + '">Delete Comment</button>' : ''}
                        </div>
                    `).join('') : '<p>No comments yet.</p>'}
                </div>
                <form class="create-comment-form" data-post-id="${post.id}">
                    <textarea class="comment-text" placeholder="Add a comment..." required></textarea>
                    <input type="hidden" class="comment-user-id" value="${userId}">
                    <button type="submit">Comment</button>
                </form>
            `;
            postsContainer.appendChild(postDiv);
        }

        // Add event listeners for comment forms
        document.querySelectorAll('.create-comment-form').forEach(form => {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const postId = form.getAttribute('data-post-id');
                const text = form.querySelector('.comment-text').value;
                const userId = form.querySelector('.comment-user-id').value;

                try {
                    const response = await fetch('http://localhost:5271/api/comments', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ text, postId: parseInt(postId), userId: parseInt(userId) }),
                    });
                    if (response.ok) {
                        form.reset();
                        fetchPosts();
                    } else {
                        console.error('Error creating comment:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error creating comment:', error);
                }
            });
        });

        // Add event listeners for delete buttons
        document.querySelectorAll('.delete-post-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                e.preventDefault();
                const postId = button.getAttribute('data-post-id');
                const userId = localStorage.getItem('userId') || '1';
                try {
                    const response = await fetch(`http://localhost:5271/api/posts/${postId}`, {
                        method: 'DELETE',
                        headers: {
                            'userId': userId
                        }
                    });
                    if (response.ok) {
                        fetchPosts();
                    } else {
                        console.error('Error deleting post:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error deleting post:', error);
                }
            });
        });

        document.querySelectorAll('.delete-comment-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                e.preventDefault();
                const commentId = button.getAttribute('data-comment-id');
                const userId = localStorage.getItem('userId') || '1';
                try {
                    const response = await fetch(`http://localhost:5271/api/comments/${commentId}`, {
                        method: 'DELETE',
                        headers: {
                            'userId': userId
                        }
                    });
                    if (response.ok) {
                        fetchPosts();
                    } else {
                        console.error('Error deleting comment:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error deleting comment:', error);
                }
            });
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Handle form submission to create a new post
document.getElementById('create-post-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const text = document.getElementById('text').value;
    const userId = localStorage.getItem('userId') || '1';

    try {
        const response = await fetch('http://localhost:5271/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, text, userId: parseInt(userId) }),
        });
        if (response.ok) {
            document.getElementById('create-post-form').reset();
            fetchPosts();
        } else {
            console.error('Error creating post:', response.statusText);
        }
    } catch (error) {
        console.error('Error creating post:', error);
    }
});

// Check user status and handle logout
function checkUserStatus() {
    const userId = localStorage.getItem('userId');
    const userInfo = document.getElementById('user-info');
    const logoutBtn = document.getElementById('logout-btn');
    if (userId) {
        userInfo.textContent = `Logged in as User ID: ${userId}`;
        logoutBtn.style.display = 'block';
    } else {
        userInfo.textContent = 'Not logged in';
        logoutBtn.style.display = 'none';
    }
}

document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('userId');
    checkUserStatus();
    fetchPosts();
    alert('Logged out successfully!');
});

// Call checkUserStatus and fetchPosts on page load
window.onload = () => {
    checkUserStatus();
    fetchPosts();
};