document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
});

async function loadPosts() {
    try {
        const response = await fetch('/api/posts');
        
        if (!response.ok) {
            throw new Error('Chyba při načítání příspěvků');
        }
        
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error:', error);
        displayError('Nepodařilo se načíst příspěvky');
    }
}

function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    
    if (posts.length === 0) {
        container.innerHTML = '<div class="post">Žádné příspěvky k zobrazení</div>';
        return;
    }
    
    container.innerHTML = posts.map(post => `
        <div class="post">
            <h2>${escapeHtml(post.title || 'Bez názvu')}</h2>
            <div class="date">${formatDate(post.date || post.createdAt)}</div>
            <div class="content">${escapeHtml(post.content || post.text || 'Žádný obsah')}</div>
        </div>
    `).join('');
}

function displayError(message) {
    const container = document.getElementById('posts-container');
    container.innerHTML = `<div class="error">${message}</div>`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('cs-CZ', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
