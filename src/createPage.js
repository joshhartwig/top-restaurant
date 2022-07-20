
export function createPage(){
    let content = document.querySelector("#content");
    
    // create sidebar
    let sidebar = document.createElement('div')
    sidebar.classList.add('rs-sidebar');

    //create 3 elements
    const el1 = document.createElement('div');
    el1.classList.add('rs-sidebar-button');
    el1.onclick = function() {
        setMainPage('home');
    }
    el1.innerText = 'Home';

    const el2 = document.createElement('div');
    el2.classList.add('rs-sidebar-button');
    el2.onclick = function() {
        setMainPage('about');
    }
    el2.innerText = 'About';

    const el3 = document.createElement('div');
    el3.classList.add('rs-sidebar-button');
    el3.onclick = function() {
        setMainPage('contact');
    }
    el3.innerText = 'Contact';

    // append elements
    sidebar.appendChild(el1);
    sidebar.appendChild(el2);
    sidebar.appendChild(el3);

    // create main
    let main = document.createElement('div');
    main.classList.add('rs-main');
    main.id = "main";

    content.append(sidebar);
    content.append(main);  
}

export function setMainPage(section){
    resetMainPage();
    if(section === 'home'){
        let main = document.querySelector("#main");
        main.innerHTML = 
        `
        <div class="rs-main-home">
      <div class="home-title">
        <p class="home-title-para">
          laoreet id donec
        </p>
      </div>
      <div class="home-sales-info">
        <p class="home-sales-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam id leo in vitae turpis massa sed elementum. Aliquet lectus proin nibh nisl condimentum. Mauris a diam maecenas sed enim ut.
        </p>
      </div>
      <div class="home-sales">
        <div class="sales-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non.
        </div>
        <div class="sales-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames.
        </div>
        <div class="sales-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames.
        </div>
        <div class="sales-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames.
        </div>
        <div class="sales-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames.
        </div>
        <div class="sales-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames.
        </div>
      </div>
    </div>`;
    }

    if(section === 'about'){
        let main = document.querySelector("#main");
        main.innerHTML = 
        `
        <div>Hello from About</div>  
        `;
    }

    if(section === 'contact'){
        let main = document.querySelector("#main");
        main.innerHTML = 
        `
        <div>Hello from Contact</div>  
        `;
    }

}

export function resetMainPage(){
    // hook into the main 
    let main = document.querySelector("#main");
    main.innerHTML = '';
}



