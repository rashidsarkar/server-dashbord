 

A complete backend solution for managing a personal portfolio website. This system helps you manage projects, skills, education, blog posts, and user information.

🔗 **Live Backend**: [Your deployed backend URL]

---

## 🚀 Tech Stack

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **TypeScript** – Typed superset of JavaScript
- **Prisma ORM** – Type-safe database interaction
- **PostgreSQL** – Database
- **JWT** – Authentication
- **Cookie-Parser, CORS** – Middleware

---

## ⚙️ Setup Guide

1. **Clone the repository**

   ```bash
   git clone [your-repository-url]
   cd [repository-name]
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**
   Create a `.env` file with the following variables:

   ```env
   DATABASE_URL=your_postgresql_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run Prisma migrations**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 📚 API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

#### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### User Profile

#### Get User Profile

```http
GET /api/user/profile
Authorization: Bearer <token>
```

#### Update User Profile

```http
PUT /api/user/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "bio": "Updated bio",
  "avatar": "avatar-url"
}
```

### Projects

#### Create Project

```http
POST /api/projects
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Project Title",
  "description": "Project Description",
  "imageUrl": "image-url",
  "liveUrl": "live-url",
  "githubUrl": "github-url",
  "technologies": ["React", "Node.js"]
}
```

#### Get All Projects

```http
GET /api/projects
```

#### Get Project by ID

```http
GET /api/projects/:id
```

### Skills

#### Create Skill Category

```http
POST /api/skill-categories
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Frontend",
  "description": "Frontend Development Skills"
}
```

#### Add Skill

```http
POST /api/skills
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "React",
  "categoryId": "category-id",
  "proficiency": 90
}
```

### Education

#### Add Education

```http
POST /api/education
Authorization: Bearer <token>
Content-Type: application/json

{
  "institution": "University Name",
  "degree": "Bachelor's Degree",
  "field": "Computer Science",
  "startDate": "2018-09",
  "endDate": "2022-06",
  "description": "Education description"
}
```

### Blog Posts

#### Create Blog Post

```http
POST /api/blog
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Blog Title",
  "content": "Blog content",
  "imageUrl": "image-url",
  "tags": ["web", "development"]
}
```

#### Get All Blog Posts

```http
GET /api/blog
```

---

## 📁 Project Structure

```bash
src
├── modules
│   ├── about
│   ├── auth
│   ├── blog
│   ├── education
│   ├── project
│   ├── project-credential
│   ├── project-feature
│   ├── skill
│   ├── skill-category
│   └── user
├── middlewares
├── routers
├── shared
├── types
├── utils
├── app.ts
└── server.ts
```

---

## 🔮 Future Improvements

- Add image upload functionality
- Implement pagination for blog posts and projects
- Add search functionality
- Add unit and integration testing
- Add Swagger/OpenAPI documentation
- Implement rate limiting
- Add caching layer

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

Crafted with ❤️ by [Your Name]
