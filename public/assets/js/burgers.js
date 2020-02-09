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

$("")