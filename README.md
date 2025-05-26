# Jabal Builders – Excellence in Architecture & Construction  
**Building Tomorrow's Landmarks Today**

![Jabal Builders Logo](public/assets/images/logo.jpg)

---

## 📌 Overview
Welcome to **Jabal Builders**, a premier construction and architectural firm dedicated to **innovation, sustainability, and excellence**. Our website serves as a gateway to explore our cutting-edge projects, services, and our bold vision for the future of the construction industry.

🔗 **[Live Demo](https://jabalbuilders.com)**

---

## 📚 Documentation

For detailed documentation, please refer to the following guides:

- [API Documentation](docs/API.md) - Complete API reference and usage
- [Setup Guide](docs/SETUP.md) - Installation and configuration
- [Deployment Guide](docs/DEPLOYMENT.md) - Deployment instructions

---

## 🚀 Features
- **Modern & Responsive Design** – Optimized for all devices (desktop, tablet, mobile)
- **Interactive Project Showcase** – Explore our featured works with high-quality visuals
- **Comprehensive Services** – Detailed breakdown of our construction solutions
- **Contact & Inquiry System** – Easy communication for potential clients
- **Admin Dashboard** – Secure admin panel for content management
- **SEO-Optimized** – Built for visibility and engagement

---

## 📂 Website Structure

| Route              | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| `/`               | Landing page with company highlights, mission, and featured projects   |
| `/about`          | Our story, vision, and commitment to sustainable architecture         |
| `/services`       | Detailed services: Technical Collaboration, Sustainable Solutions     |
| `/projects`       | Portfolio of completed and ongoing landmark projects                  |
| `/projects/[id]`  | Detailed view of individual projects                                 |
| `/contact`        | Contact form, location, and inquiry submission                       |
| `/admin/*`        | Protected admin routes for content management                        |

---

## 🛠️ Tech Stack

| Category        | Technology                                          |
|----------------|-----------------------------------------------------|
| Framework      | Next.js 15.3.1                                      |
| UI Library     | React 19.0.0                                        |
| Styling        | Tailwind CSS, Radix UI                             |
| Forms          | React Hook Form, Zod                               |
| Database       | MongoDB with Mongoose                              |
| Email          | Resend                                             |
| Authentication | Next.js Auth                                        |
| Hosting        | Vercel                                             |
| Analytics      | Vercel Analytics                                    |

---

## 🎯 Key Features
- **Responsive Design** – Perfect viewing experience across all devices
- **Modern Stack** – Built with the latest technologies
- **Performance Optimized** – Fast loading and smooth interactions
- **SEO Ready** – Structured for maximum visibility
- **Secure** – Protected admin routes and data handling
- **Easy to Manage** – Intuitive admin interface

---

## 🔧 Quick Start

1. **Clone the repository**:
    ```bash
    git clone https://github.com/jabal-builders/jabal-builders-rebuilds.git
    cd jabal-builders-rebuilds
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file with the required variables (see [Setup Guide](docs/SETUP.md))

4. **Run the development server**:
    ```bash
    npm run dev
    ```

5. **Open in browser**:
    Visit `http://localhost:3000`

For detailed setup instructions, please refer to the [Setup Guide](docs/SETUP.md).

---

## 📁 Environment Variables

Required environment variables:

```env
# Database
MONGODB_URI=your_mongodb_uri

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
EMAIL_TO=admin@yourdomain.com
EMAIL_FROM=noreply@yourdomain.com

# Authentication
AUTH_SECRET=your_auth_secret
AUTH_URL=http://localhost:3000/api/auth

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

For production values, please refer to the [Deployment Guide](docs/DEPLOYMENT.md).

---

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](docs/CONTRIBUTING.md) before submitting pull requests.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

For support:
1. Check the [documentation](docs/)
2. Contact our development team at support@jabalbuilders.com

---

## 🙏 Acknowledgments

Special thanks to:
- The Jabal Builders team for their vision and guidance
- Our development team for their dedication
- Our clients for their valuable feedback
