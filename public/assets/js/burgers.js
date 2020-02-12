$(function () {
    $(".monch").on("click", (event) => {
        // console.log(event)
        // const id = $(this).attr("data-id");
        // console.log(`burger.js says this: ${$(this)}`)
        // console.log(`burgers.js says: ${id}`);
        // console.log(event.toElement.dataset.id)
        const id = event.toElement.dataset.id;
        const eaten = event.toElement.dataset.eaten;
        const name = event.toElement.dataset.type;

        console.log(`${id}. ${name} - ${eaten}`)

    const isEaten = {
        eaten: true
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isEaten
    }).then(() => {
        console.log(`changed eaten to: ${isEaten}`);
        location.reload();
    });
});

    $("#new-burg").on("click", event => {
        event.preventDefault();
        console.log($("#borg").val());
        const newBorg = {
            name: $("#borg")
                .val()
                .trim(),
            eaten: false
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBorg
        }).then(() => {
            console.log("created new borg");
            location.reload();
        });
    });
});