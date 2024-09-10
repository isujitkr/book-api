import Book from "../models/book.model.js";

//get the list of books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

// Get books by name or term in name
export const getBooksByName = async (req, res) => {
  const { name } = req.query;

  if(!name){
    return res.status(400).json({message: "Please provide the search term"});
  }

  try {
    const regex = new RegExp(`\\b${name}\\b`, 'i'); 

    const books = await Book.find({ name: { $regex: regex } });

    if(books.length == 0){
        return res.status(404).json({message: "No books found with the given name"});
    };

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get books by rent price range
export const getBooksByRentRange = async (req, res) => {
  const { minPrice, maxPrice } = req.query;

  if(!minPrice || !maxPrice){
    return res.status(400).json({message: "Please provide the search terms"});
  }

  try {
    const books = await Book.find({
      rentPerDay: { $gte: minPrice, $lte: maxPrice },
    });

    if(books.length == 0){
        return res.status(404).json({message: "No books found with the given rent price"});
    };

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get books by category, name, and rent per day range
export const getBooksByCategoryNameRent = async (req, res) => {
  const { category, name, minPrice, maxPrice } = req.query;

  if(!category || !name || !minPrice || !maxPrice){
    return res.send(400).json({message: "All fields required"});
  }

  try {
    const books = await Book.find({
      category: { $regex: new RegExp(`\\b${category}\\b`, 'i')},
      name: { $regex: new RegExp(`\\b${name}\\b`, 'i')},
      rentPerDay: { $gte: minPrice, $lte: maxPrice },
    });

    if(books.length == 0){
        return res.status(404).json({message: "No books found with the given details"});
    }

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
