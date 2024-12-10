
document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('form');
    const output = document.querySelector('output');
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		const title = document.querySelector('input[name="title"]').value;
		const name = document.querySelector('input[name="name"]').value;
		const email = document.querySelector('input[name="email"]').value;
		// Add your form handling logic here
		if(title === '' || name === '' || email === '') {
            alert('Please fill in all fields');
            return;
        }
        else{
            output.querySelector('#title').textContent = title;
            output.querySelector('#name').textContent = name;
            output.querySelector('#email').textContent = email;
        }
		console.log(`Title: ${title}, Name: ${name}, Email: ${email}`);
	});
});