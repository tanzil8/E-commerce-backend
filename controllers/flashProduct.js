import flashProductModel from '../models/flashProduct.js';

const postFlashProduct = async (req, res) => {
  try {
    const body = req.body;

    // Ensure img is only set if file exists
     body.img = req.file ? req.file.path : null; // Assuming img field is in the form of a URL path

    // Create a new FlashProduct instance with name, price, and img
    let flash = new flashProductModel(body);

    // Save the FlashProduct instance to the database
    await flash.save();

    // Respond with success and the created FlashProduct
    res.status(201).json({
      msg: "FlashProduct upload successful",
      FlashProduct: flash,
    });
  } catch (error) {
    // Log error for debugging purposes (optional)
    console.error(error);

    // Respond with error status and message
  // Respond with error status and message
res.status(500).json({
    msg: "Product not uploaded",
    error: error.message || "An error occurred during the upload.",
  });
  
  }
};


const getFlashProduct = async (req, res) => {
  try {
    // Retrieve all flash products from the database
    let flash = await flashProductModel.find();

    // Respond with success and the retrieved FlashProducts
    res.status(200).json({
      msg: "FlashProducts retrieved successfully",
      FlashProducts: flash,
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



export { postFlashProduct , getFlashProduct};
