window.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag');
    const items = document.querySelectorAll('.item');
  
    tags.forEach(tag => {
      tag.addEventListener('click', function() {
        const filter = tag.getAttribute('data-filter');
  
        // Reset background color for all tags
        tags.forEach(t => {
          t.style.backgroundColor = '';
          t.style.color = 'black';
          t.classList.remove('active');
        });
  
        // Set background color for the clicked tag
        tag.style.backgroundColor = 'purple';
        tag.style.color = 'white';
        tag.classList.add('active');
  
        items.forEach(item => {
          item.style.display = 'none';
  
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
          }
        });
      });
    });
  });
  
  