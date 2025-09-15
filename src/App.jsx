import React, { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Exploring React Basics", 
    category: "Tech",
    date: "2025-09-05",
    image: "https://tse1.mm.bing.net/th/id/OIP.RfZfSEFiK5WpYGnKlr1f2gHaEK?pid=Api&P=0&h=220",
    description:
      "A quick dive into React fundamentals like components, props, and state. React makes building interactive UIs painless and efficient with its declarative component-based approach.",
  },
  {
    id: 2,
    title: "Trip to the Northern Mountains",
    category: "Travel",
    date: "2025-08-20",
    image: "https://tse1.mm.bing.net/th/id/OIP.Ri3vTU_RRd4l0kPQuW3EXwHaEK?pid=Api&P=0&h=220",
    description:
      "Beautiful sights and experiences from my recent trip. The mountains offered breathtaking views and a chance to disconnect from the busy world.",
  },
  {
    id: 3,
    title: "10-Minute Pasta Recipe",
    category: "Food",
    date: "2025-08-10",
    image: "https://tse3.mm.bing.net/th/id/OIP.pwjbZaZT0cS5eX6SwXR8oQHaE8?pid=Api&P=0&h=220",
    description:
      "An easy, quick recipe to make delicious pasta at home. Perfect for busy days when you still want a homemade meal.",
  },
  {
    id: 4,
    title: "React State Management Tips",
    category: "Tech",
    date: "2025-07-30",
    image: "https://tse4.mm.bing.net/th/id/OIP.u6LR-0GPznk30devYEKE3gHaEK?pid=Api&P=0&h=220",
    description:
      "Best practices for managing state in React apps. Learn when to use local state, context, or external libraries.",
  },
  {
    id: 5,
    title: "Beach Vibes in Thailand",
    category: "Travel",
    date: "2025-07-15",
    image: "https://thumbs.dreamstime.com/b/island-vibes-beach-ocean-relax-sky-thailand-asia-258729525.jpg",
    description:
      "Relaxing days spent exploring Thai beaches and culture. A perfect mix of adventure and relaxation.",
  },
  {
    id: 6,
    title: "Cake Recipe without Oven",
    category: "Food",
    date: "2025-03-19",
    image: "https://tse4.mm.bing.net/th/id/OIP.nYhLHoPxQrS0HqLdizBP9AHaEK?pid=Api&P=0&h=220",
    description:
      "An easy, quick recipe to make delicious and puffy cake at home no need of oven. Perfect for busy days when you still want a homemade dessert.",
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [likes, setLikes] = useState({});
  const [expandedPosts, setExpandedPosts] = useState({});
  const [sortOrder, setSortOrder] = useState("newest");

  const postsPerPage = 3;

  // Toggle like
  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Toggle Read More
  const toggleExpand = (id) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter + search
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return sortOrder === "newest"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  // Pagination
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-green-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">🌿 My Personal Blog</h1>
        <p className="mt-2 text-sm">Sharing thoughts on Tech, Travel & Food</p>
      </header>

      {/* Filters & Search */}
      <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Category Filter */}
        <div className="flex gap-2">
          {["All", "Tech", "Travel", "Food"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategory === cat ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded px-3 py-1 w-full md:w-64"
        />

        {/* Sort */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Blog Posts */}
      <main className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg mb-3 w-full h-40 object-cover"
            />
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm">
              {post.date} • {post.category}
            </p>

            {/* Description with toggle */}
            <p className="mt-2 text-gray-700">
              {expandedPosts[post.id]
                ? post.description
                : post.description.slice(0, 80) + (post.description.length > 80 ? "..." : "")}
            </p>
            {post.description.length > 80 && (
              <button
                onClick={() => toggleExpand(post.id)}
                className="text-green-600 text-sm mt-1"
              >
                {expandedPosts[post.id] ? "Read Less" : "Read More"}
              </button>
            )}

            {/* Like button */}
            <button
              onClick={() => handleLike(post.id)}
              className="mt-3 self-start px-3 py-1 rounded bg-green-100 text-green-700 hover:bg-green-200"
            >
              {likes[post.id] ? "❤️ Liked" : "🤍 Like"}
            </button>
          </div>
        ))}
      </main>

      {/* Pagination */}
      <div className="flex justify-center gap-2 p-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
