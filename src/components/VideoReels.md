# VideoReels Component

A modern, responsive video reels component with social media-style layout featuring a main vertical video (9:16 ratio) and a 2x2 grid of posts (4:5 ratio) for showcasing water softener demonstrations, customer testimonials, and educational content.

## Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│                    heading                              │
│                  sub heading                            │
│                                                         │
│  ┌─────────────┐    ┌─────────┐ ┌─────────┐            │
│  │             │    │         │ │         │            │
│  │    Main     │    │  Post   │ │  Post   │            │
│  │    Reel     │    │  4:5    │ │  4:5    │            │
│  │    9:16     │    │         │ │         │            │
│  │             │    └─────────┘ └─────────┘            │
│  │             │    ┌─────────┐ ┌─────────┐            │
│  │             │    │  Post   │ │  Post   │            │
│  │             │    │  4:5    │ │  4:5    │            │
│  └─────────────┘    └─────────┘ └─────────┘            │
└─────────────────────────────────────────────────────────┘
```

## Features

- ✅ **Social Media Layout**: Main vertical video (9:16) + 2x2 grid posts (4:5)
- ✅ **Auto-play functionality**: Videos automatically start when they come into view
- ✅ **Intersection Observer**: Performance-optimized with visibility detection
- ✅ **Muted by default**: Complies with browser auto-play policies
- ✅ **User controls**: Play/pause and mute/unmute buttons
- ✅ **Navigation**: Arrow keys and grid item navigation
- ✅ **Responsive design**: Works on desktop and mobile devices
- ✅ **Accessibility**: ARIA labels and keyboard navigation
- ✅ **Framer Motion animations**: Smooth transitions and hover effects
- ✅ **Error handling**: Loading states and retry functionality

## Usage

The component is already integrated into the main App.jsx file and positioned before the ProductShowcase component.

## Customization

### Adding Your Own Videos

1. **Create directories** in the `public` folder:
   ```
   public/
   ├── videos/
   │   ├── water-softener-demo.mp4
   │   ├── installation-process.mp4
   │   ├── customer-testimonial.mp4
   │   └── maintenance-tips.mp4
   └── images/
       ├── video-thumb-1.jpg
       ├── video-thumb-2.jpg
       ├── video-thumb-3.jpg
       └── video-thumb-4.jpg
   ```

2. **Update the videos array** in `VideoReels.jsx`:
   ```javascript
   const videos = [
     {
       id: 1,
       src: '/videos/water-softener-demo.mp4',
       title: 'Your Video Title',
       description: 'Your video description',
       thumbnail: '/images/video-thumb-1.jpg'
     },
     // Add more videos...
   ]
   ```

### Video Specifications

**Main Video (Reel format):**
- **Format**: MP4 (H.264 codec)
- **Aspect Ratio**: 9:16 (vertical)
- **Resolution**: 1080x1920 pixels (recommended)
- **Duration**: 15-60 seconds for optimal engagement
- **File Size**: Under 15MB for fast loading

**Grid Videos (Post format):**
- **Format**: MP4 (H.264 codec) or static images
- **Aspect Ratio**: 4:5 (portrait)
- **Resolution**: 1080x1350 pixels (recommended)
- **Duration**: 15-30 seconds for videos
- **File Size**: Under 10MB for videos, under 2MB for images

**Thumbnail specifications:**
- **Main video**: 540x960 pixels (9:16 aspect ratio)
- **Grid items**: 540x675 pixels (4:5 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: Under 200KB

### Styling Customization

The component uses CSS classes that can be customized in `App.css`:

- `.video-reels-section` - Main section container
- `.video-player` - Video player container
- `.video-controls` - Control buttons overlay
- `.video-thumbnails` - Thumbnail navigation
- `.video-progress` - Progress dots

### Content Ideas for Water Softener Business

1. **Product Demonstrations**
   - Before/after water quality comparisons
   - Soap lather tests with hard vs soft water
   - Scale buildup prevention demos

2. **Installation Process**
   - Professional installation walkthrough
   - System components explanation
   - Maintenance procedures

3. **Customer Testimonials**
   - Real customer experiences
   - Before/after home improvements
   - Cost savings testimonials

4. **Educational Content**
   - Water hardness explanation
   - Health benefits of soft water
   - Appliance protection benefits

## Technical Details

### Dependencies
- React 19+
- Framer Motion 12+
- Lucide React (for icons)

### Browser Support
- Modern browsers with Intersection Observer API support
- Fallback handling for older browsers

### Performance Considerations
- Videos use `preload="metadata"` for faster initial loading
- Intersection Observer prevents unnecessary video loading
- Lazy loading for thumbnail images
- Optimized CSS animations with GPU acceleration

## Accessibility Features

- ARIA labels for all interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast control buttons
- Focus indicators for keyboard users

## Mobile Optimization

- Touch-friendly controls
- Swipe navigation (can be added)
- Responsive thumbnail grid
- Optimized for portrait orientation
- Reduced control sizes for mobile

## Future Enhancements

Potential features that can be added:
- Swipe gestures for mobile navigation
- Video progress bar
- Fullscreen mode
- Social sharing buttons
- Video analytics tracking
- Playlist functionality
- Captions/subtitles support
