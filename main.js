// Wait for the DOM to be fully loaded
window.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit_btn');
    const input = document.getElementById('todo_input');
    const list = document.getElementById('todo_list');

    // Handle adding new todo items
    submitBtn.addEventListener('click', () => {
        const value = input.value.trim();
        if (value !== '') {
            const li = document.createElement('li');
            li.textContent = value;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'x';
            li.appendChild(removeBtn);

            list.appendChild(li);
            input.value = '';
        } else {
            alert('空的唷 請確定有輸入!');
        }
    });

    // Handle removing todo items using event delegation
    list.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'button') {
            const li = e.target.parentNode;
            list.removeChild(li);
        }
    });
});
