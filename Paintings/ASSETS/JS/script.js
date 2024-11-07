function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

$(document).ready(function () {
    $.ajax({
        url: "ASSETS/JS/paintings.json",
        dataType: "json",
        success: async function (data) {
            let wrapper = $(".wrapper");

            for (let i = 0; i < data.length; i++) {
                let painting = data[i];

                changeBackground(wrapper, painting);

                await sleep(2000);
                if (i === data.length - 1) {
                    i = -1;
                }
            }
        },
    });
});

function changeBackground(element, painting) {
    element.css("background-image", `url(ASSETS/IMG/${painting.path})`);

    if (window.innerWidth <= 500) {
        element.css("background-position-x", painting.position);
    }

    element.find("#painting-title").text(painting.title);
    element.find("#painting-description").text(painting.description);
}
