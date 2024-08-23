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
            HTMLString += `<li class="list__task ${task.done ? "list__task--done" : ""}"><button class="list__button--done">Done</button>${task.content}<button class="list__button--remove">Remove</button></li>`
        };

        document.querySelector(".list").innerHTML = HTMLString;

        const removeButtons = document.querySelectorAll(".list__button--remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const doneButtons = document.querySelectorAll(".list__button--done");
        doneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                changeTaskStatus(index);
            })
        })
    };

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
        });
        render();
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const changeTaskStatus = (index) => {
        tasks[index].done = !tasks[index].done;
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