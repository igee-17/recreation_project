// const mainNav = $("main");

window.addEventListener("scroll", function () {
  const navBar = document.querySelector(".navSelector");
  const height = document.querySelector("main");
  const navHeight = document.querySelector("main").offsetHeight;
  const setHeight = navHeight - 100;
  //   console.log(navHeight);
  //   const setHeight = navHeight - 70;
  //   console.log(setHeight);

  //   navBar.classList.toggle("sticky", window.scrollY > navHeight);
  //   header.classList.toggle("sticky", window.scrollTo(0, 100vh))
  if (window.scrollY > setHeight) {
    navBar.classList.add("nav2");
    navBar.classList.remove("nav2Appear");

    // navBar.classList.toggle("nav2", window.scrollY > navHeight);
  } else {
    navBar.classList.remove("nav2");
    navBar.classList.add("nav2Appear");
    // navBar.classList.toggle("nav2Appear", window.scrollY > navHeight);
  }
});

// window.addEventListener("scroll", function () {
//   const navBar = document.querySelector(".navbar");
//   const navHeight = document.querySelector("main").offsetHeight;
//   //   console.log(navHeight);
//   const setHeight = navHeight;
//   console.log(setHeight);

//   navBar.classList.toggle("sticky2", window.scrollY > setHeight);
//   //   header.classList.toggle("sticky", window.scrollTo(0, 100vh))
// });

// window.addEventListener("scroll", function () {
//   const nav1home = document.querySelector(".nav1home");
//   const nav2about = document.querySelector(".nav2about");
//   const nav2classes = document.querySelector(".nav2classes");
//   const nav2schedules = document.querySelector(".nav2schedules");
//   const nav2contact = document.querySelector(".nav2contact");

//   const section1 = document.querySelector("main").offsetHeight;
//   //   const section1Height = 0;

//   const section2Height =
//     document.querySelector(".section2Selector").offsetHeight;
//   const section2 = section1 + section2Height;

//   const section3Height =
//     document.querySelector(".section3Selector").offsetHeight;
//   const section4Height =
//     document.querySelector(".section4Selector").offsetHeight;
//   //   const test = window.scrollY < section2;
//   //   console.log(test);

//   if (window.scrollY > section1) {
//     nav2about.classList.add("setNavColour");
//   } else {
//     nav2about.classList.remove("setNavColour");
//   }

//   if (window.scrollY > section2) {
//     nav2about.classList.add("setNavColour2");
//     nav2classes.classList.add("setNavColour");
//   } else {
//     nav2classes.classList.remove("setNavColour");
//     nav2about.classList.add("setNavColour");
//   }
//   if (window.scrollY < section2) {
//     nav2classes.classList.remove("setNavColour");
//     nav2about.classList.add("setNavColour");
//     // nav2about.classList.add("setNavColour2");
//     // nav2classes.classList.add("setNavColour");
//   } else {
//     // nav2classes.classList.remove("setNavColour");
//     // nav2about.classList.add("setNavColour");
//     nav2about.classList.add("setNavColour2");
//     nav2classes.classList.add("setNavColour");
//   }

//   if (window.scrollY > section1) {
//     nav2about.classList.add("setNavColour");
//   } else {
//     nav2about.classList.remove("setNavColour");
//   }

//   if (window.scrollY > section1) {
//     nav2about.classList.add("setNavColour");
//   } else {
//     nav2about.classList.remove("setNavColour");
//   }
// });

// TO CHANGE THE COLOUR OF NAVBAR START
const sections = document.querySelectorAll(".sectionSelector");
const navLi = document.querySelectorAll(".navSelector .nav2Links ul li");

console.log(sections);
console.log(navLi);

window.addEventListener("scroll", () => {
  let current = "";

  console.log(pageYOffset);
  //   'pageYoffset' is a method used to get how much we have scrolled, we'd be using it below

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    // this loops through the nodeList and each instance of the list is 'section'
    // 'sectionTop' is the distance of each section from the top of the page
    // console.log(sectionTop); //uncomment this to check

    const sectionHeight = section.clientHeight;
    // const sectionHeight = section.offsetHeight;
    // this is used to get the height of each section

    if (pageYOffset >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
    return current;
  });
  console.log(current);
  //   we loop through the nodeList of 'sections', and for every instance, 'section', that has a particular value of 'sectionTop', the value of current is changed once we scroll (check the console)
  // we subtract sectionTop from 'sectionHeight/3' because we want the code to work when we have scrolled 1/3rd of the next section

  navLi.forEach((item) => {
    item.classList.remove("setNavColour");
    if (item.classList.contains(current)) {
      item.classList.add("setNavColour");
    }
    console.log(item);
    //   what we did here was first check if each instance, 'item', has the class of 'setNavColour' (which we remove)
    // then we check if the class of each item matches the value of 'current'. NOTE that the value of current is not static and changes as we scroll, hence we can use this condition to set the add the class of 'setNavColour' which we removed earlier.
    // also NOTE that, the class of each item must match the id (which is the value of our current) for this code to work
    // return item;
  });
});
