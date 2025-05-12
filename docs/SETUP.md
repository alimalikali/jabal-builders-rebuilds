# Setup Instructions

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- Git
- MongoDB (v6 or higher)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jabal-builders-rebuilds.git
   cd jabal-builders-rebuilds
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Database
    MONGODB_URI=xxxxxxxxxxxx

   # Email (Resend)
    RESEND_API_KEY=aaaaaaaaaaaaaaaa
    EMAIL_TO=xxxx@gmail.com

   # Next.js
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

4. **Database Setup**
   - Create a MongoDB database
   - Update the `MONGODB_URI` in your `.env` file
   - Run the database migrations:
     ```bash
     npm run migrate
     ```

## Development

1. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

2. **Run linting**
   ```bash
   npm run lint
   ```

3. **Type checking**
   ```bash
   npm run type-check
   ```

## Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```



## Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## Common Issues and Solutions

### Database Connection Issues
- Ensure MongoDB is running
- Check the `MONGODB_URI` in your `.env` file
- Verify network connectivity

### Build Errors
- Clear the `.next` directory: `rm -rf .next`
- Delete `node_modules`: `rm -rf node_modules`
- Reinstall dependencies: `npm install`
- Rebuild: `npm run build`

### Environment Variables
- Ensure all required environment variables are set
- Check for typos in variable names
- Verify the values are correct

## Development Workflow

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding standards
   - Write tests for new features
   - Update documentation

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

4. **Push to remote**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a pull request**
   - Follow the PR template
   - Request reviews
   - Address feedback

## Code Standards

- Follow the ESLint configuration
- Use TypeScript for type safety
- Write meaningful commit messages
- Document new features and changes
- Write tests for new functionality

## Performance Optimization

1. **Image Optimization**
   - Use Next.js Image component
   - Optimize image sizes
   - Use appropriate formats

2. **Code Splitting**
   - Use dynamic imports
   - Implement lazy loading
   - Optimize bundle size

3. **Caching**
   - Implement proper caching strategies
   - Use SWR for data fetching
   - Optimize API responses

## Security Best Practices

1. **Environment Variables**
   - Never commit `.env` files
   - Use strong secrets
   - Rotate credentials regularly

2. **Authentication**
   - Implement proper JWT handling
   - Use secure password hashing
   - Implement rate limiting

3. **API Security**
   - Validate all inputs
   - Implement CORS properly
   - Use HTTPS in production

## Monitoring and Maintenance

1. **Error Tracking**
   - Implement error boundaries
   - Use logging services
   - Monitor application errors

2. **Performance Monitoring**
   - Track page load times
   - Monitor API response times
   - Track resource usage

3. **Regular Maintenance**
   - Update dependencies
   - Monitor security advisories
   - Perform regular backups 