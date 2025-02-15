import product from '../models/product.js';  // Adjust path based on your structure

const postProduct = async (req, res) => {
  try {
    const body = req.body;

    // Ensure 'img' is only set if file exists
    body.img = req.file ? req.file.path : null; // Assuming img field is in the form of a URL path

    // Check if required fields are present
    if (!body.name || !body.price) {
      return res.status(400).json({ msg: 'Name and price are required.' });
    }

    // Create a new product instance with name, price, and img
    const productData = new product(body);

    // Log body to debug if needed (remove for production)
    console.log(body);

    // Save the product instance to the database
    await productData.save();

    // Respond with success and the created product
    res.status(201).json({
      msg: "Best-selling product uploaded successfully",
      product: productData,
    });
  } catch (error) {
    // Log error for debugging purposes (optional)
    console.error(error);

    // Respond with error status and message
    res.status(500).json({
      msg: "Product not uploaded",
      error: error.message || "An error occurred during the upload.",
    });
  }
};

const getProduct = async (req, res) => {
  try {
    // Retrieve all best-selling products from the database
    const productData = await product.find();

    // Respond with success and the retrieved productData products
    res.status(200).json({
      msg: " products retrieved successfully",
      products: productData,
    });
  } catch (error) {
    // Log error for debugging purposes
    console.error(error);

    // Respond with error status and message
    res.status(500).json({
      msg: "Failed to retrieve products",
      error: error.message || "An error occurred during the retrieval.",
    });
  }
};

export { postProduct, getProduct };
