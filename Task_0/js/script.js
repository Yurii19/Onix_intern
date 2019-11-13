
window.onload = init;
const confirmTask = "Are you sure you want to change the number of tasks?";


function init() {

	const notificationsNumber = document.getElementById("notifications_value");
	const numberOfComplitedTasks =  document.getElementById("complited-tasks-value");
	const complitedTasks = document.getElementById("complited");
	const numberOfOpenTasks =  document.getElementById("open-tasks-value");
	const openTasks = document.getElementById("open-tasks");
	const picsContainer = document.getElementById("pics");
	const imgs = picsContainer.children;

	picsContainer.addEventListener("click", function(event) {
		const clicked = event.target;
		for (let i = 0; i < imgs.length; i++) {
			if (imgs[i] === clicked) {
				notificationsNumber.innerHTML = i + 1;
			}
		}
	});

	complitedTasks.addEventListener("click", () => {

		const numberOpen = parseInt(numberOfOpenTasks.innerHTML);
		const numberCompleted = parseInt(numberOfComplitedTasks.innerHTML);
		if ( numberOpen > 0) {
			let answer = confirm(confirmTask);
			if (answer) {
				numberOfOpenTasks.innerHTML = numberOpen - 1;
				numberOfComplitedTasks.innerHTML = numberCompleted + 1;
			}
		}
	});
	
}