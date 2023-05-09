# shopping-cart-app-backend

Shopping Cart Backend - This backend application is designed to handle requests for a shopping cart of a user.

## [Click my Trello Board](https://trello.com/b/AnnhHH6R/shopping-cart-spree)

## [Click my Deployed Backend URL](https://...)

## [Click my Deployed Frontend URL](https://...)

---
### Team Members

Our team consisted of three members, each with a specific role:

- Touhami Ben
- Vandhana Mohan

To learn more about our team members, please refer to the GitHub and LinkedIn links provided in the table below.

| Dev Team | Role | GitHub | LinkedIn
| :--------------: | :-------: | :-------: | :-------: |
| **Touhami Ben**  | Backend Lead & Design Lead  | [GitHub](https://github.com/touhami-ben)  | [LinkedIn](https://www.linkedin.com/in/touhami-benmessaoud-aaa072259/)
| **Vandhana Mohan**  | Front Lead & Testing Lead | [GitHub](https://github.com/Vandhana-Mohan) | [LinkedIn](https://www.linkedin.com/in/vandhanamohan/)

---

## Installation

Getting Started

1. Fork and Clone the repository using the following command:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory and install the dependencies using the following command:

   ```
   `cd` into this repository
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   PORT=<port-number>
   ```

4. Start the server using the following command

   ```
   npm start
   ```

Available Endpoints

The following endpoints are available:

        | Method |   Endpoint     |      Description        |
        | :----: | :----------:   | :-------------------:   |
        |  GET   |   /groceries   |    Get all groceries    |
        |  GET   | /groceries/:id |  Get a grocery by ID    |
        |  POST  |   /groceries   |  Create a new cart      |
        |  PUT   | /groceries/:id | Update items from cart  |
        | DELETE | /groceries/:id | Delete items from cart  |

---
