# API Documentation

## Authentication

The application uses Next.js middleware for authentication with auth-session. Include the session cookie in requests:

```
Cookie: auth-session=<session-token>
```

## Projects Endpoints

### GET /api/projects
Get all projects.

**Response:**
```json
{
  "projects": [
    {
      "_id": "string",
      "title": "string",
      "location": "string",
      "category": "string",
      "description": "string",
      "imageSrc": "string",
      "videoSrc": "string (optional)",
      "architect": "string",
      "isFeatured": "boolean",
      "area": "string",
      "year": "number",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}
```

### GET /api/projects/:id
Get a specific project by ID.

**Response:**
```json
{
  "_id": "string",
  "title": "string",
  "location": "string",
  "category": "string",
  "description": "string",
  "imageSrc": "string",
  "videoSrc": "string (optional)",
  "architect": "string",
  "isFeatured": "boolean",
  "area": "string",
  "year": "number",
  "createdAt": "string",
  "updatedAt": "string"
}
```

## Testimonials Endpoints

### GET /api/testimonials
Get all testimonials.

**Response:**
```json
{
  "testimonials": [
    {
      "_id": "string",
      "name": "string",
      "role": "string",
      "content": "string",
      "rating": "number",
      "image": "string",
      "bgColor": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}
```

## Contact Form Endpoint

### POST /api/send-email
Send a contact form email using Resend.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string",
  "phone": "string",
  "serviceInterest": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

## Dashboard Statistics

### GET /api/dashboard-stats
Get dashboard statistics (requires authentication).

**Response:**
```json
{
  "totalProjects": "number",
  "featuredProjects": "number",
  "totalTestimonials": "number",
  "averageRating": "number"
}
```

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "error": "string",
  "message": "string"
}
```

### 401 Unauthorized
```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing session"
}
```

### 404 Not Found
```json
{
  "error": "Not Found",
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred"
}
```

## Rate Limiting

API endpoints are rate-limited to prevent abuse:
- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users
