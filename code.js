$(document).ready(function (){

    $("showSchedule").click(yourSchedule)

    function yourSchedule(event)
    {
        event.preventDefault();
        var whatDay = $("[name=days]:checked").val();
        switch(whatDay){

            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
                console.log("Go to Work.")
                break;
            case "friday":
                console.log("Go to Work. Then party.")
                break;
            case "saturday":
                console.log("Volleyball. Then Relax.")
                break;
            case "sunday":
                console.log("Church. Then family time.")

        }
        $("#output").text(whatDay);

    }
});