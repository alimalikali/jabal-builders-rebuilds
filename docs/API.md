# API Documentation

## Authentication Endpoints

### POST /api/auth/login
Authenticate a user and return a JWT token.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "token": "string",
  "user": {
    "id": "string",
    "email": "string",
    "role": "string"
  }
}
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
        "videoSrc?": "string",
        "architect": "string",
        "isFeatured": "boolean",
        "area": "string",
        "year": "number",
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
  "videoSrc?": "string",
  "architect": "string",
  "isFeatured": "boolean",
  "area": "string",
  "year": "number",
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
      "id": "string",
      "name": "string",
      "role": "string",
      "content": "string",
      "rating": "number",
      "image": "string",
      "bgColor": "string"
    }
  ]
}
```

## Contact Endpoints

### POST /api/send-email
Send a contact form email.

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
  "success": "boolean",
  "message": "string"
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
  "message": "Invalid or missing authentication token"
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

## Authentication

Most endpoints require authentication using a JWT token. Include the token in the Authorization header:

```
Authorization: auth-session
```
