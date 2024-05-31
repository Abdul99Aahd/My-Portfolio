var Cameras = [
    {
      title: "Sony A7 Mark IV",
      image: "./Sony A7IV.jpg",
      description: "The best full-frame hybrid for enthusiasts",
      
      
    },
    {
      title: "Sony A7R V",
      image: "./Sony A7R V.jpeg",
      description: "The best photography camera for most professionals",
      
    },
    {
      title: "Canon EOS R10",
      image: "./Canon R10.jpeg",
      description: "The best camera for beginners overall",
      
    },
    {
      title: "Canon EOS R7",
      image: "./Canon R7.jpeg",
      description: "The best APS-C camera for enthusiasts",
      
    },
    {
      title: "OM System OM-1",
      image: "./Olympus OM1.jpeg",
      description: "The best Micro Four Thirds camera for enthusiasts",
      
    },
    {
      title: "Fujifilm X100V",
      image: "./FujiFilm x100v.jpeg",
      description: "The best premium compact for beginners",
      
    },
    {
      title: "Olympus OM-D E-M10 Mark IV",
      image: "./Olympus M10IV.jpeg",
      description: "The best value camera for most photographers",
      
    },
    {
      title: "Nikon D3500",
      image: "./Nikon D3500.jpeg",
      description: "The best DSLR camera for beginners",
      
    },
    {
      title: "Fujifilm Instax Mini 12",
      image: "./Instant Camera.jpeg",
      description: "The best instant camera for beginners",
      
    },
    {
      title: "Nikon Z9",
      image: "./Nikon Z9.webp",
      description: "The best hybrid for sports and wildlife photography",
      
    },

  ];
  
  var box = document.getElementById("box");
  
  Cameras.forEach(function (data, ind) {
    
    box.innerHTML += 
    
    `
      <div class="Cameras" id="${+ind}">
      <h1>${data.title}</h1>
      <img src='${data.image}' style: width="500px", height="200px">
      <p>
      <span class="first">Description:</span><span class="last">${data.description}</span>
      
      </p>
      <div class="buttons">
      <button onclick="edit(this)">Edit</button>
      <button onclick="khatam(this)">Delete</button>
      </div>
      </div>`  
  });
  
    function khatam(element){
    var location = element.parentElement.parentElement.id
    Cameras.splice(location, 1, )
    box.innerHTML = "";
    Cameras.forEach(function (data, ind) {  
      box.innerHTML += 
      `
        <div class="fruit" id="${+ind}">
        <h1>${data.title}</h1>
        <img src='${data.image}' style: width="500px", height="200px">
        <p>
        <span class="first">Description:</span><span class="last">${data.description}</span>
        
        </p>
        <div class="buttons">
        <button onclick="edit(this)">Edit</button>
        <button onclick="khatam(this)">Delete</button>
        </div>
        </div>`
    });
  }
  
  function edit(element){
    box.innerHTML = "";
    var location = element.parentElement.parentElement.id
    var category = prompt ('select Category', 'title, image, description')
    var temp = prompt ('Enter New Value', '')
    Cameras.forEach(function (data, ind) { 
      Cameras[location][category] = temp;
      box.innerHTML += 
      ` <div class="Cameras" id="${+ind}">
        <h1>${data.title}</h1>
        <img src='${data.image}' style: width="500px", height="200px">
        <p>
        <span class="first">Description:</span><span class="last">${data.description}</span>
        
        </p>
        <div class="buttons">
        <button onclick="edit(this)">Edit</button>
        <button onclick="khatam(this)">Delete</button>
        </div>
        </div>`
      });
  }
  
   