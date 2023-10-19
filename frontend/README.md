## User Guide

Follow these steps to set up and run this project on your local machine:

### Prerequisites

Before you begin, make sure you have the following prerequisites installed:

1. **Node.js:** Download and install the latest version of Node.js from [https://nodejs.org](https://nodejs.org).

### Installation

1. **Clone this repository** to your local machine using Git:

   git clone https://github.com/nenadmne/Online-Library.git

2. **Change to the project directory**:

   cd Online-Library

3. **Install project dependencies using npm**:

   npm install

4. **Run the project**:

   npm run dev

### Usage

This project is designed with two distinct user roles: **Admin** and **User**. Each role has specific responsibilities and access privileges.

#### Admin Role

- **Admins** have the highest level of access and control over the system. They can:
  - Manage (delete) user accounts.
  - Accept or decline orders from user
  - Access on products (add/edit/delete functions)
  - Read customer support tickets
  - Delete reviews that contain snesitive content

#### User Role

- **Users**:
  - Add products to cart nad submitting orders
  - Posting reviews

### Important Note

Please be aware that this project is still under development, and some features may not be fully implemented.

#### Admin Credentials

- Username: admin
- Password: password

#### Librarian Credentials

- Username: user
- Password: password

You can use the provided credentials to log in and explore the available features. Keep in mind that this is a testing environment, and changes may occur during the development process.