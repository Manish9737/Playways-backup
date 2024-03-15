const Blog = require("../../model/blogSchema");

const createBlog = async (req, res) => {
  try {
    let imgPath = null;

    if (req.file) {
      const { filename } = req.file;
      imgPath = `/images/${filename}`;
    }

    const { title, content } = req.body;
    const blog = new Blog({ title, content, image: imgPath });
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateBlog = async (req, res) => {
  try {
    let imgPath = null;

    if (req.file) {
      const { filename } = req.file;
      imgPath = `/images/${filename}`;
    }

    const { title, content } = req.body;
    const blogData = { title, content, image: imgPath };

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, blogData, {
      new: true,
    });
    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
