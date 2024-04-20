import fetchData from "./fetchData.js";

// JavaScript
document.addEventListener('DOMContentLoaded', async () => {
    const sizeSelector = document.getElementsByClassName('size-grp');
    const colorSelector = document.querySelector('.color-grp');

    const data = await fetchData();
  
    const productData = data.product.options;
  
    const sizeOptions = productData.find(option => option.name === "Size");
    const colorOptions = productData.find(option => option.name === "Color");
  
    if (sizeOptions) {
      sizeOptions.values.forEach((size, index) => {
          const sizeDiv = document.createElement('div');
          sizeDiv.classList.add('variant-size');
          sizeDiv.id = `variant-size-${index + 1}`;
  
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = 'size';
          input.value = size;
          input.id = `size-${index + 1}`;
  
          const label = document.createElement('label');
          label.setAttribute('for', `size-${index + 1}`);
          label.textContent = size;
  
          sizeDiv.appendChild(input);
          sizeDiv.appendChild(label);
  
          sizeSelector[0].appendChild(sizeDiv);
  
          // Check the first radio button by default
          if (index === 0) {
              input.checked = true;
              sizeDiv.style.backgroundColor = '#EDF0F8';
          }
  
          // Add event listener to change background color on radio button change
          input.addEventListener('change', () => {
              const selectedDiv = document.getElementById(`variant-size-${index + 1}`);
              sizeOptions.values.forEach((_, i) => {
                  const div = document.getElementById(`variant-size-${i + 1}`);
                  div.style.backgroundColor = i === index ? '#EDF0F8' : '#F3F3F3';
              });
          });
      });
  }
  
  

  if (colorOptions) {
    colorOptions.values.forEach((color, index) => {
      const colorVariantDiv = document.createElement('div');
      const variantId = `colors-variant-${index + 1}`;
      colorVariantDiv.id = variantId;
      colorVariantDiv.classList.add('colors-variant');
      colorVariantDiv.style.backgroundColor = color[Object.keys(color)];
  
      // Add click event listener to select the color variant
      colorVariantDiv.addEventListener('click', () => {
        // Clear outline from any previously selected div
        const previouslySelectedDiv = document.querySelector('.colors-variant.selected-color');
        if (previouslySelectedDiv) {
          previouslySelectedDiv.classList.remove('selected-color');
        }
  
        // Apply outline with matched color using a CSS class
        colorVariantDiv.classList.add('selected-color');
  
        // Dynamically extract background color and set outline
        const outlineColor = colorVariantDiv.style.backgroundColor;
        colorVariantDiv.style.outline = `3px solid ${outlineColor}`; // Adjust inset as needed
      });
  
      colorSelector.appendChild(colorVariantDiv);
  
      // Check the first color variant by default
      if (index === 0) {
        colorVariantDiv.click();
      }
    });
  }
  


    

  });
  