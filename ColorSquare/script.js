var elArray = document.querySelectorAll(".field>div");
var but = document.querySelector("button");
var range = document.querySelector('input');

elArray.forEach(function(element) {
    element.addEventListener('click', function() {
        but.className = '';
        but.classList.add(element.className);
    });
});

function changeRadius() {
    but.style.borderRadius = range.value + "%";
}

range.addEventListener('change', changeRadius);
changeRadius();

but.addEventListener('mouseenter', function() {
    if (but.style.transform.indexOf('scale') != -1) {
        but.style.transform = but.style.transform.replace('scale(1)', 'scale(1.3)');
    }else{
      but.style.transform = but.style.transform + ' scale(1.3)';
    }
});

but.addEventListener('mouseleave', function() {
    but.style.transform = but.style.transform.replace('scale(1.3)', 'scale(1)');
});


var intervalId;

but.addEventListener('click', function() {

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {
        intervalId = setInterval(function() {
            var transf = but.style.transform;
            var rotateIndex = transf.indexOf('rotate');
            var increment = 3;

            if (rotateIndex != -1) {

                var endRotateIndex = transf.indexOf(')', rotateIndex);
                var rotateString = transf.substr(rotateIndex, endRotateIndex);
                var currentDeg = parseInt(rotateString.match(/\d+/)[0]);
                but.style.transform = but.style.transform.replace(rotateString, 'rotate(' + (currentDeg + increment) + 'deg)');
            } else {
                but.style.transform += ' rotate(0deg)';
            }
        }, 100);
    }
});
