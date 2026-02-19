# TeilorenWebSite

Professional qualification website for a science teacher, showcasing educational credentials and experience.

## Website Features

- **Single-page design** optimized for QR code access
- **Multilingual support**: English, French, Vietnamese
- **Mobile-first responsive design** for tablets and phones
- **Professional styling** suitable for academic presentation
- **Fast loading** for optimal user experience

## Content Sections

1. **Hero Section** - Professional introduction with photo
2. **Education & Expertise** - PhD and bioinformatics experience
3. **Teaching Experience** - University-level instruction capabilities
4. **International Experience** - Conferences and Southeast Asia experience
5. **Contact Information** - CV and diploma document access

## File Structure

```
├── index.html          # Main webpage
├── styles.css          # Professional CSS styling
├── script.js           # JavaScript for multilingual functionality
├── images/             # Profile photos and visual assets
├── docs/               # CV, diplomas, and certificates
└── README.md           # This file
```

## Setup Instructions

1. Add your profile photos to `images/profile/` directory
2. Run `./generate-profile-photos.sh` to update the photo list
3. Upload your CV as `docs/cv_ed_loire2025.pdf`
4. Customize content in the translation objects within `script.js`
5. Deploy to your hosting provider (optimized for teiloren.net)

## Profile Photo Slideshow

The website includes an automatic slideshow for profile photos:
- Photos are loaded from `images/profile/` directory
- Run `./generate-profile-photos.sh` to regenerate `images/profile-photos.json`
- Navigation buttons appear automatically when multiple photos exist
- Supports keyboard navigation (arrow keys)
- Photos fade smoothly during transitions

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks for fast loading)
- CSS Grid and Flexbox for responsive layouts
- Local storage for language preferences
- Accessible design following web standards
- Print-friendly styles included

## Browser Support

Optimized for modern mobile browsers including:
- Safari on iOS
- Chrome on Android
- Mobile Firefox
- Desktop browsers (Chrome, Firefox, Safari, Edge)

---

Ready to showcase your science teaching qualifications to parents worldwide!# TeilorenEduWebsite
