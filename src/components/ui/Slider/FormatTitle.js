
export const FormatTitle = (string, classH2, classSpan) => {
    const h2 = document.createElement(`h2`);
    const span = document.createElement(`span`);
    h2.classList.add(classH2);
    const arrayWord = string.split(" ");
  
    if (arrayWord.length === 1) {
      h2.innerHTML = string;
      return h2.outerHTML;
    }
  
    const firstWord = arrayWord.shift();
    h2.innerHTML = `${firstWord} <span class=${classSpan}>${arrayWord.join(" ")}</span>`;
    return h2.outerHTML;
  };