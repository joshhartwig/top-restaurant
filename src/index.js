createPage();

function createPage(){
    let content = document.getElementById('content');

    const sidebar = createSidebar();
    const main = createMain();

    content.appendChild(sidebar);
    content.appendChild(main);
}

function createSidebar(){
    const sidebar = document.createElement('div')
    sidebar.classList.add('rs-sidebar');

    const el1 = document.createElement('div');
    el1.classList.add('rs-sidebar-button1');
    el1.innerText = 'Home';

    const el2 = document.createElement('div');
    el2.classList.add('rs-sidebar-button2');
    el2.innerText = 'About';

    const el3 = document.createElement('div');
    el3.classList.add('rs-sidebar-button3');
    el3.innerText = 'Contact';

    sidebar.appendChild(el1);
    sidebar.appendChild(el2);
    sidebar.appendChild(el3);

    return sidebar;    
}

function createMain(){
    const main = document.createElement('div');
    main.classList.add('rs-main');
    
    return main;
};