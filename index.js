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

                    // Add an on hover effect to a specific item
        const specificItem = images[0]; // Replace 0 with the index of the specific item you want to add the effect to
        specificItem.addEventListener('mouseover', function() {
            specificItem.src = 'images/cube.jpeg' // Create a new image           
        });
        specificItem.addEventListener('click', function() {
            let meditation = prompt("You meditate on an ancient cube", "Earth will be at peace one day");
            if (meditation == null || meditation == "") {
                alert("You hear a voice from the heavens: 'Godspeed'"); // Revert the image source
              } else { 
                alert("Godspeed");
              }
        });
        specificItem.addEventListener('mouseout', function() {
            specificItem.src = 'images/lady.jpeg'; // Revert the image source when the mouse is no longer over the item
        });

        const specificItem2 = images[1]; // Replace 0 with the index of the specific item you want to add the effect to
        specificItem2.addEventListener('mouseover', function() {
            specificItem2.src = 'images/book.jpeg' // Create a new image           
        });
        specificItem2.addEventListener('click', function() {
            let meditation = prompt("You recieve a message from a higher power", "Walk with purpose every day");
            if (meditation == null || meditation == "") {
                alert("The wind howls like a distant voice: 'Do not search for the path, walk it'"); // Revert the image source
              } else { 
                alert("Listen to the wind");
              }
             // Revert the image source when the mouse is no longer over the item
        });
        specificItem2.addEventListener('mouseout', function() {
            specificItem2.src = 'images/lady.jpeg'; // Revert the image source when the mouse is no longer over the item
        });
        const specificItem3 = images[2]; // Replace 0 with the index of the specific item you want to add the effect to
        specificItem3.addEventListener('mouseover', function() {
            specificItem3.src = 'images/wizard.jpeg' // Create a new image           
        });
        specificItem3.addEventListener('click', function() {
            let meditation = prompt("You inherit eternal strength", "The souls of past wisdoms acknowlegde you");
            if (meditation == null || meditation == "") {
                alert("An overwhelming feeling of nostolgia consumes you: 'We have been here before'"); // Revert the image source
              } else { 
                alert("Ancestral spirits guide you");
              } // Revert the image source when the mouse is no longer over the item
        });
        specificItem3.addEventListener('mouseout', function() {
            specificItem3.src = 'images/lady.jpeg'; // Revert the image source when the mouse is no longer over the item
        });
       
    }
    addImage(); // Add an image to the body
}

makeArt2(); // Call the function