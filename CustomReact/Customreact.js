
function customRender(rElement, container){
    /*
    const domElement = document.createElement(rElement.type)
    domElement.innerHTML = rElement.children
    domElement.setAttribute('href',rElement.props.href)
    domElement.setAttribute ('target',rElement.props.target)

    container.appendChild(domElement)
    */
   const domElement = document.createElement(rElement.type)
   domElement.innerHTML = rElement.children
   for (const prop in rElement.props) {
    if(prop == "children"){
        continue;
    }
    domElement.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(domElement)
}


// This is how react try to create the dom tree to render single page application
// It only returns a tag but we can render another
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)


