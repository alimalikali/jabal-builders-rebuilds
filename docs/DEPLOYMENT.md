# Deployment Guide

## Overview

This guide covers the deployment process for the Jabal Builders website. The application is deployed on Vercel, which is the recommended platform for Next.js applications.

## Prerequisites

Before deployment, ensure you have:
- All environment variables configured
- MongoDB database set up and accessible
- Resend API key for email functionality
- Domain name (if using custom domain)
- SSL certificate (if using custom domain)

## Vercel Deployment

### 1. GitHub Integration (Recommended)

1. **Push your code to GitHub**
   - Create a GitHub repository
   - Push your code to the repository

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Select the repository and configure the project

3. **Configure Environment Variables**
   Add the following environment variables in Vercel project settings:
   ```
   # Database
   MONGODB_URI=your_mongodb_uri

   # Email (Resend)
   RESEND_API_KEY=your_resend_api_key
   EMAIL_TO=admin@yourdomain.com
   EMAIL_FROM=noreply@yourdomain.com

   # Authentication
   AUTH_SECRET=your_auth_secret
   AUTH_URL=https://your-domain.com/api/auth

   # Next.js
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   ```

4. **Deploy**
   - Vercel will automatically deploy your application
   - Each push to the main branch will trigger a new deployment

### 2. Manual Deployment using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

## Domain Configuration

### 1. Custom Domain Setup in Vercel

1. **Add Domain**
   - Go to your project settings in Vercel
   - Navigate to Domains
   - Add your custom domain

2. **Configure DNS**
   - Update your DNS settings as per Vercel's instructions
   - Wait for DNS propagation

### 2. SSL Configuration

- Vercel automatically provides SSL certificates through Let's Encrypt
- No manual configuration required
- Certificates are automatically renewed

## Environment Configuration

### Production Environment Variables

```env
# Database
MONGODB_URI=your_mongodb_uri

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
EMAIL_TO=admin@yourdomain.com
EMAIL_FROM=noreply@yourdomain.com

# Authentication
AUTH_SECRET=your_auth_secret
AUTH_URL=https://your-domain.com/api/auth

# Next.js
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Monitoring and Analytics

### 1. Vercel Analytics

- Enable Vercel Analytics in project settings
- Monitor page views and performance metrics
- Track Core Web Vitals

### 2. Error Monitoring

- Use Vercel Error Monitoring
- Set up error alerts
- Monitor application errors

### 3. Performance Monitoring

- Use Vercel Speed Insights
- Monitor API routes performance
- Track page load times

## Deployment Best Practices

1. **Pre-deployment Checklist**
   - Run all tests
   - Check for linting errors
   - Verify environment variables
   - Test build locally

2. **Security**
   - Use strong environment secrets
   - Enable security headers
   - Configure CORS properly

3. **Performance**
   - Enable caching where appropriate
   - Optimize images and assets
   - Use CDN for static assets

## Backup and Recovery

1. **Database Backup**
   - Set up automated MongoDB backups
   - Store backups in secure location
   - Test backup restoration process

2. **Code Backup**
   - Maintain Git repository backups
   - Document deployment configurations
   - Store environment variables securely

## Troubleshooting

### Common Deployment Issues

1. **Build Failures**
   - Check build logs in Vercel
   - Verify dependencies
   - Check environment variables

2. **Runtime Errors**
   - Check Vercel logs
   - Verify database connection
   - Check API endpoints

3. **Performance Issues**
   - Monitor Vercel Analytics
   - Check database queries
   - Optimize API responses

## Maintenance

1. **Regular Updates**
   - Update dependencies regularly
   - Monitor security advisories
   - Keep documentation updated

2. **Monitoring**
   - Check Vercel dashboard regularly
   - Monitor error rates
   - Track performance metrics

3. **Scaling**
   - Monitor resource usage
   - Optimize database queries
   - Use caching effectively 