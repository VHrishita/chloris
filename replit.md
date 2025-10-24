# GreenLife Tracker 🌱

## Overview
GreenLife Tracker is a multi-page, Pinterest-style web application themed around UN Sustainable Development Goal 15: Life on Land. Built with vanilla HTML, CSS, and JavaScript (no frameworks), it features a stunning glassmorphism design with nature-inspired aesthetics.

## Project Goals
- Promote environmental awareness and sustainable living
- Track plant growth and eco-friendly actions
- Educate users about biodiversity and conservation
- Create an engaging, interactive experience with beautiful design

## Current State
✅ Fully functional 12-page web application
✅ Responsive design for desktop, tablet, and mobile
✅ Glassmorphism UI with smooth animations
✅ localStorage integration for data persistence
✅ Interactive features: plant tracking, biodiversity map, nature sounds, achievements

## Recent Changes (October 24, 2025)
- Created complete project structure with 12 interconnected HTML pages
- Implemented global CSS with glassmorphism effects and nature-inspired color palette
- Added JavaScript for animations, localStorage, and interactive features
- Configured Python HTTP server workflow on port 5000
- All pages feature consistent branding, navigation, and footer

## Project Architecture

### File Structure
```
/
├── index.html              # Landing page with hero section
├── plant-tracker.html      # Plant growth tracking with progress bars
├── biodiversity.html       # Interactive world map with ecosystem pins
├── eco-tips.html          # Rotating daily eco tips
├── weather-advice.html    # Geolocation-based environmental advice
├── plant-health.html      # Mock plant health detector with file upload
├── community-wall.html    # Pinterest-style masonry photo grid
├── leaderboard.html       # User rankings with crown icons
├── avatar-customizer.html # Avatar selection and customization
├── nature-sounds.html     # Nature soundscapes player
├── achievements.html      # Unlockable achievement badges
├── styles.css            # Global stylesheet with glassmorphism
├── app.js                # Shared JavaScript utilities
└── .replit               # Replit configuration
```

### Design System
**Color Palette:**
- Sage Green: #8fbc8f (primary)
- Dark Green: #2d5016 (text/accents)
- Beige: #f5f5dc (backgrounds)
- Sky Blue: #87ceeb (gradients)
- Soft Green: #c1e1c1 (highlights)

**Typography:**
- Headings: Playfair Display (serif, elegant)
- Body: Poppins (sans-serif, modern)

**Design Features:**
- Glassmorphism cards with backdrop-filter blur
- Smooth hover animations and transitions
- Floating leaf particle effects
- Responsive grid layouts
- Intersection Observer for scroll animations

### Key Features

1. **Plant Growth Tracker**
   - Add plants with name, watering days, and height
   - Animated progress bars for health and growth
   - Data persists in localStorage

2. **Biodiversity Map**
   - Interactive world map with ecosystem pins
   - Modal popups with location details
   - Hover effects and pulse animations

3. **Eco Tips**
   - 10 rotating environmental tips
   - Auto-rotation every 8 seconds
   - Categorized advice with icons

4. **Weather Advice**
   - Geolocation API integration
   - Weather-specific environmental recommendations
   - 5 weather condition types with tailored advice

5. **Plant Health Detector**
   - Mock file upload interface
   - Random health diagnostics
   - Care recommendations

6. **Community Wall**
   - Masonry grid layout (3 columns)
   - 12 nature photos from Unsplash
   - Hover zoom and overlay effects

7. **Leaderboard**
   - Top 10 eco contributors
   - Crown icons for top 3
   - Gradient backgrounds for podium

8. **Avatar Customizer**
   - 12 nature-themed avatars
   - Persistent storage
   - Displayed globally in top-right corner

9. **Nature Sounds Player**
   - Web Audio API synthesizer
   - 6 nature soundscape options
   - Volume control slider

10. **Achievements Board**
    - 12 unlockable achievements
    - Progress tracking
    - Locked/unlocked states with animations

## User Preferences
- No specific preferences set yet
- Default behavior: Clean, professional code without comments unless requested
- Design aesthetic: Modern, nature-inspired, Pinterest-style

## Technical Details

### Technologies Used
- HTML5 (semantic markup)
- CSS3 (Grid, Flexbox, custom properties, animations)
- Vanilla JavaScript (ES6+)
- Web Audio API (nature sounds)
- Geolocation API (weather advice)
- localStorage API (data persistence)
- Google Fonts (Poppins, Playfair Display)
- Unsplash images (nature photography)

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Responsive design: 320px - 1920px+ viewport widths

### Performance Optimizations
- Lazy loading for images
- Intersection Observer for scroll animations
- CSS-only animations where possible
- Minimal external dependencies

## Deployment
- Development server: Python HTTP server on port 5000
- Static file hosting (no backend required)
- Can be deployed to any static hosting service

## Future Enhancements
- Real weather API integration (OpenWeatherMap, etc.)
- User authentication and cloud sync
- Actual image upload and analysis for plant health
- Community photo submission feature
- Achievement unlocking logic based on user actions
- PWA capabilities for offline use
- Social sharing features

## SDG 15: Life on Land
This project supports UN Sustainable Development Goal 15 by:
- Raising awareness about biodiversity conservation
- Encouraging sustainable practices
- Educating users about ecosystems and wildlife
- Promoting individual environmental action
- Tracking positive environmental behaviors

---
*Made with ❤️ for SDG 15 — Life on Land*
