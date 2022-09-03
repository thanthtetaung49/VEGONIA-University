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
        // console.log(typeof countertarget, countertarget);

        const getctcontent = +getcountervalue.innerText;
        // console.log(typeof getctcontent, getctcontent);

        const increasenumber = countertarget / 100;
        // console.log(increasenumber);

        if(getctcontent < countertarget) {

            getcountervalue.innerText = increasenumber + getctcontent;
            
            setTimeout(updatecounter, 100);
        }
    }

    updatecounter();
});
// End Students Counter Section
// End JavaScript Area

// 25CT

// setTimeout => initial 200 + 200 + 200
// setInterval => initial 200 + 200 + 400