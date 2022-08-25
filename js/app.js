// Start JQuery Area 
$(document).ready(function () {
    
    // Start Header 
        // Start Nav Bar
        $(".navbuttons").click("click", function() {

            $(this).toggleClass("crossxs");
        });
        // End Nav Bar 
    // End Header 
});

// End JQuery Area

// Start JavaScript Area 
// Start Students Counter Section 
var getcountervalues = document.querySelectorAll(".countervalues");
// console.log(getcountervalues);

getcountervalues.forEach(function(getcountervalue) {

    getcountervalue.textContent = 0;

    // console.log(getcountervalue);

    const updatecounter = function() {
        // console.log("i am working");

        const countertarget = +getcountervalue.getAttribute("data-target");
        console.log(typeof countertarget, countertarget);

        const getctcontent = +getcountervalue.textContent;
        console.log(typeof getctcontent, getctcontent);

        const increasenumber = countertarget / 100;
        console.log(increasenumber);

        if(getctcontent < countertarget) {

            getcountervalue.innerText = countertarget + increasenumber;
            
            setTimeout(updatecounter, 1000);
        }
    }

    updatecounter();
});
// End Students Counter Section
// End JavaScript Area 

// 25CT