# Online Marketplace Application

Welcome to the Online Marketplace Application repository! This project is a versatile solution for creating an online marketplace where users can browse, buy, and sell products. The application is designed to provide a user-friendly interface for customers and sellers alike.

## Features

- User Authentication: Register, log in, and manage user accounts.
- Product Categories: Organize products into categories for easy navigation.
- Product Listings: Sellers can list their products with detailed descriptions and images.
- Shopping Cart: Add products to the cart, review, and complete the purchase.
- Order Tracking: View order history and track delivery status.
- Seller Dashboard: Sellers have access to a dedicated dashboard to manage products and sales.
- Enquiries: Users can contact sellers and ask questions about products.
- Blogging: Share insights and updates through a blogging platform.
- Coupon System: Apply and manage coupons for discounts.

## Project Structure

The project is organized as follows:

- `client-admin/`: Frontend directory for the admin dashboard.
  - `public/`: Static assets and HTML files.
  - `src/`: Source code for the frontend application.

- `server/`: Backend directory for server-side logic and APIs.
  - `public/images/`: Images used in the application.
  - `routes/`: Route definitions for API endpoints.
  - `controllers/`: Controllers for handling business logic.
  - `models/`: Database models and schemas.
  - `middlewares/`: Middleware functions for authentication, error handling, etc.
  - `utils/`: Utility functions.
  - `config/`: Configuration files.

- `.gitignore`: Specifies files and directories to be ignored by Git.
- `LICENSE`: The project's license (MIT License).
- `README.md`: This document providing project information and instructions.

## Getting Started

To use the Online Marketplace Application, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Install Node.js and MongoDB on your system.
3. Navigate to the `client-admin` directory and install frontend dependencies using `npm install`.
4. Start the frontend application: `npm start`.
5. Navigate to the `server` directory and install backend dependencies using `npm install`.
6. Configure MongoDB connection settings in `server/config/dbConnect.js`.
7. Start the backend server: `npm start`.

## Usage

- Access the admin dashboard by navigating to `http://localhost:3000` in your web browser.
- Users can browse, search, and order products on the frontend.
- Sellers can manage their products and sales using the seller dashboard.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Experience the power of the Online Marketplace Application and explore its features for creating an engaging online buying and selling experience. If you have any questions, feel free to reach out.
