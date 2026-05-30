# 🚗 VehiQL - AI Powered Car Marketplace

VehiQL is a modern AI-powered car marketplace that allows users to discover, save, and reserve vehicles while enabling administrators to manage inventory efficiently. The platform leverages Google Gemini AI for intelligent car image analysis and search capabilities.

## ✨ Features

### 🤖 AI-Powered Features

* AI Car Image Analysis using Gemini AI
* Automatic Car Detail Extraction
* AI-Based Vehicle Search
* Smart Vehicle Recommendations
* Image-to-Car Information Detection

### 👤 User Features

* Secure Authentication with Clerk
* Browse Available Cars
* Search & Filter Vehicles
* Save Favorite Cars
* Reserve Cars
* User Profile Management

### 🛠️ Admin Features

* Admin Dashboard
* Add New Vehicles
* Upload Multiple Car Images
* Manage Inventory
* Update Vehicle Status
* Feature/Unfeature Vehicles
* Delete Vehicles
* View Reservation Records

### ☁️ Cloud Features

* Supabase Storage Integration
* PostgreSQL Database
* Secure Image Uploads
* Cloud-Based Data Management

### 🔒 Security

* Clerk Authentication
* Protected Routes
* Arcjet Security Protection
* Bot Detection
* Rate Limiting

---

## 🏗️ Tech Stack

### Frontend

* Next.js 15
* React 19
* Tailwind CSS
* Shadcn UI
* Lucide React

### Backend

* Next.js Server Actions
* Prisma ORM
* PostgreSQL

### Authentication

* Clerk

### AI Services

* Google Gemini AI

### Storage

* Supabase Storage

### Security

* Arcjet

---

## 📂 Project Structure

```bash
vehiql/
│
├── app/
│   ├── admin/
│   ├── api/
│   ├── sign-in/
│   ├── sign-up/
│   └── onboarding/
│
├── actions/
│   ├── cars.js
│   ├── reservations.js
│   └── search.js
│
├── components/
│   ├── ui/
│   ├── header.jsx
│   ├── footer.jsx
│   └── home-search.jsx
│
├── lib/
│   ├── prisma.js
│   ├── supabase.js
│   ├── checkUser.js
│   └── helpers.js
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── middleware.js
└── .env
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

ARCJET_KEY=

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/vehiql.git
cd vehiql
```

### Install Dependencies

```bash
npm install
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Database Migration

```bash
npx prisma db push
```

### Start Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 📸 AI Car Detection Workflow

1. Upload a Car Image
2. Gemini AI Analyzes the Image
3. Vehicle Information is Extracted
4. Form Auto-Fills:

   * Make
   * Model
   * Year
   * Color
   * Fuel Type
   * Transmission
   * Body Type
   * Mileage
   * Estimated Price
5. Admin Reviews & Saves Vehicle

---

## 🔐 Authentication Flow

* User Registration
* User Login
* Protected Routes
* Role-Based Access Control
* Admin Dashboard Access

---

## 🌐 Deployment

### Deploy Frontend

Recommended Platforms:

* Vercel
* Netlify

### Database

* Supabase PostgreSQL

### Storage

* Supabase Storage

### Authentication

* Clerk

---

## 📈 Future Enhancements

* AI Price Prediction
* AI Chat Assistant
* Vehicle Comparison Tool
* Loan Calculator
* Car Recommendation Engine
* Real-Time Notifications
* Payment Gateway Integration
* Vehicle Inspection Reports
* Dealer Management System

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developed By

Prit Pastagiya

VehiQL – Smart Car Marketplace Powered by AI 🚗✨
