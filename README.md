# Alura Geek - E-commerce Website for Geek Products

This project is part of the Alura Latam challenges. It consists of a website for the sale of geek products, where we can dynamically add new products or delete them using json-server.

## Description

The Alura Geek project is a dynamic e-commerce website designed for the sale of geek products. The main features include:

- **Display of Products**: The main page displays a variety of geek products fetched from a JSON server.
- **Add Products**: Users can add new products through a form, which validates inputs and sends the data to the server.
- **Delete Products**: Users can delete existing products from the inventory, and the changes are reflected on the server.
- **Error Handling**: The project includes robust error handling for form validation and server interactions.

### Key Files and Their Functions

- **index.html**: The main HTML file that structures the website.
- **db.json**: A mock database file used by json-server to store product information.
- **agregarProductos.js**: Handles the addition of new products by capturing form data, validating inputs, and sending a request to the server.
- **conexion.js**: Manages API connections, including functions to fetch, add, and delete products from the JSON server.
- **eliminarProductos.js**: Facilitates product deletion by interacting with the server to remove products.
- **errores.js**: Contains error types and messages used for form validation.
- **mostrarProductos.js**: Fetches and displays products on the main page by interacting with the server.

## Installation

To set up the project locally, follow these steps:

1. **Prerequisites**: Ensure you have Node.js and npm installed on your machine.

2. **Clone the repository**:
    ```sh
    git clone https://github.com/JuanPa2710/alura-geek.git
    cd alura-geek
    ```

3. **Install dependencies**:
    ```sh
    npm install
    ```

4. **Start the json-server**:
    ```sh
    npx json-server --watch db.json
    ```

5. **Open the website**: Open `index.html` in your preferred web browser to view the site.

## Usage

To use the project, follow these instructions:

1. **Add a Product**:
   - Navigate to the "Add Product" page.
   - Fill in the product details and submit the form.

2. **Delete a Product**:
   - Navigate to the product list.
   - Click the delete button next to the product you wish to remove.

## Contributing

We welcome contributions to this project! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request.

For issues, please use the GitHub issue tracker.

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, feel free to contact the project maintainers. Alternatively, you can reach out via the project's [GitHub repository](https://github.com/JuanPa2710/alura-geek).

---

