  
$(document).ready(function () {

    var gmtTime = moment();
    var localTime = gmtTime.local().format("dddd, MMMM Do YYYY, hh:mm:ss a");
    $("#currentDay").text(localTime);

    function renderStorage() {
        $("#nine").text(JSON.parse(localStorage.getItem("hour-9")));
        $("#ten").text(JSON.parse(localStorage.getItem("hour-10")));
        $("#eleven").text(JSON.parse(localStorage.getItem("hour-11")));
        $("#twelve").text(JSON.parse(localStorage.getItem("hour-12")));
        $("#one").text(JSON.parse(localStorage.getItem("hour-1")));
        $("#two").text(JSON.parse(localStorage.getItem("hour-2")));
        $("#three").text(JSON.parse(localStorage.getItem("hour-3")));
        $("#four").text(JSON.parse(localStorage.getItem("hour-4")));
        $("#five").text(JSON.parse(localStorage.getItem("hour-5")));
    }
    
    renderStorage();

    function colorConditions(element, number) {
        if (new Date().getHours() > number)
{
            element.addClass("past")
        } else if (new Date().getHours() === number) {
            element.addClass("current")
        } else {
            element.addClass("future")
        }
    }
    colorConditions($("#nine"), 09);
    colorConditions($("#ten"), 10);
    colorConditions($("#eleven"), 11);
    colorConditions($("#twelve"), 12);
    colorConditions($("#one"), 13);
    colorConditions($("#two"), 14);
    colorConditions($("#three"), 15);
    colorConditions($("#four"), 16);
    colorConditions($("#five"), 17);

    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".text-input").val();
        localStorage.setItem(time, JSON.stringify(value));
    });
});