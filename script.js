
function navigateTo(section) {
    window.location.hash = section;
}

function submitComment(event, formId, commentListId) {
    event.preventDefault();
    
    var form = document.getElementById(formId);
    var commentList = document.getElementById(commentListId);
    var name = form.elements['name'].value;
    var message = form.elements['message'].value;

    if (name && message) {
        var comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerHTML = `<p><strong>${name}:</strong> ${message}</p>`;
        
        commentList.appendChild(comment);
        
        form.reset();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (href.startsWith("#")) {  // Check if the link is an internal section
                event.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    sections.forEach(section => section.classList.remove('highlight'));
                    targetSection.classList.add('highlight');
                }
            } else {  // If the link is not an internal section, allow the default behavior
                return true;
            }
        });
    });
});


