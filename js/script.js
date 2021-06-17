// Scrolling animation to about from navbar
document.getElementById("toAbout").addEventListener("click", function(){
    document.getElementById("about").scrollIntoView({
      behavior: 'smooth'
    });
  });
  // Scrolling animation to experience from navbar
  document.getElementById("toExp").addEventListener("click", function(){
    document.getElementById("experience").scrollIntoView({
      behavior: 'smooth'
    });
  });
  // Scrolling animation to portfolio from navbar
  document.getElementById("toPortfolio").addEventListener("click", function(){
    document.getElementById("portfolio").scrollIntoView({
      behavior: 'smooth'
    });
  });
  // Scrolling animation to links from navbar
  document.getElementById("toLinks").addEventListener("click", function(){
    document.getElementById("links").scrollIntoView({
      behavior: 'smooth'
    });
  });
  // Scrolling animaiton to contact from navbar
  document.getElementById("toContact").addEventListener("click", function(){
    document.getElementById("contact").scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Close dropdown navbar after clicking on one of the items
  // const navLinks = document.querySelectorAll('.nav-item');
  // const menuToggle = document.getElementById('navItems');
  // const bsCollapse = new bootstrap.Collapse(menuToggle);
  // navLinks.forEach((l) => {
  //   l.addEventListener('click', () => {
  //     bsCollapse.toggle()
  //   })
  // });
  
  // Alert when submitting form
  document.getElementById("MessageSubmit").addEventListener('click', () => {
    alert("Form submitted, thank you!");
  });