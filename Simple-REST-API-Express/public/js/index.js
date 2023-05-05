"use strict";

const button = document.querySelector("button");
const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const userList = document.getElementById("list");

let currentUsers;

const url = "http://localhost:3000/users";
const getInfo = async () => {
	try {
		const response = await fetch(url, {
			method: "GET",
		});

		const data = await response.json();
		const users = data.users;
		return users;
	} catch {
		error;
	}
	{
		console.log(error);
	}
};

const getUsers = async () => {
	currentUsers = await getInfo();
};

getUsers();

const postInfo = async (name, description) => {
	try {
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify({
				name: name,
				description: description,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
	} catch (error) {
		console.log(error);
	}
};

button.addEventListener("click", async (event) => {
	event.preventDefault();
	const nameValue = nameInput.value;
	const descriptionValue = descriptionInput.value;
	if (nameValue.trim().length === 0) {
		nameInput.classList.add("error");
		nameInput.focus();
		return;
	}

	if (descriptionValue.trim().length === 0) {
		descriptionInput.classList.add("error");
		descriptionInput.focus();
		return;
	}
	nameInput.classList.remove("error");
	descriptionInput.classList.remove("error");
	postInfo(nameValue, descriptionValue);
	currentUsers.unshift({ name: nameValue, description: descriptionValue });
	renderList();
});

const renderList = async () => {
	userList.innerHTML = "";
	currentUsers.map((user) => {
		const newElementList = document.createElement("li");
		const userInfoContainer = document.createElement("div");
		const userName = document.createElement("p");
		const nameText = document.createTextNode(`User name: ${user.name}`);
		userName.appendChild(nameText);
		const userDescription = document.createElement("p");
		const descriptionText = document.createTextNode(`Description: ${user.description}`);
		userDescription.appendChild(descriptionText);
		userInfoContainer.appendChild(userName);
		userInfoContainer.appendChild(userDescription);
		newElementList.appendChild(userInfoContainer);
		userList.appendChild(newElementList);
	});
};
