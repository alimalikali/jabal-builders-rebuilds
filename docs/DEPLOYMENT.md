# Deployment Guide

## Overview

This guide covers the deployment process for the Jabal Builders website. The application can be deployed to various platforms, with Vercel being the recommended option for Next.js applications.

## Prerequisites

Before deployment, ensure you have:
- All environment variables configured
- Database set up and accessible
- Domain name (if using custom domain)
- SSL certificate (if using custom domain)

## Deployment Options

### 1. Vercel Deployment (Recommended)

#### Automatic Deployment

1. **Connect to GitHub**
   - Push your code to GitHub
   - Go to [Vercel](https://vercel.com)
   - Import your repository
   - Configure environment variables
   - Deploy

#### Manual Deployment

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

### 2. AWS Deployment

#### Using AWS Elastic Beanstalk

1. **Install EB CLI**
   ```bash
   pip install awsebcli
   ```

2. **Initialize EB Application**
   ```bash
   eb init
   ```

3. **Create Environment**
   ```bash
   eb create production
   ```

4. **Deploy**
   ```bash
   eb deploy
   ```

#### Using AWS EC2

1. **Launch EC2 Instance**
   - Choose Ubuntu Server
   - Configure security groups
   - Launch instance

2. **Connect to Instance**
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

3. **Install Dependencies**
   ```bash
   sudo apt update
   sudo apt install nodejs npm nginx
   ```

4. **Deploy Application**
   ```bash
   git clone your-repo
   cd your-repo
   npm install
   npm run build
   ```

5. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Start Application**
   ```bash
   npm start
   ```

### 3. DigitalOcean Deployment

1. **Create Droplet**
   - Choose Ubuntu
   - Select plan
   - Choose datacenter
   - Add SSH key

2. **Connect to Droplet**
   ```bash
   ssh root@your-droplet-ip
   ```

3. **Install Dependencies**
   ```bash
   apt update
   apt install nodejs npm nginx
   ```

4. **Deploy Application**
   ```bash
   git clone your-repo
   cd your-repo
   npm install
   npm run build
   ```

5. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Start Application**
   ```bash
   npm start
   ```

## Environment Configuration

### Required Environment Variables

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

# Email
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=admin@yourdomain.com

# Next.js
NEXT_PUBLIC_API_URL=https://your-domain.com/api
```

## SSL Configuration

### Using Let's Encrypt

1. **Install Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Obtain Certificate**
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

3. **Auto-renewal**
   ```bash
   sudo certbot renew --dry-run
   ```

## Monitoring Setup

### 1. Application Monitoring

#### Using PM2

1. **Install PM2**
   ```bash
   npm install -g pm2
   ```

2. **Start Application**
   ```bash
   pm2 start npm --name "jabal-builders" -- start
   ```

3. **Monitor**
   ```bash
   pm2 monit
   ```

### 2. Server Monitoring

#### Using New Relic

1. **Install New Relic**
   ```bash
   npm install newrelic
   ```

2. **Configure**
   ```javascript
   // newrelic.js
   exports.config = {
     app_name: ['Jabal Builders'],
     license_key: 'your_license_key',
     logging: {
       level: 'info'
     }
   };
   ```

## Backup Strategy

### 1. Database Backup

```bash
# MongoDB Backup
mongodump --uri="your_mongodb_uri" --out=/backup/$(date +%Y%m%d)

# Restore
mongorestore --uri="your_mongodb_uri" /backup/backup_folder
```

### 2. Application Backup

```bash
# Backup
tar -czf backup.tar.gz /path/to/application

# Restore
tar -xzf backup.tar.gz -C /path/to/restore
```

## Maintenance

### Regular Tasks

1. **Update Dependencies**
   ```bash
   npm update
   ```

2. **Check Logs**
   ```bash
   pm2 logs
   ```

3. **Monitor Performance**
   - Check server resources
   - Monitor application metrics
   - Review error logs

### Troubleshooting

1. **Application Issues**
   - Check application logs
   - Verify environment variables
   - Test database connection

2. **Server Issues**
   - Check system logs
   - Monitor resource usage
   - Verify network connectivity

## Security Considerations

1. **Firewall Configuration**
   ```bash
   sudo ufw allow 80
   sudo ufw allow 443
   sudo ufw enable
   ```

2. **Security Headers**
   ```nginx
   add_header X-Frame-Options "SAMEORIGIN";
   add_header X-XSS-Protection "1; mode=block";
   add_header X-Content-Type-Options "nosniff";
   ```

3. **Regular Updates**
   - Update system packages
   - Update Node.js
   - Update dependencies

## Performance Optimization

1. **Enable Compression**
   ```nginx
   gzip on;
   gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   ```

2. **Caching**
   ```nginx
   location /static/ {
       expires 1y;
       add_header Cache-Control "public, no-transform";
   }
   ```

3. **Load Balancing**
   - Set up multiple instances
   - Configure load balancer
   - Implement health checks 