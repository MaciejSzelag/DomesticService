const BurgerLines = document.querySelector(".burger-lines-wrap");
const Menu = document.querySelector(".menu_list");
const list_li_all = document.querySelectorAll(".list_li");
let active = false;

const activeMenu = () => {
    if (active) {
        BurgerLines.classList.add("burger-lines-wrap-active");
        Menu.classList.add("menu_list_active");
        active = !active
    } else if (!active) {
        BurgerLines.classList.remove("burger-lines-wrap-active");
        Menu.classList.remove("menu_list_active");
        active = !active
    }
}
function getCurrentYear() {
    const d = new Date();
    const currentYear = d.getFullYear();
    const beginningYear = "2023-";
    document.querySelector("#displayDateYear").innerText = beginningYear + currentYear;
}
getCurrentYear();
BurgerLines.addEventListener("click", () => {
    activeMenu();
})
list_li_all.forEach((li) => {
    li.addEventListener("click", () => {
        activeMenu();
    })
})
list_li_all.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const delay = 500;
        setTimeout(function () {
            window.location.href = event.target.href;
        }, delay);
    });
});



