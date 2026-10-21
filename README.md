XEventBooking
XEventBooking is a modern, responsive web application built with React, Vite, and Material-UI (or custom CSS modules) designed to facilitate event discovery, search, calendar scheduling, and ticket booking management.

🚀 Features
Event Discovery & Home Dashboard: Explore featured events, categories, blogs, and promotional offers.

Search & Filtering: Easily search for specific events or filter them by venue and category.

Interactive Calendar & Time Slot Picker: Select preferred dates and available time slots using custom calendar components (DaySelector, TimeSlotPicker).

Booking Modal: Seamlessly book events and manage reservations via an intuitive modal interface.

My Bookings: View and track confirmed event bookings.

Responsive Layout: Fully optimized for mobile, tablet, and desktop viewports.

📂 Project Structure
Plaintext
XEVENTBOOKING-main/
└── x-event-booking/
    ├── public/             # Public assets and Vite SVG icon
    ├── src/
    │   ├── Home/           # Home page views and components
    │   ├── MyBookings/     # User booking management views
    │   ├── Search/         # Event search and filtering logic
    │   ├── assets/         # Images, logos, icons, and banners
    │   ├── components/     # Reusable UI components
    │   │   ├── Accordion/
    │   │   ├── AutohideSnackbar/
    │   │   ├── BookingModal/
    │   │   ├── Calendar/   # DaySelector & TimeSlotPicker
    │   │   ├── EventCard/
    │   │   ├── Footer/
    │   │   ├── HeroSlider/
    │   │   ├── IconCard/
    │   │   ├── NavBar/
    │   │   ├── SearchBar/
    │   │   └── Sections/   # Blogs, FAQs, Offers, DownloadApp, etc.
    │   ├── App.jsx         # Root component
    │   ├── App.css         # Global application styles
    │   ├── main.jsx        # Application entry point
    │   └── index.css       # Base styles
    ├── package.json        # Dependencies and scripts
    ├── vite.config.js      # Vite configuration
    └── vercel.json         # Deployment configuration for Vercel
🛠️ Getting Started
Follow these steps to set up and run the project locally on your machine.

Prerequisites
Ensure you have Node.js (version 16 or higher recommended) and npm installed.

Installation
Clone or extract the project repository.

Navigate to the project directory:

Bash
cd XEVENTBOOKING-main/x-event-booking
Install the dependencies:

Bash
npm install
Running the Development Server
Start the Vite development server:

Bash
npm run dev
Open your browser and visit the local URL provided in your terminal (usually http://localhost:5173).

Building for Production
To create an optimized production build:

Bash
npm run build
📦 Deployment
This project includes a vercel.json configuration file, making it ready for deployment on Vercel:

Connect your GitHub repository to Vercel.

Vercel will automatically detect Vite and configure the build settings (npm run build with the dist output directory).
