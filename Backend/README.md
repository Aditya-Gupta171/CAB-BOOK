# User API Documentation

## Register User
Endpoint for registering a new user in the system.

### Endpoint
```
POST /users/register
```

### Request Body
```json
{
    "fullname": {
        "firstname": "string", // required, min 3 characters
        "lastname": "string"   // optional, min 3 characters if provided
    },
    "email": "string",        // required, valid email format
    "password": "string"      // required, min 6 characters
}
```

### Response Codes
- `201`: User successfully created
- `400`: Validation error or missing required fields
- `409`: Email already exists
- `500`: Server error

### Success Response
```json
{
    "status": "success",
    "message": "User registered successfully",
    "token": "jwt_token_string"
}
```

### Error Response
```json
{
    "status": "error",
    "message": "Error message description",
    "errors": [] // Array of validation errors if any
}
```

### Example
```json
// Request
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "secure123"
}
```

## Login User
Endpoint for user authentication.

### Endpoint
```
POST /users/login
```

### Request Body
```json
{
    "email": "string",    // required, valid email format
    "password": "string"  // required, min 6 characters
}
```

### Response Codes
- `200`: Login successful
- `400`: Validation error or missing required fields
- `401`: Invalid credentials
- `500`: Server error

### Success Response
```json
{
    "status": "success",
    "message": "Login successful",
    "token": "jwt_token_string",
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string"
    }
}
```

### Error Response
```json
{
    "status": "error",
    "message": "Invalid credentials",
    "errors": [] // Array of validation errors if any
}
```

### Example
```json
// Request
{
    "email": "john.doe@example.com",
    "password": "secure123"
}
```

## Get User Profile
Endpoint for retrieving authenticated user's profile.

### Endpoint
```
GET /users/profile
```

### Headers
```
Authorization: Bearer <jwt_token_string>
```

### Response Codes
- `200`: Profile retrieved successfully
- `401`: Unauthorized or invalid token
- `500`: Server error

### Success Response
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "_id": "string"
}
```

### Error Response
```json
{
    "message": "Unauthorized"
}
```

## Logout User
Logout the current user and blacklist the token provided in cookie or headers 
### Endpoint
```
GET /users/logout 
```

### Headers
```
Authorization: Bearer <jwt_token_string>
```

### Response Codes
- `200`: Successfully logged out
- `401`: Unauthorized or invalid token
- `500`: Server error

### Success Response
```json
{
    "message": "Logged out"
}
```

### Error Response
```json
{
    "message": "Unauthorized"
}
```
