import './style.css';
import './normalize.css';

createPage();

function createPage(){
    let content = document.getElementById('content');

    // create sidebar
    let sidebar = document.createElement('div')
    sidebar.classList.add('rs-sidebar');

    //create 3 elements
    const el1 = document.createElement('div');
    el1.classList.add('rs-sidebar-button1');
    el1.innerText = 'Home';

    const el2 = document.createElement('div');
    el2.classList.add('rs-sidebar-button2');
    el2.innerText = 'About';

    const el3 = document.createElement('div');
    el3.classList.add('rs-sidebar-button3');
    el3.innerText = 'Contact';

    // append elements
    sidebar.appendChild(el1);
    sidebar.appendChild(el2);
    sidebar.appendChild(el3);

    // create main
    let main = document.createElement('div');
    main.classList.add('rs-main');
    
    content.append(sidebar);
    content.append(main);
}

