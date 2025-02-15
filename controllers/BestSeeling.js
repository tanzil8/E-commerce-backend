import Bestseeling from '../models/Bestseeling.js';  // Adjust path based on your structure

const postBestSeeling = async (req, res) => {
  try {
    const body = req.body;

    // Ensure 'img' is only set if file exists
    body.img = req.file ? req.file.path : null; // Assuming img field is in the form of a URL path

    // Check if required fields are present
    if (!body.name || !body.price) {
      return res.status(400).json({ msg: 'Name and price are required.' });
    }

    // Create a new bestSeeling instance with name, price, and img
    const bestSelling = new Bestseeling(body);

    // Log body to debug if needed (remove for production)
    console.log(body);

    // Save the bestSeeling instance to the database
    await bestSelling.save();

    // Respond with success and the created bestSeeling
    res.status(201).json({
      msg: "Best-selling product uploaded successfully",
      bestSeeling: bestSelling,
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

const getBestSeeling = async (req, res) => {
  try {
    // Retrieve all best-selling products from the database
    const bestSelling = await Bestseeling.find();

    // Respond with success and the retrieved bestSelling products
    res.status(200).json({
      msg: "Best-selling products retrieved successfully",
      bestSeelings: bestSelling,
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

export { postBestSeeling, getBestSeeling };
