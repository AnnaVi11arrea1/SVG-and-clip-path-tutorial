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
    }
  
    addImage(); // Add an image to the body

};

makeArt2(); // Call the function
