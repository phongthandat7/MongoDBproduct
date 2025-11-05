const Product = require('../models/product');

exports.postAddProduct = async (req, res) => {
  try {
    const { title, imageUrl, price, description, userId } = req.body;

    // if (!title || !imageUrl || !price || !description || !userId) {
    //   return res.status(400).json({ message: 'Missing required fields' });
    // }

    const product = new Product({
      title,
      imageUrl,
      price,
      description,
      userId
    });

    const result = await product.save();
    res.status(201).json({
      message: 'Product created successfully',
      product: result
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const prodId = req.params.productId;
    const product = await Product.findById(prodId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      message: 'Fetched product successfully',
      product
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};


exports.putEditProduct = async (req, res, next) => {
  try {
    const prodId = req.params.productId;
    const { title, price, imageUrl, description } = req.body;

    const product = await Product.findById(prodId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.title = title;
    product.price = price;
    product.description = description;
    product.imageUrl = imageUrl;

    const updatedProduct = await product.save();

    return res.json({
      message: 'Updated product successfully',
      product: updatedProduct
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json({
      message: 'Fetched products successfully',
      products
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

exports.delDeleteProduct = async (req, res, next) => {
  try {
    const prodId = req.params.productId;
    await Product.findByIdAndDelete(prodId);

    res.json({ message: 'Deleted product successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};
