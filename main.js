	var submitBtn = document.getElementById('submit_btn');
	submitBtn.addEventListener('click', function() {
	    var todoInput = document.getElementById('todo_input').value;
	    var result = document.getElementById('todo_list');

	    if (todoInput !== '') {
	        var todo = document.createElement('li');
	        todo.innerHTML = todoInput + '<button>x</button>';
	        result.appendChild(todo);
	        document.getElementById('todo_input').value = "";
	    } else {
	        alert('空的唷 請確定有輸入!')
	    }

	    result.addEventListener('click',function(e){
	    	e.target.parentNode.parentNode.removeChild(e.target.parentNode);
	    })

	});
