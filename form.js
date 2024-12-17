document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('form');
	const output = document.querySelector('output');
	const profaneWords = ['shit', 'дерьмо', 'mierda']; // Add your list of profane words here

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

		// Profanity check for title
		const containsProfanity = profaneWords.some(word => title.toLowerCase().includes(word));
		if (containsProfanity) {
			alert('Please avoid using profane words in the title');
			return;
		}

		output.querySelector('#title').textContent = title;
		output.querySelector('#name').textContent = name;
		output.querySelector('#email').textContent = email;

		console.log(`Title: ${title}, Name: ${name}, Email: ${email}`);
	});
});
function setStyle(value){
	console.log(value);
	document.body.className = value;
	
}