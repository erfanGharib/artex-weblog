const createElement = ({
        tagName = 'div', // tag name
        target = 'body', // target element
        targetIndex = 0,
        insertAsChild = true, // append as child or insert before
        inner = '', // inner html
        cls = '', // classes
        id = '', 
    }) => {

    const element = document.createElement(tagName);
    const target_element_$dom = document.querySelectorAll(target)[targetIndex];

    element.innerHTML = inner;
    if (id !== '') element.id = id;
    if (typeof cls !== 'object' && cls !== '') element.classList.add(cls);
    else if (typeof cls === 'object') cls.forEach(value => element.classList.add(value));

    if (insertAsChild) {
        try { target_element_$dom.appendChild(element); }
        catch (err) {
            throw `Can not set properties of ${err.messsage} : appendChild of ${target_element}`;
        }
    }
    else if (insertAsChild === false) {
        try { target_element_$dom.parentNode.insertBefore(element, target_element_$dom); }
        catch (err) {
            throw `Can not set properties of ${err.messsage} : insertBefore of ${target_element}`;
        }
    }
}
export default createElement;