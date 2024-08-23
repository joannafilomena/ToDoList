{
    const tasks = [
        {
            content: "do a list",
            done: false,
        },


    ]

    const render = () => {
        let HTMLString = "";
        for (const task of tasks) {
            HTMLString += `<li class="list__task ${task.done ? "list__task--done" : ""}">${task.content}</li>`
        };

        document.querySelector(".list").innerHTML = HTMLString;
    }
    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
        });
        render();
    }

    const formSubmit = (event) => {
        event.preventDefault();
        const newTask = document.querySelector(".form__input").value.trim();

        if (newTask === "") {
            return;
        }
        addNewTask(newTask);
    }

    const init = () => {
        render();

        const form = document.querySelector(".form");

        form.addEventListener("submit", formSubmit);
    }

    init();
}