export const createBaseElement = (tag = 'div', className = '', text = '', parent) => {
  const elem = document.createElement(tag);
  elem.className = className;
  elem.textContent = text;
  parent ? parent.append(elem) : false;

  return elem;
};
