function makeArt() { 
    const images = [];  // Array to store images
    
    function makeImage() {
        const pic = document.createElement('img'); 
        pic.setAttribute("class", "pictures"); // Create an image element
        pic.src = 'images/hexagons.svg'; // Set the image source
        images.push(pic); // Add the image to the array
        return pic;
    }

    function addImage() {
        const container = document.getElementById('container');
        for (let i = 0; i < 5; i++) {
            const img = makeImage(); // Create an image
            container.appendChild(img); // Add the image to the body
            };
           
        const size = document.getElementsByTagName("img");
        for (let k = 0; k < images.length; k++) {
            size[k].style.transform = `rotate(${k * 45}deg)`;  
            size[k].style.height = `${50 * k }px`; 
            size[k].style.width = `${50 * k }px`; 
            size[k].style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            };
    }
    addImage(); // Add an image to the body
};

makeArt(); // Call the function


function makeArt2() { 
    const images = [];  // Array to store images
    
    function makeImage() {
        const pic = document.createElement('img'); 
        pic.setAttribute("class", "pictures2"); // Create an image element
        pic.src = 'images/lady.jpeg'; // Set the image source
        images.push(pic); // Add the image to the array
        return pic;
    }

    function addImage() {
        const container = document.getElementById('container2');
        for (let i = 0; i < 3; i++) {
            const img = makeImage(); // Create an image
            container.appendChild(img); // Add the image to the body
            };
           
        const size = document.getElementsByTagName("img");
        for (let k = 0; k < images.length; k++) {
            size[k].style.transform = `rotate(${k * 45}deg)`;  
            size[k].style.height = `${100 * k }px`; 
            size[k].style.width = `${100 * k }px`; 
            size[k].style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            };

            addHoverAndClickEffect(images[0], 'images/cube.jpeg', 'You meditate on an ancient cube', 'Earth will be at peace one day', 'You hear a voice from the heavens: \'Godspeed\'', 'Godspeed');
            addHoverAndClickEffect(images[1], 'images/book.jpeg', 'You receive a message from a higher power', 'Walk with purpose every day', 'The wind howls like a distant voice: \'Do not search for the path, walk it\'', 'Listen to the wind');
            addHoverAndClickEffect(images[2], 'images/wizard.jpeg', 'You inherit eternal strength', 'The souls of past wisdoms acknowledge you', 'An overwhelming feeling of nostalgia consumes you: \'We have been here before\'', 'Ancestral spirits guide you');
    }
            function addHoverAndClickEffect(item, hoverSrc, promptMessage, promptDefault, alertMessage, alertDefault) {
                item.addEventListener('mouseover', function() {
                    item.src = hoverSrc; // Change the image source on hover
                });
                item.addEventListener('click', function() {
                    let meditation = prompt(promptMessage, promptDefault);
                    if (meditation == null || meditation == "") {
                        alert(alertMessage); // Show alert if prompt is empty or cancelled
                    } else { 
                        alert(alertDefault);
                    }
                });
                item.addEventListener('mouseout', function() {
                    item.src = 'images/lady.jpeg'; // Revert the image source when the mouse is no longer over the item
                });
            

        
    }
    addImage(); // Add an image to the body
}

makeArt2(); // Call the function

function customAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550/2)+"px";
        dialogbox.style.top = "30%";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "A message from before time";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="alert.ok()">I accept my fate</button><button onclick="alert.ok()">I challenge the universe</button>';
        
    }
    this.ok = function(){
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}
var alert = new customAlert();
alert.render()
