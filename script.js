// DOM Elements
const html = document.documentElement;
const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const langToggle = document.querySelector(".lang-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const modals = document.querySelectorAll(".modal");
const modalOverlays = document.querySelectorAll(".modal-overlay");
const modalCloseButtons = document.querySelectorAll(".modal-close");
const ctaButton = document.querySelector(".cta-button");
const skillBars = document.querySelectorAll(".skill-progress");
const contactForm = document.querySelector(".contact-form");

// Theme functionality
const savedTheme = localStorage.getItem("theme") || "dark";
body.dataset.theme = savedTheme;
if (savedTheme === "dark") {
  themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  const isDark = body.dataset.theme === "dark";
  body.dataset.theme = isDark ? "light" : "dark";
  themeToggle
    .querySelector("i")
    .classList.replace(
      isDark ? "fa-sun" : "fa-moon",
      isDark ? "fa-moon" : "fa-sun"
    );
  localStorage.setItem("theme", isDark ? "light" : "dark");
});

// Language functionality
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);

langToggle.addEventListener("click", () => {
  const currentLang = html.getAttribute("lang");
  const newLang = currentLang === "en" ? "ar" : "en";
  setLanguage(newLang);
});

function setLanguage(lang) {
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  langToggle.textContent = lang === "en" ? "AR" : "EN";
  localStorage.setItem("language", lang);
}

// Modal functionality
let currentModal = null;

function openModal(modalId) {
  const targetModal = document.getElementById(`${modalId}-modal`);
  if (!targetModal) return;

  // Close current modal if exists
  if (currentModal) {
    currentModal.classList.remove("active");
  }

  // Show new modal
  targetModal.classList.add("active");
  currentModal = targetModal;

  // Prevent body scroll
  body.style.overflow = "hidden";

  // Animate skill bars if skills modal
  if (modalId === "skills") {
    animateSkillBars();
  }
}

function closeModal() {
  if (currentModal) {
    currentModal.classList.remove("active");
    currentModal = null;
    body.style.overflow = "";
  }
}

// Event listeners for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = link.getAttribute("data-section");

    // Update active state
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    if (section === "home") {
      closeModal();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      openModal(section);
    }
  });
});

// Event listener for CTA button
if (ctaButton) {
  ctaButton.addEventListener("click", () => {
    const section = ctaButton.getAttribute("data-section");
    openModal(section);

    // Set the corresponding nav link as active
    navLinks.forEach((link) => {
      if (link.getAttribute("data-section") === section) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
}

// Event listeners for modal close buttons
modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

// Close modal when clicking overlay
modalOverlays.forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    // Get the navbar height
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    // Get the modal content element
    const modalContent = overlay.nextElementSibling;

    // Calculate the gap between navbar and modal content
    const modalTop = modalContent.getBoundingClientRect().top;

    // Only close if clicking below the modal content
    if (e.target === overlay && e.clientY > modalTop) {
      closeModal();
    }
  });
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Animate skill bars
function animateSkillBars() {
  skillBars.forEach((bar) => {
    const level = bar.getAttribute("data-level");
    if (level) {
      bar.style.width = `${level}%`;
    }
  });
}

// Contact form handling
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector("#name").value.trim();
    const email = this.querySelector("#email").value.trim();
    const message = this.querySelector("#message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      showFormFeedback(
        html.lang === "ar"
          ? "يرجى ملء جميع الحقول"
          : "Please fill in all fields",
        "error"
      );
      return;
    }

    if (!emailRegex.test(email)) {
      showFormFeedback(
        html.lang === "ar"
          ? "يرجى إدخال بريد إلكتروني صحيح"
          : "Please enter a valid email address",
        "error"
      );
      return;
    }

    showFormFeedback(
      html.lang === "ar"
        ? "شكراً لرسالتك! سأرد عليك قريباً."
        : "Thank you for your message! I will get back to you soon.",
      "success"
    );

    this.reset();
  });
}

// Form feedback function
function showFormFeedback(message, type) {
  const existingFeedback = document.querySelector(".form-feedback");
  if (existingFeedback) {
    existingFeedback.remove();
  }

  const feedback = document.createElement("div");
  feedback.className = `form-feedback ${type}`;
  feedback.textContent = message;

  contactForm.insertBefore(feedback, contactForm.firstChild);

  setTimeout(() => {
    feedback.remove();
  }, 3000);
}

const toggler = document.querySelector(".navbar-toggler");
const navLinksMenu = document.querySelector(".nav-links");

if (toggler && navLinksMenu) {
  toggler.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinksMenu.classList.toggle("show");
    }
  });
  // Remove menu if resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinksMenu.classList.remove("show");
    }
  });
  // Close menu when clicking a nav-link on mobile
  navLinksMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinksMenu.classList.remove("show");
      }
    });
  });
}
