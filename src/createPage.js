
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
    el1.innerHTML = `<span class="rs-sidebar-text">Home</span>`;

    const el2 = document.createElement('div');
    el2.classList.add('rs-sidebar-button');
    el2.onclick = function() {
        setMainPage('about');
    }
    el2.innerHTML = `<span class="rs-sidebar-text">About</span>`;

    const el3 = document.createElement('div');
    el3.classList.add('rs-sidebar-button');
    el3.onclick = function() {
        setMainPage('contact');
    }
    el3.innerHTML = `<span class="rs-sidebar-text">Contact</span>`;

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
          Bob's Steaks and Fine Wine
        </p>
        <img class="steak-img" src="./img/tomahawk.png">
      </div>
      <div class="home-sales-info">
        <p class="home-sales-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam id leo in vitae turpis massa sed elementum. Aliquet lectus proin nibh nisl condimentum. Mauris a diam maecenas sed enim ut.
        </p>
      </div>
      <div class="home-sales">
        <div class="sales-card">
          Burger $12
        </div>
        <div class="sales-card">
          Tomohawk Waygu Medium $75
        </div>
        <div class="sales-card">
          Texas Sirloin $22
        </div>
        <div class="sales-card">
          Porkchop $31
        </div>
        <div class="sales-card">
          Aged Ribeye $33
        </div>
        <div class="sales-card">
          Braised Lamb Shank $43
        </div>
      </div>
    </div>`;
    }

    if(section === 'about'){
        let main = document.querySelector("#main");
        main.innerHTML = 
        `
        <div class="rs-about-container">
        <p class="rs-about-title">
        About Us
      </p>
      <p class="rs-about">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p> 
      </div>
        `;
    }

    if(section === 'contact'){
        let main = document.querySelector("#main");
        main.innerHTML = 
        `
        <p class="rs-contact-para">
        We are always looking to see new faces. Below is our address, stop by and come see us.
      </p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.9297346996223!2d-96.68222488404561!3d33.21593828084164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c15ea11036065%3A0x206f422a342e6797!2sJersey%20Mike&#39;s%20Subs!5e0!3m2!1sen!2sus!4v1658347107091!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    }

}

export function resetMainPage(){
    // hook into the main 
    let main = document.querySelector("#main");
    main.innerHTML = '';
}



