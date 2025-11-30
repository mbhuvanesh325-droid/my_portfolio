# My Portfolio

A creative and modern portfolio website built with HTML, CSS, and JavaScript. This portfolio is inspired by modern design principles and features smooth animations, responsive design, and interactive components.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with gradient accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations and interactive elements
- **Project Showcase**: Dynamic project loading from JSON with filtering
- **Contact Form**: Fully validated contact form with error handling
- **Performance Optimized**: Fast loading times and efficient code
- **Accessible**: Semantic HTML and ARIA labels for better accessibility

## 📁 Project Structure

```
my-portfolio/
│
├── index.html          # Home page with hero section
├── about.html          # About page with skills and experience
├── projects.html       # Projects showcase with filters
├── contact.html        # Contact page with form
│
├── assets/
│   ├── images/
│   │   ├── profile/    # Profile images
│   │   ├── projects/  # Project images
│   │   └── icons/     # Icon images
│   ├── fonts/         # Custom fonts
│   └── media/
│       ├── videos/    # Video files
│       └── animations/ # Animation files
│
├── css/
│   ├── style.css      # Main stylesheet with variables
│   ├── responsive.css # Responsive styles and layouts
│   └── components/
│       ├── navbar.css # Navigation component
│       ├── footer.css # Footer component
│       ├── cards.css  # Card components
│       └── buttons.css # Button components
│
├── js/
│   ├── main.js        # Main JavaScript (project loading)
│   ├── navbar.js      # Navigation functionality
│   ├── form-validation.js # Form validation
│   └── animations.js  # Animation effects
│
└── data/
    └── projects.json  # Projects data
```

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Accent**: Pink (#ec4899)
- **Background**: Dark slate (#0f172a)
- **Text**: Light gray (#f8fafc)

### Typography
- **Headings**: Poppins (Bold, Modern)
- **Body**: Inter (Readable, Clean)

## 🛠️ Getting Started

### 1. Open the Portfolio
Simply open `index.html` in your web browser. No build process required!

### 2. Customize Your Content

#### Update Personal Information
- Edit the HTML files to update your name, bio, and contact information
- Update social media links in the footer sections

#### Add Your Projects
Edit `data/projects.json` to add your projects:

```json
{
  "id": 1,
  "title": "Your Project Title",
  "description": "Project description",
  "category": "web",
  "tags": ["Tag1", "Tag2"],
  "image": "assets/images/projects/project1.jpg",
  "link": "#",
  "featured": true
}
```

**Categories**: `web`, `mobile`, `ui`, `graphic`

#### Add Project Images
Place your project images in `assets/images/projects/` and update the image paths in `projects.json`.

#### Update Skills
Edit the skills section in `about.html` to reflect your expertise.

#### Update Experience
Modify the experience timeline in `about.html` with your work history.

### 3. Customize Colors
Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;
    --accent-color: #ec4899;
    /* ... more variables */
}
```

### 4. Deploy
- Upload all files to your web hosting service
- Ensure the folder structure is maintained
- Test all pages and functionality

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## ✨ Key Features Explained

### Navigation
- Fixed navbar with smooth scroll
- Mobile hamburger menu
- Active page highlighting

### Animations
- Fade-in on scroll
- Parallax effects
- Hover animations
- Smooth transitions

### Project Filtering
- Filter projects by category
- Smooth show/hide animations
- Dynamic project loading

### Form Validation
- Real-time validation
- Error messages
- Success feedback
- Email format checking

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- The contact form currently uses a simulated submission. You'll need to integrate with a backend service (e.g., Formspree, EmailJS, or your own API) for actual email sending.
- Project images are placeholders. Replace them with your actual project screenshots.
- Social media links are placeholders. Update them with your actual profiles.

## 🎯 Next Steps

1. Add your project images to `assets/images/projects/`
2. Update all personal information and content
3. Customize colors and styling to match your brand
4. Integrate a contact form service
5. Add your profile image
6. Test on multiple devices
7. Deploy to your hosting service

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Created with ❤️ for showcasing your work**
