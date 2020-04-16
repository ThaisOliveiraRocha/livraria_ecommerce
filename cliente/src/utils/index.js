export const replaceSpecialCharacter = text => {
    let newText = text.toLowerCase();
    newText = newText.replace(/[ÀÁÂÃÄÅ]/g, 'A');
    newText = newText.replace(/[àáâãäå]/g, 'a');
    newText = newText.replace(/[ÈÉÊË]/g, 'E');
    newText = newText.replace(/[éèẽê]/g, 'e');
    newText = newText.replace(/[íìĩî]/g, 'i');
    newText = newText.replace(/[ÍÌĨÎ]/g, 'I');
    newText = newText.replace(/[óòõô]/g, 'o');
    newText = newText.replace(/[ÓÒÕÔ]/g, 'O');
    newText = newText.replace(/[úùũû]/g, 'u');
    newText = newText.replace(/[ÚÙŨÛ]/g, 'U');
    newText = newText.replace(/[ç]/g, 'c');
    newText = newText.replace(/[Ç]/g, 'C');
    return newText;
  };