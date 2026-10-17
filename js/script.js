function saveInfo(event) {
    event.preventDefault();

    const fields = document.querySelectorAll("input, textarea, select");

    fields.forEach(field => {
        localStorage.setItem(field.name, field.value);
    });
}

function loadInfo() {
    const fields = document.querySelectorAll("input, textarea, select");

    fields.forEach(field => {
        const saved = localStorage.getItem(field.name);

        if (saved !== null) {
            field.value = saved;
        }
    });
    updateTheme();
}

function updateTheme() {
    document.body.dataset.theme = emoji.value;
    localStorage.setItem("emoji", emoji.value);
}
function updateTheme() {
    document.body.dataset.theme = emoji.value;
    localStorage.setItem("emoji", emoji.value);
}
function resetInfo() {
    localStorage.clear();
    document.querySelector("form").reset();
}

window.addEventListener("load", loadInfo);


const emoji = document.getElementById("emoji");

function updateTheme() {
    document.body.dataset.theme = emoji.value;
}

emoji.addEventListener("change", updateTheme);

 /* const emoji = document.getElementById("emoji");
        emoji.addEventListener("change", () => {
            document.body.dataset.theme = emoji.value;});

        document.body.dataset.theme = emoji.value;

    */ 