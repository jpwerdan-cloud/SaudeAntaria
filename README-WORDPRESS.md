# Saude Antar Antarctica - WordPress Plugin

Convert your React/TypeScript Antarctic Expeditions app into a fully functional WordPress plugin!

## 🎯 Features

✅ **Expeditions Management** - Custom post type for Antarctic expeditions
✅ **Projects Portfolio** - Showcase your projects
✅ **Google Maps Integration** - Display expedition locations on interactive map
✅ **Gemini AI Chat** - AI-powered chat assistant for visitor interactions
✅ **REST API** - Full REST API for programmatic access
✅ **Shortcodes** - Easy-to-use shortcodes for front-end display
✅ **Admin Dashboard** - Intuitive WordPress admin interface
✅ **Responsive Design** - Mobile-friendly UI
✅ **Taxonomies** - Organize expeditions by category and region

## 📁 Plugin Structure

```
saude-antar-antarctica/
├── saude-antar-antarctica.php          # Plugin main file
├── composer.json                        # PHP dependencies
├── includes/
│   ├── class-plugin.php                # Main plugin class
│   ├── class-admin.php                 # Admin interface
│   ├── class-public.php                # Frontend functionality
│   ├── class-custom-post-types.php     # CPT registration
│   ├── class-gemini-service.php        # AI integration
│   └── class-rest-api.php              # REST API endpoints
├── assets/
│   ├── css/
│   │   ├── admin.css                   # Admin styles
│   │   └── public.css                  # Frontend styles
│   └── js/
│       ├── admin.js                    # Admin scripts
│       └── public.js                   # Frontend scripts
└── languages/
    └── saude-antar-antarctica.pot       # Translation file
```

## 🚀 Installation

### Prerequisites
- WordPress 6.0 or higher
- PHP 8.1 or higher
- Composer (for dependency management)

### Steps

1. **Clone the branch:**
   ```bash
   git clone https://github.com/jpwerdan-cloud/SaudeAntaria.git
   cd SaudeAntaria
   git checkout wordpress-plugin
   ```

2. **Move plugin to WordPress:**
   ```bash
   cp -r saude-antar-antarctica /path/to/wp-content/plugins/
   cd /path/to/wp-content/plugins/saude-antar-antarctica
   ```

3. **Install dependencies:**
   ```bash
   composer install
   ```

4. **Activate plugin:**
   - Go to WordPress admin dashboard
   - Navigate to Plugins
   - Click "Activate" for "Saude Antar Antarctica"

5. **Configure API keys:**
   - Go to Settings → Saude Antar
   - Add your Google Gemini API key
   - Add your Google Maps API key

## 📖 Usage

### Shortcodes

#### Display Expeditions Grid
```shortcode
[saude_antar_expeditions per_page="9" columns="3"]
```

Parameters:
- `per_page` - Number of expeditions per page (default: 9)
- `columns` - Number of columns (default: 3)

#### Display Map
```shortcode
[saude_antar_map latitude="-70.0" longitude="0.0" zoom="3"]
```

Parameters:
- `latitude` - Map center latitude (default: -70.0)
- `longitude` - Map center longitude (default: 0.0)
- `zoom` - Map zoom level (default: 3)

#### Display Chat Assistant
```shortcode
[saude_antar_chat]
```

### REST API Endpoints

#### Get All Expeditions
```
GET /wp-json/saude-antar/v1/expeditions?per_page=10&paged=1
```

Response:
```json
{
  "data": [
    {
      "id": 1,
      "title": "South Pole Expedition 2024",
      "content": "...",
      "latitude": "-90.0",
      "longitude": "0.0",
      "thumbnail": "...",
      "link": "..."
    }
  ],
  "total": 5,
  "pages": 1
}
```

#### Get Single Expedition
```
GET /wp-json/saude-antar/v1/expeditions/1
```

#### Chat with AI
```
POST /wp-json/saude-antar/v1/chat
Content-Type: application/json

{
  "message": "Tell me about Antarctic expeditions"
}
```

Response:
```json
{
  "success": true,
  "response": "..."
}
```

#### Create Expedition (Admin Only)
```
POST /wp-json/saude-antar/v1/expeditions
Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "New Expedition",
  "content": "Description...",
  "latitude": "-70.0",
  "longitude": "0.0"
}
```

## 🔧 Configuration

### API Keys

Go to **WordPress Admin → Saude Antar → API Configuration**

Required API Keys:
- **Google Gemini API Key** - Get from [Google AI Studio](https://aistudio.google.com)
- **Google Maps API Key** - Get from [Google Cloud Console](https://console.cloud.google.com)

### Creating Expeditions

1. Go to **WordPress Admin → Expeditions → Add New**
2. Fill in title and description
3. Set featured image
4. In the right panel, add expedition details:
   - Latitude
   - Longitude
   - Category
   - Region
5. Publish

## 🎨 Customization

### Styling

Frontend styles are in `assets/css/public.css`. Customize:
- Colors (change `#0066cc` to your brand color)
- Spacing and layout
- Card designs
- Chat interface appearance

### Adding Custom Fields

Edit expeditions to add custom fields:
```php
// In class-custom-post-types.php
add_post_type_support('saude_expedition', array(
    'title',
    'editor',
    'thumbnail',
    'custom-fields',
));
```

## 📊 Taxonomies

### Expedition Categories
- Research
- Tourism
- Scientific Study
- Emergency Response

### Polar Regions
- Antarctic Peninsula
- Ross Sea
- Weddell Sea
- East Antarctica

## 🔐 Security

- All API endpoints verify user permissions
- NONCE tokens protect against CSRF attacks
- Sanitize and escape all user inputs
- Use WordPress security functions

## 🐛 Troubleshooting

### API Key not working?
- Verify API key is correct in WordPress admin
- Check API key has correct permissions
- Test API key in Google's console

### Map not displaying?
- Ensure Google Maps API key is set
- Check browser console for errors
- Verify API key has Maps permission

### Chat not responding?
- Verify Gemini API key is set
- Check API quota hasn't been exceeded
- Review server logs for errors

## 📝 Converting Your React Code

### Component → Post Type Meta
```typescript
// React
const expedition = { title, description, latitude, longitude }

// WordPress
post_meta:
  - _expedition_latitude
  - _expedition_longitude
```

### State Management → Options
```typescript
// React
const [settings, setSettings] = useState(...)

// WordPress
get_option('saude_antar_settings')
update_option('saude_antar_settings', $value)
```

### API Calls → WordPress REST
```typescript
// React
fetch('/api/expeditions')

// WordPress
fetch('/wp-json/saude-antar/v1/expeditions')
```

## 🚀 Next Steps

- [ ] Add expedition image gallery
- [ ] Implement user accounts and expedition bookings
- [ ] Add email notifications
- [ ] Create admin reports/analytics
- [ ] Add multi-language support
- [ ] Implement caching
- [ ] Create mobile app integration
- [ ] Add social media sharing

## 📄 License

GPL v2 or later

## 🤝 Support

For issues or questions:
- Check [WordPress Plugin Documentation](https://developer.wordpress.org/plugins/)
- Review plugin code comments
- Open an issue on GitHub

## 🔄 Version History

### v1.0.0 (2026-05-22)
- Initial release
- Custom post types (Expeditions, Projects)
- REST API endpoints
- Gemini AI integration
- Google Maps integration
- Shortcodes for front-end display
- Admin dashboard

---

**Ready to deploy to WordPress!** 🎉

1. Push this branch
2. Create a release on GitHub
3. Download and activate in WordPress
4. Configure your API keys
5. Start creating expeditions!
