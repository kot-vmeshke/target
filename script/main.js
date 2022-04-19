let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Переключение между добавлением и удалением класса "active",
        чтобы выделить кнопку, управляющую панелью */
        this.classList.toggle("active");

        /* Переключение между скрытием и отображением активной панели */
        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
    });
}