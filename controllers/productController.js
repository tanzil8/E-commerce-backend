import product from "../modules/productModule.js";


const createproduct = async (req, res) => {
    try {

      
        const body = req.body;
   
      body.image = req.file ? req.file.path : null


        const Data = new product(body);
    
        // Save the data to MongoDB
        await Data.save();
    
        // Send a success response
        res.status(201).json({
          msg: " product uploaded successfully",
          Data: Data,
        });
      } catch (error) {
        // Send an error response if something goes wrong
        res.status(500).json({
          msg: "Error uploading  product",
          error: error.message,
        });
      }
}
const getproduct = async (req, res) => {
    try {
        const body = req.body;
   
        const Data = await product.find(body);
    
        // Send a success response
        res.status(201).json({
          msg: " product get successfully",
          Data: Data,
        });
      } catch (error) {
        // Send an error response if something goes wrong
        res.status(500).json({
          msg: "Error get  product",
          error: error.message,
        });
      }
}
const getproductByid = async (req, res) => {
    try {
        const {id} = req.params;
   
        const Data = await product.findOne({_id: id});
    
        // Send a success response
        res.status(201).json({
          msg: " product get by id successfully",
          Data: Data,
        });
      } catch (error) {
        // Send an error response if something goes wrong
        res.status(500).json({
          msg: "Error get  product by id",
          error: error.message,
        });
      }
}
const deleteproductById = async (req, res) => {
    try {
      const { id } = req.params;  // Get ID from URL params (e.g., /:id)
  

  
      // Delete the  product by ID
      const Data = await product.findByIdAndDelete({_id: id});
  
    
     
      // Send success response
      res.status(200).json({
        msg: " product deleted successfully",
        Data: Data,
      });
    } catch (error) {
      // Send error response if something goes wrong
      res.status(500).json({
        msg: "Error deleting  product",
        error: error.message,
      });
    }
  };
  
export {createproduct, getproduct, getproductByid, deleteproductById}