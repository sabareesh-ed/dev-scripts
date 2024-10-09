

document.addEventListener("DOMContentLoaded", function () {
  const heroHeaders = document.querySelectorAll(".hero_header");

  heroHeaders.forEach((header) => {
    header.style.opacity = "1";
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("test");
  gsap.registerPlugin(ScrollTrigger);

  function animateMaskedSlideUp() {
    const components = document.querySelectorAll("[animate='component']");

    components.forEach(function (component) {
      let elements = component.querySelectorAll("[animate='hero-text']");
      let subheadings = component.querySelectorAll("[animate='subheading']");

      let childrenCount = elements[0].children.length;
      let firstTrigger = component.querySelector("[animate-scroll='trigger']");

      // Splitting text into words and setting initial visibility
      elements.forEach((element) => {
        let typeSplit = new SplitType(element, {
          types: "words",
          tagName: "span",
        });
      });
      subheadings.forEach((subheading) => {
        let typeSplit = new SplitType(subheading, {
          types: "words",
          tagName: "span",
        });
      });

      // Appending hero-spacer elements
      if (firstTrigger) {
        firstTrigger.style.marginTop = "-100dvh";

        for (let i = 0; i < childrenCount - 1; i++) {
          const heroSpacerClone = firstTrigger.cloneNode();
          heroSpacerClone.style.marginTop = "0";
          component.appendChild(heroSpacerClone);
        }
      }

      let triggers = component.querySelectorAll("[animate-scroll='trigger']");

      triggers.forEach((trigger, index) => {
        const words =
          elements[0]?.children[index]?.querySelectorAll(".word") || [];
        const subheadingWords =
          subheadings[0]?.children[index]?.querySelectorAll(".word") || [];

        // console.log("Animating words for trigger index:", index, words); // Debugging word selection

        if (index === 0) {
          // console.log("1st trigger");
          gsap.timeline({
            scrollTrigger: {
              trigger: trigger,
              start: "top center",
              end: "bottom center",
              // scrub: true
              // markers: true,
              onEnter: () => {
                if (words.length > 0) {
                  gsap.to(words, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
                if (subheadingWords.length > 0) {
                  gsap.to(subheadingWords, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
              },
              onLeave: () => {
                if (words.length > 0) {
                  gsap.to(words, {
                    opacity: 0,
                    y: "-20%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
                if (subheadingWords.length > 0) {
                  gsap.to(subheadingWords, {
                    opacity: 0,
                    y: "-20%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
              },
              onEnterBack: () => {
                if (words.length > 0) {
                  gsap.to(words, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
                if (subheadingWords.length > 0) {
                  gsap.to(subheadingWords, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
              },
              onLeaveBack: () => {
                if (words.length > 0) {
                  gsap.to(words, {
                    opacity: 0,
                    y: "20%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
                if (subheadingWords.length > 0) {
                  gsap.to(subheadingWords, {
                    opacity: 0,
                    y: "20%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
              },
            },
          });
        } else if (index === triggers.length - 1) {
          // console.log("3rd trigger");
          // Timeline for the last trigger (index === triggers.length - 1)
          gsap.timeline({
            scrollTrigger: {
              trigger: trigger,
              start: "top center",
              end: "bottom center",
              // scrub: true,
              // markers: true,
              onEnter: () => {
                if (words.length > 0) {
                  gsap.to(words, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
                if (subheadingWords.length > 0) {
                  gsap.to(subheadingWords, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
              },
              onLeaveBack: () => {
                if (words.length > 0) {
                  gsap.to(words, {
                    opacity: 0,
                    y: "20%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
                if (subheadingWords.length > 0) {
                  gsap.to(subheadingWords, {
                    opacity: 0,
                    y: "20%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
              },
            },
          });
        } else {
          // console.log("2nd trigger");
          gsap.timeline({
            scrollTrigger: {
              trigger: trigger,
              start: "top center",
              end: "bottom center",
              // scrub: true,
              // markers: true,
              onEnter: () => {
                if (words.length > 0) {
                  gsap.to(words, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
                if (subheadingWords.length > 0) {
                  gsap.to(subheadingWords, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
              },
              onLeave: () => {
                if (words.length > 0) {
                  gsap.to(words, {
                    opacity: 0,
                    y: "-20%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
                if (subheadingWords.length > 0) {
                  gsap.to(subheadingWords, {
                    opacity: 0,
                    y: "-20%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
              },
              onLeaveBack: () => {
                if (words.length > 0) {
                  gsap.to(words, {
                    opacity: 0,
                    y: "20%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
                if (subheadingWords.length > 0) {
                  gsap.to(subheadingWords, {
                    opacity: 0,
                    y: "20%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
              },
              onEnterBack: () => {
                if (words.length > 0) {
                  gsap.to(words, {
                    opacity: 1,
                    y: "0%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
                if (subheadingWords.length > 0) {
                  gsap.to(subheadingWords, {
                    opacity: 1,
                    y: "0%",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                  });
                }
              },
            },
          });
        }
      });
    });
  }

  function animateHeadingText() {
    const textHeadings = document.querySelectorAll("[animate='text-heading']");

    textHeadings.forEach((textHeading) => {
      // Split text into words using SplitType
      let typeSplit = new SplitType(textHeading, {
        types: "words",
        tagName: "span",
      });

      // Select all words
      const words = textHeading.querySelectorAll(".word");

      // Set initial styles for animation
      gsap.set(words, {
        y: "20%",
        autoAlpha: 0,
      });

      // GSAP ScrollTrigger to handle the animation when the text comes into view
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textHeading,
            start: "top center",
            end: "bottom center",
          },
        })
        .to(words, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        });
    });
  }

  function animateScrollWidth() {
    var targetSection = document.querySelector("header");
    var scrollWidth = document.querySelector("header .hero_progress_active");
    // console.log(scrollWidth);

    // Check if the section element is found
    if (!targetSection) {
      console.error(
        "Section element not found. Please ensure the correct selector is provided."
      );
      return; // Exit the function
    }

    window.addEventListener("scroll", function () {
      var scrollTop = window.scrollY || window.pageYOffset;
      var sectionTop = targetSection.getBoundingClientRect().top + scrollTop; // Get absolute position
      var sectionHeight = targetSection.offsetHeight;
      var windowHeight = window.innerHeight;

      // Calculate the distance between the top of the section and the top of the viewport
      var distanceFromTop = Math.max(0, scrollTop - sectionTop);

      // Calculate the distance between the bottom of the viewport and the bottom of the section
      var distanceFromBottom = Math.max(
        0,
        sectionTop + sectionHeight - (scrollTop + windowHeight)
      );

      // Calculate the visible height of the section
      var visibleSectionHeight =
        sectionHeight - distanceFromTop - distanceFromBottom;

      // Calculate the scroll percentage relative to the visible height of the section
      var scrollPercent = 0;

      // Calculate the scroll percentage based on the position of the section relative to the viewport
      if (distanceFromTop >= 0 && distanceFromBottom >= 0) {
        scrollPercent =
          (distanceFromTop / (sectionHeight - windowHeight)) * 100;
      } else if (distanceFromTop < 0) {
        // Section is above viewport
        scrollPercent = 0;
      } else if (distanceFromBottom < 0) {
        // Section is below viewport
        scrollPercent = 100;
      }

      // Ensure the scroll percentage remains within the range of 0% to 100%
      scrollPercent = Math.min(100, Math.max(0, scrollPercent));

      // Round the scroll percentage, ensuring it rounds up at 99.5% or higher
      var scrollPercentRounded = Math.ceil(scrollPercent);

      // console.log(scrollPercentRounded);

      // Update the scroll percentage display
      // You can uncomment the next line to display the scroll percentage
      // document.getElementById("scroll-per").textContent = scrollPercentRounded;
      scrollWidth.style.width = `${scrollPercentRounded}%`;
    });
  }

  // function animateScrollWidth() {
  //   hero_progress_wrap;
  // }

  // Call the function to enable the scroll tracking
  // animateScrollWidth();

  animateMaskedSlideUp();
  animateHeadingText();
  animateScrollWidth();
});

  const swiper1 = new Swiper(".swiper1", {
    direction: "horizontal",
    loop: false,
    spaceBetween: 2,
    speed: 500,
    slidesPerView: 1, // Default for desktop
    slidesPerGroup: 1, // Default for desktop
    centeredSlides: false,
    allowTouchMove: true,
    navigation: {
      nextEl: ".capa_button_next",
      prevEl: ".capa_button_prev",
    },
    pagination: {
      el: ".capa_slider_component .swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      // For mobile (480px and below)
      480: {
        el: ".capa_slider_component .swiper-pagination",
        type: "fraction",
        slidesPerView: 1, // Show 1 slide per view on mobile
        slidesPerGroup: 1, // Move 1 slide per swipe on mobile
        allowTouchMove: true, // Ensure touch is enabled on mobile
      },
      // For tablets (768px and below)
      768: {
        el: ".capa_slider_component .swiper-pagination",
        type: "fraction",
        slidesPerView: 1, // Show 1 slide per view on tablet
        slidesPerGroup: 1, // Move 1 slide per swipe on tablet
      },
      // Desktop (default)
      992: {
        pagination: {
          el: ".testimonial_pagination_wrap",
          clickable: true,
          renderBullet: function (index, className) {
            return `
              <span class="${className}">
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3306 17.2345C1.81695 16.3606 0.930622 14.6798 0.75196 12.6266C0.573382 10.5743 1.10668 8.1741 2.40788 5.92034C3.70909 3.66658 5.52111 2.00462 7.3877 1.13314C9.25519 0.261251 11.154 0.188434 12.6676 1.06234C14.1813 1.93625 15.0676 3.61704 15.2463 5.67028C15.4248 7.72253 14.8915 10.1228 13.5903 12.3765C12.2891 14.6303 10.4771 16.2922 8.61051 17.1637C6.74303 18.0356 4.84425 18.1084 3.3306 17.2345Z" stroke="#FF4500" stroke-opacity="0.7" stroke-width="0.5"/>
                </svg>
              </span>
            `;
          }
        },
        slidesPerView: 2, // Show 2 slides per view on desktop
        slidesPerGroup: 2, // Move 2 slides per swipe on desktop
      },
    },
    on: {
      // Remove unwanted margins after initialization
      init: function () {
        document.querySelector(".swiper1").style.marginLeft = "0";
        document.querySelector(".swiper1").style.marginRight = "0";
  
        // Check button opacity when swiper initializes
        toggleButtonOpacity(this);
      },
      // Adjust button opacity on each slide change
      slideChange: function () {
        toggleButtonOpacity(this);
      },
    },
  });
  
  // Function to toggle button opacity
  function toggleButtonOpacity(swiper) {
    const prevButton = document.querySelector(".capa_button_prev");
    const nextButton = document.querySelector(".capa_button_next");
  
    // Check if the first slide is active
    if (swiper.activeIndex === 0) {
      prevButton.style.opacity = "0.3"; // Decrease opacity
    } else {
      prevButton.style.opacity = "1"; // Restore opacity
    }
  
    // Check if the last slide is active
    if (
      swiper.activeIndex >=
      swiper.slides.length - swiper.params.slidesPerView
    ) {
      nextButton.style.opacity = "0.3"; // Decrease opacity
    } else {
      nextButton.style.opacity = "1"; // Restore opacity
    }
  }
  
  // Initialize Swiper2 (main swiper)
const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 2,
  speed: 300,
  slidesPerView: 1,
  slidesPerGroup: 1,
  effect: "fade",
  autoplay: {
    delay: 10000, // Delay of 10 seconds per slide
    disableOnInteraction: false,
  },
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".service_swiper_wrap .swiper-pagination", // Target pagination only inside this container
    type: "fraction",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".service_button_next",
    prevEl: ".service_button_prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    992: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  // Sync with Swiper3 when slide changes
  on: {
    init: function () {
      // Check button opacity when Swiper2 initializes
      updateButtonOpacity(this);
    },
    slideChange: function () {
      let activeIndex = this.activeIndex; // Get active slide index
      syncSwipers(activeIndex, swiper2); // Sync both swipers to the same index
      // Update button opacity on slide change
      updateButtonOpacity(this);
    },
  },
});

// Initialize Swiper3 (clickable swiper)
const swiper3 = new Swiper(".swiper3", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 4, // Set default space between to 0 for desktop
  slidesPerView: "auto", // Show all slides with auto width
  slidesPerGroup: 1,
  centeredSlides: true, // Ensure the active slide is centered
  allowTouchMove: true, // Allow touch movement on mobile and tablet
  freemode: true,
  breakpoints: {
    480: {
      slidesPerView: "auto", // Always auto on mobile
      slidesPerGroup: 1,
      centeredSlides: true, // Center the active slide on mobile
      allowTouchMove: true, // Enable swiping on mobile
      spaceBetween: 4, // Set space between to 4px on mobile
    },
    768: {
      slidesPerView: "auto", // Always auto on tablet
      slidesPerGroup: 1,
      centeredSlides: true, // Center the active slide on tablet
      allowTouchMove: true, // Enable swiping on tablet
      spaceBetween: 4, // Set space between to 4px on tablet
    },
    992: {
      slidesPerView: "auto", // Always auto on desktop
      centeredSlides: true, // Center the active slide on desktop
      allowTouchMove: false, // Disable touch move on desktop
      simulateTouch: false, // Disable touch simulation on desktop
      autoplay: false, // Disable autoplay on desktop
      keyboard: {
        enabled: false, // Disable keyboard interaction on desktop
      },
      spaceBetween: 0, // Set space between to 0px on desktop
      watchSlidesProgress: true, // Sync active state
      watchSlidesVisibility: true, // Sync visibility state
    },
  },
  // Sync Swiper2 when a slide is clicked in Swiper3
  on: {
    click: function () {
      let clickedIndex = this.clickedIndex;
      if (typeof clickedIndex !== "undefined") {
        syncSwipers(clickedIndex, swiper3); // Sync both swipers to the clicked index
      }
    },
    slideChange: function () {
      let activeIndex = this.activeIndex; // Get active slide index
      syncSwipers(activeIndex, swiper3); // Sync both swipers to the same index
    },
  },
});

// Sync Swiper2 and Swiper3 based on activeIndex and swiper source
function syncSwipers(activeIndex, swiperSource) {
  if (swiperSource === swiper2 && swiper3.activeIndex !== activeIndex) {
    swiper3.slideTo(activeIndex, 0); // Set duration to 0 for instant sync
  }
  if (swiperSource === swiper3 && swiper2.activeIndex !== activeIndex) {
    swiper2.slideTo(activeIndex, 0); // Set duration to 0 for instant sync
  }
}

// Function to toggle the opacity of navigation buttons
function updateButtonOpacity(swiper) {
  const prevButton = document.querySelector(".service_button_prev");
  const nextButton = document.querySelector(".service_button_next");

  // If first slide is active
  if (swiper.activeIndex === 0) {
    prevButton.style.opacity = "0.5"; // Reduce opacity
    prevButton.style.pointerEvents = "none"; // Disable click
  } else {
    prevButton.style.opacity = "1"; // Restore opacity
    prevButton.style.pointerEvents = "auto"; // Enable click
  }

  // If last slide is active
  if (swiper.activeIndex === swiper.slides.length - 1) {
    nextButton.style.opacity = "0.5"; // Reduce opacity
    nextButton.style.pointerEvents = "none"; // Disable click
  } else {
    nextButton.style.opacity = "1"; // Restore opacity
    nextButton.style.pointerEvents = "auto"; // Enable click
  }
}


  
document.addEventListener("DOMContentLoaded", function () {
  const videoWrapper = document.querySelector(".feature_background_wrap");
  const stickyVideoWrapper = document.querySelector(".feature_cards_wrap");
  const container = document.querySelector(".feature_background_wrap");

  let startTrigger,
    endTrigger,
    scrubDuration = 0.5,
    animationDuration = 1;
  let containerWidth = container.offsetWidth;

  const setInitialValues = () => {
    startTrigger = stickyVideoWrapper.offsetTop;
    endTrigger = startTrigger + stickyVideoWrapper.offsetHeight;
    containerWidth = container.offsetWidth;
  };

  const handleScroll = () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= startTrigger && scrollPosition <= endTrigger) {
      let progress = (scrollPosition - startTrigger) / (endTrigger - startTrigger);
      let scrubProgress = Math.min(progress / scrubDuration, 1);
      let minWidth =
        containerWidth -
        (containerWidth - (window.innerWidth * 100) / 100) * scrubProgress;
      let borderRadius = 1.5 - 1.5 * scrubProgress;
      let height = 82 + (18 * scrubProgress); // Smooth transition from 82% to 100%

      videoWrapper.style.minWidth = `${minWidth}px`;
      videoWrapper.style.borderRadius = `${borderRadius}rem`;
      videoWrapper.style.height = `${height}%`;
    } else if (scrollPosition < startTrigger) {
      videoWrapper.style.minWidth = `${containerWidth}px`;
      videoWrapper.style.borderRadius = "1.5rem";
      videoWrapper.style.height = "82%"; // Reset height to initial value
    } else if (scrollPosition > endTrigger) {
      videoWrapper.style.minWidth = "100vw";
      videoWrapper.style.borderRadius = "0";
      videoWrapper.style.height = "100%"; // Final height at end of scroll
    }
  };

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleResize = debounce(() => {
    setInitialValues();
    handleScroll();
  }, 100);

  const isMobile = window.matchMedia("(max-width: 767px)");

  // Only enable scroll behavior if not on mobile
  if (!isMobile.matches) {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    setInitialValues();
  }
});


  

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper
  const swiper4 = new Swiper(".swiper4", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 0,
    speed: 500, // Transition speed for visual effect
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 10000, // Delay of 10 seconds per slide
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonial_pagination_wrap",
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3306 17.2345C1.81695 16.3606 0.930622 14.6798 0.75196 12.6266C0.573382 10.5743 1.10668 8.1741 2.40788 5.92034C3.70909 3.66658 5.52111 2.00462 7.3877 1.13314C9.25519 0.261251 11.154 0.188434 12.6676 1.06234C14.1813 1.93625 15.0676 3.61704 15.2463 5.67028C15.4248 7.72253 14.8915 10.1228 13.5903 12.3765C12.2891 14.6303 10.4771 16.2922 8.61051 17.1637C6.74303 18.0356 4.84425 18.1084 3.3306 17.2345Z" stroke="#FF4500" stroke-opacity="0.7" stroke-width="0.5"/>
            </svg>
          </span>
        `;
      }
    },
    navigation: {
      nextEl: ".testimonial_button_next",
      prevEl: ".testimonial_button_prev",
    },
    on: {
      init: function () {
        resetProgressBar(); // Reset progress bar initially
        startProgressBar(); // Start progress bar on initialization
        resetAnimationState(); // Reset animation state for all slides
        animateActiveSlide(); // Animate elements on the initial active slide
      },
      slideChangeTransitionStart: function () {
        resetProgressBar(); // Reset progress bar at the start of slide change
        resetAnimationState(); // Reset animation state for all slides
      },
      slideChangeTransitionEnd: function () {
        startProgressBar(); // Restart progress bar after slide transition
        animateActiveSlide(); // Animate elements in the new active slide
      },
    }
  });

  // Function to start the progress bar
  function startProgressBar() {
    const progressBar = document.querySelector(".testimonial_progress_fill");
    if (progressBar) {
      progressBar.style.transition = "width 10s linear";
      progressBar.style.width = "100%";
    }
  }

  // Function to reset the progress bar
  function resetProgressBar() {
    const progressBar = document.querySelector(".testimonial_progress_fill");
    if (progressBar) {
      progressBar.style.transition = "none"; // Remove any transition
      progressBar.style.width = "0%";
    }
  }

  // Function to reset animation state for all slides
  function resetAnimationState() {
    const testimonialSlides = document.querySelectorAll('.testimonial_slider_slide');
    testimonialSlides.forEach(slide => {
      const name = slide.querySelector('.testimonial_client_name');
      const company = slide.querySelector('.testimonial_client_company');
      const copy = slide.querySelector('.testimonial_copy');

      // Reset all slides (non-active) to y: 100% and opacity: 0 without animation
      if (name && company && copy) {
        gsap.set([name, company, copy], { y: "100%", opacity: 0, duration: 0 });
      }
    });
  }

  // Function to animate elements in the active slide using GSAP
  function animateActiveSlide() {
    const activeSlide = document.querySelector('.testimonial_slider_slide.swiper-slide-active');
    if (activeSlide) {
      const name = activeSlide.querySelector('.testimonial_client_name');
      const company = activeSlide.querySelector('.testimonial_client_company');
      const copy = activeSlide.querySelector('.testimonial_copy');

      // Animate elements from y: 100% to y: 0% with duration
      if (name && company && copy) {
        gsap.fromTo([name, company, copy], 
          { y: "100%", opacity: 0 }, // From
          { y: "0%", opacity: 1, duration: 1, stagger:0.1, ease: "power2.out"}  // To
        );
      }
    }
  }
});





  
  document.addEventListener("DOMContentLoaded", function () {
    let swiperLinkClicked = false; // Flag to track if a navigation tab is clicked
    const progressBars = document.querySelectorAll(".branch_progress_bg");
    const navigationTabs = document.querySelectorAll(".branch_navigation_tab");
    let activeTimeline = null; // Store the current active GSAP timeline
    let clickedOnce = false; // Track if a tab has been clicked

    // Initialize Swiper
    const swiper5 = new Swiper(".swiper5", {
      loop: true,
      spaceBetween: 10,
      speed: 300,
      slidesPerView: 1,
      autoHeight: true,
      effect: "fade",
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          // Handle smooth progress bar update for active slide
          if (activeTimeline) {
            activeTimeline.progress(1 - progress); // Sync GSAP timeline with Swiper progress
          }
        },
        slideChangeTransitionStart: function () {
          resetAllProgressBars(); // Reset progress bars when the slide changes
          if (this.realIndex === 0) {
            resetAllProgressAndRestart(); // Reset everything when first slide becomes active
          } else {
            animateProgressBar(this.realIndex); // Animate progress bar for the active slide
          }
        },
      },
    });

    // GSAP animation for nth progress bar
    function animateProgressBar(index) {
      const progressBar = progressBars[index];
      const navigationTabText = navigationTabs[index].querySelector(".branch_navigation_text");

      // Clear any existing timeline
      if (activeTimeline) {
        activeTimeline.kill();
      }

      // Create a new GSAP timeline for the active progress bar and text color
      activeTimeline = gsap.timeline({ paused: true });

      // If a tab was clicked (clickedOnce is true), set duration to 0, else use 10s
      const animationDuration = clickedOnce ? 0 : 10;

      // Animate the progress bar and change text color
      activeTimeline.fromTo(
        progressBar,
        { width: "0%" },
        { width: "100%", duration: animationDuration, ease: "linear" }
      );

      // Animate the text color from default to brand color
      activeTimeline.fromTo(
        navigationTabText,
        { color: "rgba(66, 66, 66, 0.8)" },
        { color: "var(--swatch--brand)", duration: animationDuration, ease: "linear" },
        0 // Start at the same time as progress bar animation
      );

      activeTimeline.play(); // Play the timeline
    }

    // Reset all progress bars and navigation text color to default
    function resetAllProgressBars() {
      progressBars.forEach((bar, index) => {
        gsap.set(bar, { width: "0%" });
        const navigationTabText = navigationTabs[index].querySelector(".branch_navigation_text");
        gsap.set(navigationTabText, { color: "rgba(66, 66, 66, 0.8)" });
      });
    }

    // Reset everything and restart when the first slide gets active
    function resetAllProgressAndRestart() {
      resetAllProgressBars();
      animateProgressBar(0); // Start the first slide's progress bar animation
    }

    // Set the initial slide's progress bar to animate
    setTimeout(() => {
      resetAllProgressAndRestart(); // Start progress for the first slide
    }, 300);

    // Tab Navigation Event Listener
    navigationTabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        clickedOnce = true; // Set the flag to true after the first click
        swiper5.slideToLoop(index); // Go to the corresponding slide
        swiper5.autoplay.stop(); // Stop autoplay when a tab is clicked
        swiperLinkClicked = true; // Mark that a tab was clicked

        // Manually update progress bars without animation
        progressBars.forEach((bar, barIndex) => {
          const navigationTabText = navigationTabs[barIndex].querySelector(".branch_navigation_text");
          if (barIndex === index) {
            gsap.to(bar, { width: "100%", duration: 0, ease: "power2.out" }); // No transition
            gsap.to(navigationTabText, { color: "var(--swatch--brand)", duration: 0 }); // Set text color immediately
          } else {
            gsap.set(bar, { width: "0%" }); // Reset others
            gsap.set(navigationTabText, { color: "rgba(66, 66, 66, 0.8)" }); // Reset text color for others
          }
        });
      });
    });
  });

  
  const swiper6 = new Swiper(".swiper6", {
    slidesPerView: 1,
    spaceBetween: 2,
    allowTouchMove: true, // Enable touch by default (for mobile)
    breakpoints: {
      // Mobile Portrait (0px - 479px)
      0: {
        slidesPerView: 1,
        spaceBetween: 2,
        allowTouchMove: true, // Enable touch on mobile
      },
      // Mobile Landscape (480px - 767px)
      480: {
        slidesPerView: 1,
        spaceBetween: 2,
        allowTouchMove: true, // Enable touch on mobile
      },
      // Tablet (768px - 991px)
      768: {
        slidesPerView: 3,
        spaceBetween: 2,
        allowTouchMove: false, // Disable touch on tablet
      },
      // Desktop (992px and above)
      992: {
        slidesPerView: 3,
        spaceBetween: 2,
        allowTouchMove: false, // Disable touch on desktop
      },
    },
  });
  
  // Initialize all Splide sliders
  document.querySelectorAll(".splide").forEach(function (splideElement) {
    new Splide(splideElement, {
      type: "loop",
      autoWidth: false,
      height: "auto",
      arrows: false,
      drag: false,
      pagination: false,
      label: "Image Slider",
      reduceMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: "pause",
      },
      autoScroll: {
        speed: 2,
      },
    }).mount(window.splide.Extensions);
  });
  
  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('[data-dropdown="item"]');

    // Set initial states: First item open, others closed
    items.forEach((item, index) => {
        const content = item.querySelector('[data-dropdown="content"]');
        const zone = item.querySelector('[data-dropdown="zone"]');
        const host = item.querySelector('[data-dropdown="host"]');
        const frontIcon = zone.querySelector('.industry_front_icon');
        const backIcon = zone.querySelector('.industry_back_icon');
        const dropPathArrow = item.querySelector('.drop_path_arrow');

        if (index === 0) {
            gsap.set(content, { height: "auto", overflow: "visible" });
            gsap.set(frontIcon, { opacity: 0 });
            gsap.set(backIcon, { opacity: 1 });
            host.appendChild(zone);
            item.style.color = "var(--swatch--brand)";
            gsap.set(dropPathArrow, { rotation: 180 });
        } else {
            gsap.set(content, { height: 0, overflow: "hidden" });
            gsap.set(frontIcon, { opacity: 1 });
            gsap.set(backIcon, { opacity: 0 });
            item.style.color = "";
            gsap.set(dropPathArrow, { rotation: 0 });
        }
    });

    items.forEach((item) => {
        const trigger = item.querySelector('[data-dropdown="trigger"]');
        const content = item.querySelector('[data-dropdown="content"]');
        const zone = item.querySelector('[data-dropdown="zone"]');
        const target = item.querySelector('[data-dropdown="target"]');
        const host = item.querySelector('[data-dropdown="host"]');
        const frontIcon = zone.querySelector('.industry_front_icon');
        const backIcon = zone.querySelector('.industry_back_icon');
        const dropPathArrow = item.querySelector('.drop_path_arrow');

        trigger.addEventListener("click", () => {
            const isOpen = gsap.getProperty(content, "height") !== 0;

            items.forEach((otherItem) => {
                if (otherItem !== item) {
                    const otherContent = otherItem.querySelector('[data-dropdown="content"]');
                    if (gsap.getProperty(otherContent, "height") !== 0) {
                        collapseItem(otherItem, otherContent);
                    }
                }
            });

            if (isOpen) {
                collapseItem(item, content);
            } else {
                expandItem(item, content, zone, host, frontIcon, backIcon, dropPathArrow);
            }
        });
    });
});

function collapseItem(item, content) {
    const zone = item.querySelector('[data-dropdown="zone"]');
    const target = item.querySelector('[data-dropdown="target"]');
    const frontIcon = zone.querySelector('.industry_front_icon');
    const backIcon = zone.querySelector('.industry_back_icon');
    const dropPathArrow = item.querySelector('.drop_path_arrow');
    const flipState = Flip.getState(zone);

    gsap.to(frontIcon, { opacity: 1, duration: 0.3 });
    gsap.to(backIcon, { opacity: 0, duration: 0. });
    target.appendChild(zone);
    Flip.from(flipState, { duration: 0.1 });

    gsap.to(content, {
        height: 0, duration: 0.5, onStart: () => {
            content.style.overflow = "hidden";
        }
    });
    gsap.to(dropPathArrow, { rotation: 0, duration: 0.5 });
    item.style.color = "";
}

function expandItem(item, content, zone, host, frontIcon, backIcon, dropPathArrow) {
  gsap.set(content, { height: "auto" });
  const targetHeight = content.clientHeight;

  const timeline = gsap.timeline({
      defaults: { duration: 0.5 },
      onComplete: () => {
          content.style.overflow = "visible";
          item.style.color = "var(--swatch--brand)";
      }
  });

  timeline
      .set(content, { height: 0 }) // Reset height to 0 to animate from closed state
      .to(content, { height: targetHeight, onComplete: () => {
          // Start Flip and icon opacity transitions together
          const flipState = Flip.getState(zone);
          host.appendChild(zone);
          Flip.from(flipState, {
              duration: 0.5,
              ease: "power1.inOut",
              onComplete: () => {
                  // Additional actions after Flip transition, if necessary
              }
          });

          // Synchronize icon opacity changes with the Flip animation
          gsap.to(frontIcon, { opacity: 0, duration: 0.5 });
          gsap.to(backIcon, { opacity: 1, duration: 0.5 });
      }})
      .to(dropPathArrow, { rotation: 180 }, "<");
}



document.addEventListener("DOMContentLoaded", () => {
  // Function to check if the viewport is mobile portrait
  const isMobilePortrait = () => window.matchMedia("(max-width: 767px)").matches;

  if (isMobilePortrait()) {
      const footerItems = document.querySelectorAll('[data-footer-dropdown]');

      // Set initial states: First item open, others closed
      footerItems.forEach((item) => {
          const content = item.querySelector('[data-footer-content]');
          const arrow = item.querySelector('.footer_dropdown_arrow');

          if (item.hasAttribute('data-footer-first')) {
              // Set the first item's content to auto height initially
              gsap.set(content, { height: "auto", overflow: "visible", display: "flex" });
              // Set initial rotation of arrow for the first item
              gsap.set(arrow, { rotation: 180 });
          } else {
              // Set all other contents to height 0 and hidden initially
              gsap.set(content, { height: 0, overflow: "hidden", display: "none" });
              // Set initial rotation of arrow for other items
              gsap.set(arrow, { rotation: 0 });
          }
      });

      // Attach click event listeners to each trigger
      footerItems.forEach((item) => {
          const trigger = item.querySelector('[data-footer-trigger]');
          const content = item.querySelector('[data-footer-content]');
          const arrow = item.querySelector('.footer_dropdown_arrow');

          trigger.addEventListener("click", () => {
              const isOpen = gsap.getProperty(content, "height") !== 0;

              // Collapse all other items
              footerItems.forEach((otherItem) => {
                  if (otherItem !== item) {
                      const otherContent = otherItem.querySelector('[data-footer-content]');
                      const otherArrow = otherItem.querySelector('.footer_dropdown_arrow');

                      if (gsap.getProperty(otherContent, "height") !== 0) {
                          // Collapse the content and rotate the arrow concurrently
                          gsap.to(otherContent, {
                              height: 0,
                              duration: 0.5,
                              ease: "power2.out",
                              onStart: () => {
                                  otherContent.style.overflow = "hidden";
                              },
                              onComplete: () => {
                                  otherContent.style.display = "none"; // Hide the content after collapsing
                              }
                          });
                          // Rotate arrow back to 0 degrees during collapse
                          gsap.to(otherArrow, { rotation: 0, duration: 0.5, ease: "power2.inOut" });
                      }
                  }
              });

              if (isOpen) {
                  // Collapse the current item and rotate the arrow concurrently
                  gsap.to(content, {
                      height: 0,
                      duration: 0.5,
                      ease: "power2.out",
                      onStart: () => {
                          content.style.overflow = "hidden";
                      },
                      onComplete: () => {
                          content.style.display = "none"; // Hide the content after collapsing
                      }
                  });
                  // Rotate arrow back to 0 degrees during collapse
                  gsap.to(arrow, { rotation: 0, duration: 0.5, ease: "power2.inOut" });
              } else {
                  // Expand the current item and rotate the arrow concurrently
                  gsap.set(content, { height: "auto", display: "flex" });
                  const targetHeight = content.clientHeight;

                  const timeline = gsap.timeline({
                      defaults: { duration: 0.5, ease: "power2.out" },
                      onComplete: () => {
                          // Remove overflow hidden after expansion completes
                          content.style.overflow = "visible";
                      }
                  });

                  timeline
                      .set(content, { height: 0 }) // Reset height to 0 to animate from closed state
                      .to(content, { height: targetHeight }) // Animate to the natural height
                      .to(arrow, { rotation: 180 }, "<"); // Rotate arrow to 180 degrees concurrently with content expansion
              }
          });
      });
  }
});


gsap.registerPlugin(ScrollTrigger);

// Store the initial font color
const initialFontColor = getComputedStyle(document.querySelector("[data-nav]")).color;

// Select all elements with `[data-nav-change]`
document.querySelectorAll("[data-nav-change]").forEach((element) => {
  gsap.to("[data-nav]", {
    color: "var(--swatch--light-secondary)",
    duration: 0.3,
    scrollTrigger: {
      trigger: element,
      start: "top 20%", // Start when the top of `data-nav-change` reaches 30% of the viewport
      end: "bottom top", // End when the bottom of `data-nav-change` reaches the top of the viewport
      toggleActions: "play reverse play reverse", // Controls animation actions on enter, leave, enter back, and leave back
    }
  });
});

function animateGradient(element) {
  // Animate using fromTo, always starting from 0% and going to 100%
  gsap.fromTo(element, 
    { 
      "--start-position": "0%", 
      "--end-position": "0%" 
    }, 
    { 
      duration: 10,
      "--start-position": "100%",
      "--end-position": "100%",
      ease: "none"
    }
  );
}



// Create a MutationObserver instance
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.target.classList.forEach(className => {
      if (className === "swiper-slide-active" && mutation.target.classList.contains("service_tab_link")) {
        animateGradient(mutation.target);
      }
    });
  });
});

// Start observing each .service_tab_link element
document.querySelectorAll('.service_tab_link').forEach(el => {
  observer.observe(el, {
    attributes: true, // Observe changes to attributes
    attributeFilter: ['class'] // Only observe the 'class' attribute
  });
});

