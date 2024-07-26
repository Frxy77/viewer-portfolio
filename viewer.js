document.addEventListener("DOMContentLoaded", function() {
    loadProjects();
});

function loadProjects() {
    const projects = JSON.parse(localStorage.getItem('projects')) || {};
    for (const projectType in projects) {
        const gallery = document.querySelector(`#${projectType} .project-gallery`);
        gallery.innerHTML = '';
        projects[projectType].forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            const div = document.createElement('div');
            div.classList.add('project-item');
            div.appendChild(img);
            gallery.appendChild(div);
        });
    }
}
