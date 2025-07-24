# Paula Samy Philip - Portfolio Website

A modern, bilingual (English/Arabic) portfolio website showcasing my skills and projects as a Full Stack Developer.

## Features

- 🌐 Bilingual support (English/Arabic)
- 🎨 Modern design with glassmorphism effects
- 🌙 Dark/Light theme
- 📱 Fully responsive
- ⚡ Smooth animations and transitions
- 🔄 RTL/LTR layout switching
- 🎯 Modal-based navigation
- 📝 Contact form with validation

## Technologies Used

- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- JavaScript (ES6+)
- AOS (Animate On Scroll)
- Font Awesome Icons
- Google Fonts (Poppins, Cairo)

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css         # CSS styles
├── script.js         # JavaScript functionality
├── README.md        # Project documentation
└── images/         # Image assets
    ├── profile-placeholder.jpg
    └── project-placeholder.jpg
```

## Setup

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - it's a static website

## Image Requirements

- `profile-placeholder.jpg`: 400x400px recommended
- `project-placeholder.jpg`: 16:9 aspect ratio recommended

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Fonts: Google Fonts (Poppins, Cairo)
- Icons: Font Awesome
- Animations: AOS Library

## License

MIT License

## Customization

### Adding Projects

Add new project cards in the projects section following this structure:

```html
<div class="project-card" data-aos="fade-up">
    <div class="project-image">
        <img src="path-to-project-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="live-demo-link" class="project-link"><i class="fas fa-link"></i></a>
                <a href="github-repo-link" class="project-link"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h3 data-en="Project Title" data-ar="عنوان المشروع">Project Title</h3>
        <p data-en="Project description" data-ar="وصف المشروع">Project description</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
    </div>
</div>
```

### Adding Translations

For any new text content, add data attributes for both languages:

```html
<element data-en="English Text" data-ar="النص بالعربي">Default Text</element>
```

## Contact

- Email: paulasamy52@gmail.com
- Phone: 01289562111
- Location: Suez, Egypt 