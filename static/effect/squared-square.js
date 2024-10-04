document.querySelectorAll(".square").forEach((element) => {
    element.style.gridColumn = `auto / span ${element.dataset.square}`;
  
    element.style.gridRow = `auto / span ${element.dataset.square}`;
    
    element.innerHTML = element.dataset.square
  });
  