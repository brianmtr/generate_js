// document.body.appendChild('ul');

function createNode(tag, elementParent, contenuHTML, nomClass){
    let elem = document.createElement(tag);
    if(typeof id !== 'undefined'){
      elem.setAttribute('id',id);
    }
    if(typeof nomClass !== 'undefined'){
      elem.className = nomClass;
    }
    if(typeof contenuHTML !== 'undefined'){
      elem.innerHTML = contenuHTML;
    }
    document.querySelector(elementParent).appendChild(elem);
  }
  
  createNode('div','body','','container');
  createNode('div','div','','site-header');
  createNode('div','.site-header','','site-logo');
  
  createNode('span','.site-logo','HTML5 ★ BOILERPLATE','star');
  
  createNode('ul','.site-header','','site-nav ');
  createNode('li','ul','Source code');
  createNode('li','ul','Docs');
  createNode('li','ul','Other projects');
  createNode('div','.site-header','','site-promo');
  createNode('h1','.site-promo','The web’s most popular front-end template');
  createNode('p','.site-promo','HTML5 Boilerplate helps you build fast, robust, and adaptable web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package.','description');
  createNode('div','.site-promo','','cta-option');
  createNode('a','.cta-option','','btn btn-download');
  createNode('a','.cta-option','','last-update');
  createNode('div','body','','site-section');
  createNode('div','.site-section','','container-two');
  createNode('h2','.container-two','Save time. Create with confidence.');

  createNode('div','.container-two','','grid');
// premiere grid-cell
  createNode('div','.grid','','grid-cell-one');
  createNode('h3','.grid-cell-one');
  createNode('span','h3','★', 'star');
  createNode('p','h3',' Analytics, icons, and more');
  createNode('p','.grid-cell-one','A lean, mobile-friendly HTML template; optimized Google Analytics snippet; placeholder touch-device icon; and docs covering dozens of extra tips and tricks.');

  // second grid-cell
  createNode('div','.grid','','grid-cell-two');
  createNode('h3-2','.grid-cell-two','');
  createNode('span','h3-2','★', 'star');
  createNode('p','h3-2','  Normalize.css and helpers');
  createNode('p','.grid-cell-two','Includes Normalize.css  — a modern, HTML5-ready alternative to CSS resets — and further base styles, helpers, media queries, and print styles.');

  // troisieme grid-cell
  createNode('div','.grid','','grid-cell-three');
  createNode('h3-3','.grid-cell-three','');
  createNode('span','h3-3','★', 'star');
  createNode('p','h3-3', 'Modernizr');
  createNode('p','.grid-cell-three','Get the latest minified versions of Modernizr: Modernizr  feature detection library, complete with a custom build configuration');


// quatrieme grid-cell
  createNode('div','.grid','','grid-cell-four');
  createNode('h3-4','.grid-cell-four','');
  createNode('span','h3-4','★', 'star');
  createNode('p','h3-4', ' High performance');
  createNode('p','.grid-cell-four','Apache settings to help you deliver excellent site performance. We independently maintain server configs  for multiple platforms.');

  //creation de la div site-section-video
  createNode('div','body','','site-section-video');
  createNode('h2','.site-section-video','Introduction to v8.');

  createNode('div', '.site-section-video', '', 'content');
  createNode('p', '.content', 'What\'s new ?', 'new');
  createNode('ul', '.content', '', 'new');

  createNode('li', '.content ul','Added a sample package.json with basic Parcel commands to jump start your app development');
  createNode('li', '.content ul', 'Added sample Open Graph metadata');
  createNode('li', '.content ul', 'Updated Modernizr and main.css');
  createNode('li', '.content ul', 'Removed jQuery');
  createNode('li', '.content ul', 'Set anonymizeIp to true in Google Analytics snippet');
  createNode('li', '.content ul', 'Removed Browser Upgrade Prompt');
  createNode('li', '.content ul', 'That\'s just the start of all the goodness. Check out the Changelog for all the details.');

  //creation site section-two

  createNode('div', 'body', '', 'site-section-two');
  createNode('h2', '.site-section-two', 'Who uses HTML5 Boilerplate?');
  createNode('p', '.site-section-two', '', 'in-the-wild');

  createNode('a', '.in-the-wild', 'Microsoft,', 'href');
  

  createNode('a', '.in-the-wild', ' NASA,', 'href');
  createNode('a', '.in-the-wild', ' Nike,', 'href');
  createNode('a', '.in-the-wild', ' Barack Obama,', 'href');
  createNode('a', '.in-the-wild', ' ITV News,', 'href');
  createNode('a', '.in-the-wild', ' Creative Commons,', 'href');
  createNode('a', '.in-the-wild', ' Australia Post,', 'href');
  createNode('a', '.in-the-wild', ' many more,', 'href');

  createNode('div', '.site-section-two', '', 'cta-option-two');
  createNode('a', '.cta-option-two', '', 'btn-dowload-two');
  createNode('strong', '.cta-option-two', 'Download v8.0.0');
  

  createNode('div', 'body', '', 'aside');
  createNode('div', '.aside', '', 'container-three');
  createNode('ul', '.container-three', '', 'inline-block-list');

  createNode('li', '.aside .container-three .inline-block-list');
  createNode('a', '.aside .container-three .inline-block-list li');
  createNode('span', '.aside .container-three .inline-block-list li a', '', 'Icon--github');
  createNode('p', '.aside .container-three .inline-block-list li a', ' Report issues');

  createNode('li-1', '.aside .container-three .inline-block-list');
  createNode('a', '.aside .container-three .inline-block-list li-1');
  createNode('span', '.aside .container-three .inline-block-list li-1 a', '', 'Icon--stackoverflow');
  createNode('p', '.aside .container-three .inline-block-list li-1 a', ' Help on Stack Overflow');

  createNode('li-2', '.aside .container-three .inline-block-list');
  createNode('a', '.aside .container-three .inline-block-list li-2 ', '',);
  createNode('span', '.aside .container-three .inline-block-list li-2 a', '', 'Icon--html5');
  createNode('p', '.aside .container-three .inline-block-list li-2 a', '  View the showcase');

  //footer
  createNode('footer', 'body', '', 'site-footer');
  createNode('p', '.site-footer');
  


  createNode('p', '.site-footer');
  createNode('a', '.site-footer p');
  createNode('p', '.site-footer p a', ' currently maintained by');

  createNode('a-1', '.site-footer p', '', 'href');
  createNode('p', '.site-footer p a-1', ' Rob Larsen');
  createNode('p', '.site-footer p a-1', '&');

  createNode('a-2', '.site-footer p', '', 'href');
  createNode('p', '.site-footer p a-2', ' Christian Oliff');

  
  
  
  
  
  
  



  
  
  
  

  

  



 //coorection francis

//  function createNode(tag, elementParent, contenuHtml, attributes){
//     let elem;
//     if(tag === 'textNode'){
//         elem = document.createTextNode(contenuHtml);
//     } else {
//         elem = document.createElement(tag);
//         if(typeof attributes !== 'undefined'){
//             for(let attribute of attributes){
//                 elem.setAttribute(attribute[0], attribute[1]);
//             }
//         }
//         if(typeof contenuHtml !== 'undefined'){
//             elem.innerHTML = contenuHtml;
//         }
//     }
//     document.querySelector(elementParent).appendChild(elem);
// }