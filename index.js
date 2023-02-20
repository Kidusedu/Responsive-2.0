let home = document.getElementById('home-btn');
let education = document.getElementById('education-btn');
let skillsprojects = document.getElementById('skill&projects-btn');
let contacts = document.getElementById('contacts-btn');
let accordionButton = document.getElementById('accordion-btn');




// window.onload = function () {
//     const favicon = document.getElementById('favicon')
//     const pageTitle = document.title
//     const attentionMessage = 'Come back'
  
//     document.addEventListener('visibilitychange', function (e) {
//       const isPageActive = !document.hidden
//       toggle(isPageActive)
//     })
  
//     function toggle(isPageActive) {
//       if (isPageActive) {
//         document.title = pageTitle
//         favicon.href = './Pics/man.png'
//       } else {
//         document.title = attentionMessage
//         favicon.href = './Pics/folded.png'
//       }
//     }
//   }


var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector(".cursor-dot"),
    $outline: document.querySelector(".cursor-dot-outline"),
    lastScrolledLeft : 0, // For changing position of cursor with scrolling
    lastScrolledTop : 0,  // For changing position of cursor with scrolling
  
    init: function () {
      // Set up element sizes
      this.dotSize = this.$dot.offsetWidth;
      this.outlineSize = this.$outline.offsetWidth;
  
      this.setupEventListeners();
      this.animateDotOutline();
    },
  
    setupEventListeners: function () {
      var self = this;
  
      // Anchor hovering
      document.querySelectorAll("a").forEach(function (el) {
        el.addEventListener("mouseover", function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        el.addEventListener("mouseout", function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });
      });
  
      // Click events
      document.addEventListener("mousedown", function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      document.addEventListener("mouseup", function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
  
      document.addEventListener("mousemove", function (e) {
        // Show the cursor
        self.cursorVisible = true;
        self.toggleCursorVisibility();
  
        // Position the dot
        self.endX = e.pageX;
        self.endY = e.pageY;
        self.$dot.style.top = self.endY + "px";
        self.$dot.style.left = self.endX + "px";
      });
  
      // Hide/show cursor
      document.addEventListener("mouseenter", function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
      });
  
      document.addEventListener("mouseleave", function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
      });
  
      // Change position of cursor with scrolling
      document.addEventListener('scroll', function (e) {
  
        if (self.lastScrolledLeft != $(document).scrollLeft()) {
          self.endX -= self.lastScrolledLeft;
          self.lastScrolledLeft = $(document).scrollLeft();
          self.endX += self.lastScrolledLeft;
        }
        if (self.lastScrolledTop != $(document).scrollTop()) {
          self.endY -= self.lastScrolledTop;
          self.lastScrolledTop = $(document).scrollTop();
          self.endY += self.lastScrolledTop;
        }
        self.$dot.style.top = self.endY + "px";
        self.$dot.style.left = self.endX + "px";
  
      });
    },
  
    animateDotOutline: function () {
      var self = this;
  
      self._x += (self.endX - self._x) / self.delay;
      self._y += (self.endY - self._y) / self.delay;
      self.$outline.style.top = self._y + "px";
      self.$outline.style.left = self._x + "px";
  
      requestAnimationFrame(this.animateDotOutline.bind(self));
    },
  
    toggleCursorSize: function () {
      var self = this;
  
      if (self.cursorEnlarged) {
        self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
        self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
      } else {
        self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
        self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
      }
    },
  
    toggleCursorVisibility: function () {
      var self = this;
  
      if (self.cursorVisible) {
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
      } else {
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
      }
    },
  };
  cursor.init();
  
  window.onload = function () {
    const favicon = document.getElementById('favicon')
    const pageTitle = document.title
    const attentionMessage = 'Come back'
  
    document.addEventListener('visibilitychange', function (e) {
      const isPageActive = !document.hidden
      toggle(isPageActive)
    })
  
    function toggle(isPageActive) {
      if (isPageActive) {
        document.title = pageTitle
        favicon.href = './Pics/man.png'
      } else {
        document.title = attentionMessage
        favicon.href = './Pics/folded.png'
      }
    }
  }

  //send button animation
// $(function submitAnimation() {
//     const name = document.querySelector("#name")
//     const emailAdress = document.querySelector("#email")
//     const text = document.querySelector("#textArea")
//     const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
//     $("#lnch").on("click", function () {
  
//       // Check if the name field is empty or contains a number
//       if (name.value == "" || (/\d/.test(name.value))) {
//         swal("Error !","Please enter a valid name !","error");
//         return;
//       }
//       // Check if the email field is empty or email is not valid ex: test@@email.com
//       else if (emailAdress.value == "" || !(emailPattern.test(emailAdress.value))) {
//         swal("Error !","Please enter a valid email !","error");
//         return;
//       }
//       // Check if the message field is empty
//       else if (text.value == "") {
//         swal("Error !","Please enter a valid message !","error");
//         return;
//       }
//       else {
  
//         setTimeout(function () {
//           $("#lnch").addClass("launching").text("Sending");
//           $("#lnch_btn").addClass("launching");
//         }, 0);
//         setTimeout(function () {
//           $("#lnch").addClass("launched").text("SENT");
//           $("#lnch_btn").addClass("launched");
//         }, 1500);
//         // Wait for 2.2 seconds so that the send button animation can be fully played before submitting the form
//         setTimeout(() => {
//           document.querySelector('form').submit();
//         }, 2200);
//       }
//     });
// });