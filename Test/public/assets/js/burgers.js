$(function () {
    $(".monch").on("click", (event) => {
    const id = $(this).data("id");

    const monched = {
        eaten: true
    };

    $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: monched
    }).then(() => {
        console.log(`changed eaten to: ${monched}`);
        location.reload();
    });
});

    $(".form").on("submit", (event) => {
        event.preventDefault();
        console.log($("#borg").val())

        const newBorg = {
            name: $("#borg").val().trim(),
            eaten: false,
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBorg
        }).then(() => {
                console.log("created new borg");
                location.reload();
            }
        );
    })
});