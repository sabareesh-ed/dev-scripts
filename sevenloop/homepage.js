$(document).ready(function () {
    // Ensure all headings and paragraphs are hidden initially
    gsap.set(".hero_heading, .hero_para_wrap", { opacity: 0 });
  
    // Function to animate both heading and paragraph when .w--current is added
    function animateHeadingAndParagraph(index) {
      let allHeadings = $(".hero_heading"); // All .hero_heading elements
      let heading = allHeadings.eq(index); // Targeting the corresponding nth .hero_heading
      let paragraph = $(".hero_para_wrap").eq(index); // Targeting the corresponding nth .hero_para_wrap
  
      // Hide all other headings except the one at the current index
      allHeadings.each(function (i) {
        if (i !== index) {
          gsap.to($(this), { opacity: 0, duration: 0.5, ease: "power1.out" });
        }
      });


      //change gh
  
      // Show the heading corresponding to the current .hero_progress_active
      gsap.to(heading, { opacity: 1, duration: 0.6, ease: "power1.out" });
  
      // Animate the paragraph (keep the existing behavior)
      gsap.to(paragraph, { opacity: 1, y: 0, duration: 0.6, ease: "power1.out" });
    }

    // Function to fade out both heading and paragraph when .w--current is removed
    function fadeOutHeadingAndParagraph(index) {
      let heading = $(".hero_heading").eq(index); // Targeting the corresponding nth .hero_heading
      let paragraph = $(".hero_para_wrap").eq(index); // Targeting the corresponding nth .hero_para_wrap
  
      // Fade out both heading and paragraph
      gsap.to(heading, { opacity: 0, duration: 0.5, ease: "power1.out" });
      gsap.to(paragraph, { opacity: 0, duration: 0.5, ease: "power1.out" });
    }
  
    // Main function to check which .hero_progress_active has .w--current and animate accordingly
    function checkCurrent() {
      $(".hero_progress_active").each(function (index) {
        if ($(this).hasClass("w--current")) {
          // Animate the heading and paragraph when .w--current is added
          animateHeadingAndParagraph(index);
        } else {
          // Fade out the heading and paragraph when .w--current is removed
          fadeOutHeadingAndParagraph(index);
        }
      });
    }
  
    // Initial check on page load
    checkCurrent();
  
    // Use MutationObserver to listen for changes in the .w--current class on the .hero_progress_active elements
    const observer = new MutationObserver(checkCurrent);
    $(".hero_progress_active").each(function () {
      observer.observe(this, { attributes: true, attributeFilter: ["class"] });
    });
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
        slidesPerView: 1, // Show 1 slide per view on mobile
        slidesPerGroup: 1, // Move 1 slide per swipe on mobile
        allowTouchMove: true, // Ensure touch is enabled on mobile
      },
      // For tablets (768px and below)
      768: {
        slidesPerView: 1, // Show 1 slide per view on tablet
        slidesPerGroup: 1, // Move 1 slide per swipe on tablet
      },
      // Desktop (default)
      992: {
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


  
  // Initialize Swiper4 (with cross-fade effect and custom pagination)
  const swiper4 = new Swiper(".swiper4", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 0,
    speed: 300,
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".testimonial_pagination_wrap",
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className} pagination-bullet">
                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path class="svg-path" d="M3.62796 17.2345C2.11431 16.3606 1.22799 14.6798 1.04932 12.6266C0.870746 10.5743 1.40404 8.1741 2.70525 5.92034C4.00646 3.66658 5.81847 2.00462 7.68507 1.13314C9.55255 0.261251 11.4513 0.188434 12.965 1.06234C14.4786 1.93625 15.365 3.61704 15.5436 5.67028C15.7222 7.72253 15.1889 10.1228 13.8877 12.3765C12.5865 14.6303 10.7745 16.2922 8.90787 17.1637C7.04039 18.0356 5.14161 18.1084 3.62796 17.2345Z" stroke="#FF4500" stroke-width="1"/>
                        </svg>
                      </span>`;
        },
    },
    navigation: {
        nextEl: ".testimonial_button_next",
        prevEl: ".testimonial_button_prev",
    },
    on: {
        init: function () {
            startProgressBar();
            animateContent();
            updatePagination(); // No longer needed as styles are managed via CSS
        },
        slideChangeTransitionStart: function () {
            resetProgressBar();
        },
        slideChangeTransitionEnd: function () {
            startProgressBar();
            animateContent();
        },
    },
});

function animateContent() {
    const elements = document.querySelectorAll(
        ".testimonial_copy, .testimonial_client_name, .testimonial_client_company"
    );
    gsap.fromTo(
        elements,
        { y: "100%", opacity: 0 },
        {
            y: "0%",
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
        }
    );
}

function startProgressBar() {
    const progressBar = document.querySelector(".testimonial_progress_fill");
    progressBar.style.transition = "width 10s linear";
    progressBar.style.width = "100%";
}

function resetProgressBar() {
    const progressBar = document.querySelector(".testimonial_progress_fill");
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
}

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
          const activeBar = progressBars[s.realIndex];
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
  
      // Clear any existing timeline
      if (activeTimeline) {
        activeTimeline.kill();
      }
  
      // Create a new GSAP timeline for the active progress bar
      activeTimeline = gsap.timeline({ paused: true });
  
      // If a tab was clicked (clickedOnce is true), set duration to 0, else use 10s
      const animationDuration = clickedOnce ? 0 : 10;
  
      activeTimeline.fromTo(
        progressBar,
        { width: "0%" },
        { width: "100%", duration: animationDuration, ease: "linear" }
      );
  
      activeTimeline.play(); // Play the timeline
    }
  
    // Reset all progress bars to 0%
    function resetAllProgressBars() {
      progressBars.forEach((bar) => {
        gsap.set(bar, { width: "0%" });
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
    const navigationTabs = document.querySelectorAll(".branch_navigation_tab");
    navigationTabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        clickedOnce = true; // Set the flag to true after the first click
        swiper5.slideToLoop(index); // Go to the corresponding slide
        swiper5.autoplay.stop(); // Stop autoplay when a tab is clicked
        swiperLinkClicked = true; // Mark that a tab was clicked
  
        // Manually update progress bars without animation
        progressBars.forEach((bar, barIndex) => {
          if (barIndex === index) {
            gsap.to(bar, { width: "100%", duration: 0, ease: "power2.out" }); // No transition
          } else {
            gsap.set(bar, { width: "0%" }); // Reset others
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
  
  function startCountdown(targetDate) {
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
  
    function padZero(num) {
      return num < 10 ? "0" + num : num;
    }
  
    function updateCountdown() {
      const now = new Date();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        daysElement.innerText = "00";
        hoursElement.innerText = "00";
        minutesElement.innerText = "00";
        return;
      }
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
  
      daysElement.innerText = padZero(days);
      hoursElement.innerText = padZero(hours);
      minutesElement.innerText = padZero(minutes);
    }
  
    updateCountdown(); // Run the first time immediately
    setInterval(updateCountdown, 1000 * 60); // Update every minute
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const targetDate = new Date("November 4, 2024 00:00:00");
    startCountdown(targetDate);
  });
  
  