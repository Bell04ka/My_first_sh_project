onload = () => {
    let button = document.getElementById("knopka");
    button.onclick = () => {
        let name = prompt("Enter the name:");
        let phone = prompt("Enter the phone:");
        let tasks = document.getElementById("zadaniya");
        let taskNode = document.createElement("tr");
        taskNode.classList.add("item");
        taskNode.innerHTML = `<td>${name}</td><td>${phone}</td>`;
        tasks.append(taskNode);

        taskNode.onclick = () => {
            if (!taskNode.classList.contains("done")) {
                taskNode.classList.add("done");
                let remove = confirm("Remove?");
                if (remove) {
                    taskNode.remove();
                }
            } else {
                taskNode.classList.remove("done");
            }
        }
    };

    let filter = document.getElementById("filtr");
    filter.addEventListener('keyup', () => {
        document.querySelectorAll("#zadaniya .item").forEach((node) => {
            if (node.innerHTML.match(filter.value)) {
                node.classList.remove("hide");
            } else {
                node.classList.add("hide");
            }
        })
    });

}