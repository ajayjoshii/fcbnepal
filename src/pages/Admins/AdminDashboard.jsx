import React, { useEffect, useState } from "react";

import {
  getSermons,
  createSermon,
  updateSermon,
  deleteSermon,
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getLeaders,
  createLeader,
  updateLeader,
  deleteLeader,
} from "../../api";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("sermons");

  const [sermons, setSermons] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [leaders, setLeaders] = useState([]);

  const [editing, setEditing] = useState(null);

  const [sermonForm, setSermonForm] = useState({
    title: "",
    speaker: "",
    description: "",
    date: "",
    youtube_url: "",
  });

  const [blogForm, setBlogForm] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
  });

  const [leaderForm, setLeaderForm] = useState({
    name: "",
    position: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      const [sermonRes, blogRes, leaderRes] = await Promise.all([
        getSermons(),
        getBlogs(),
        getLeaders(),
      ]);

      setSermons(
        Array.isArray(sermonRes.data)
          ? sermonRes.data
          : sermonRes.data?.results || []
      );

      setBlogs(
        Array.isArray(blogRes.data)
          ? blogRes.data
          : blogRes.data?.results || []
      );

      setLeaders(
        Array.isArray(leaderRes.data)
          ? leaderRes.data
          : leaderRes.data?.results || []
      );
    } catch (error) {
      console.error(error);
      alert("Failed to load admin data");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("isAdmin");

    window.location.href = "/admin/login";
  };

  const handleSermonSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editing) {
        await updateSermon(editing, sermonForm);
      } else {
        await createSermon(sermonForm);
      }

      resetSermonForm();
      await loadData();
    } catch (error) {
      console.error(error);
      alert("Failed to save sermon");
    }
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editing) {
        await updateBlog(editing, blogForm);
      } else {
        await createBlog(blogForm);
      }

      resetBlogForm();
      await loadData();
    } catch (error) {
      console.error(error);
      alert("Failed to save blog");
    }
  };

  const handleLeaderSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editing) {
        await updateLeader(editing, leaderForm);
      } else {
        await createLeader(leaderForm);
      }

      resetLeaderForm();
      await loadData();
    } catch (error) {
      console.error(error);
      alert("Failed to save leader");
    }
  };

  const handleDeleteSermon = async (id) => {
    if (!window.confirm("Delete this sermon?")) return;

    try {
      await deleteSermon(id);
      await loadData();
    } catch (error) {
      console.error(error);
      alert("Failed to delete sermon");
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await deleteBlog(id);
      await loadData();
    } catch (error) {
      console.error(error);
      alert("Failed to delete blog");
    }
  };

  const handleDeleteLeader = async (id) => {
    if (!window.confirm("Delete this leader?")) return;

    try {
      await deleteLeader(id);
      await loadData();
    } catch (error) {
      console.error(error);
      alert("Failed to delete leader");
    }
  };

  const editSermon = (sermon) => {
    setActiveTab("sermons");
    setEditing(sermon.id);

    setSermonForm({
      title: sermon.title || "",
      speaker: sermon.speaker || "",
      description: sermon.description || "",
      date: sermon.date || "",
      youtube_url: sermon.youtube_url || "",
    });
  };

  const editBlog = (blog) => {
    setActiveTab("blogs");
    setEditing(blog.id);

    setBlogForm({
      title: blog.title || "",
      description: blog.description || "",
      content: blog.content || "",
      image: blog.image || "",
    });
  };

  const editLeader = (leader) => {
    setActiveTab("leaders");
    setEditing(leader.id);

    setLeaderForm({
      name: leader.name || "",
      position: leader.position || "",
      description: leader.description || "",
      image: leader.image || "",
    });
  };

  const resetSermonForm = () => {
    setEditing(null);

    setSermonForm({
      title: "",
      speaker: "",
      description: "",
      date: "",
      youtube_url: "",
    });
  };

  const resetBlogForm = () => {
    setEditing(null);

    setBlogForm({
      title: "",
      description: "",
      content: "",
      image: "",
    });
  };

  const resetLeaderForm = () => {
    setEditing(null);

    setLeaderForm({
      name: "",
      position: "",
      description: "",
      image: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white px-5 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              FCBC Admin Dashboard
            </h1>

            <p className="text-gray-400 text-sm">
              {localStorage.getItem("adminEmail")}
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Sermons</p>
            <h2 className="text-3xl font-bold mt-2">
              {sermons.length}
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Blogs</p>
            <h2 className="text-3xl font-bold mt-2">
              {blogs.length}
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Leaders</p>
            <h2 className="text-3xl font-bold mt-2">
              {leaders.length}
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow mb-8">
          <div className="flex overflow-x-auto border-b">
            <button
              onClick={() => {
                setActiveTab("sermons");
                resetSermonForm();
              }}
              className={`px-6 py-4 font-semibold whitespace-nowrap ${
                activeTab === "sermons"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              Sermons
            </button>

            <button
              onClick={() => {
                setActiveTab("blogs");
                resetBlogForm();
              }}
              className={`px-6 py-4 font-semibold whitespace-nowrap ${
                activeTab === "blogs"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              Blogs
            </button>

            <button
              onClick={() => {
                setActiveTab("leaders");
                resetLeaderForm();
              }}
              className={`px-6 py-4 font-semibold whitespace-nowrap ${
                activeTab === "leaders"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              Leaders
            </button>
          </div>
        </div>

        {activeTab === "sermons" && (
          <div className="space-y-8">
            <form
              onSubmit={handleSermonSubmit}
              className="bg-white rounded-xl shadow p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">
                  {editing ? "Edit Sermon" : "Add Sermon"}
                </h2>

                {editing && (
                  <button
                    type="button"
                    onClick={resetSermonForm}
                    className="text-gray-500"
                  >
                    Cancel
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Sermon title"
                  value={sermonForm.title}
                  onChange={(e) =>
                    setSermonForm({
                      ...sermonForm,
                      title: e.target.value,
                    })
                  }
                  className="border rounded-lg px-4 py-3"
                  required
                />

                <input
                  type="text"
                  placeholder="Speaker"
                  value={sermonForm.speaker}
                  onChange={(e) =>
                    setSermonForm({
                      ...sermonForm,
                      speaker: e.target.value,
                    })
                  }
                  className="border rounded-lg px-4 py-3"
                />

                <input
                  type="date"
                  value={sermonForm.date}
                  onChange={(e) =>
                    setSermonForm({
                      ...sermonForm,
                      date: e.target.value,
                    })
                  }
                  className="border rounded-lg px-4 py-3"
                />

                <input
                  type="url"
                  placeholder="YouTube URL"
                  value={sermonForm.youtube_url}
                  onChange={(e) =>
                    setSermonForm({
                      ...sermonForm,
                      youtube_url: e.target.value,
                    })
                  }
                  className="border rounded-lg px-4 py-3"
                />

                <textarea
                  placeholder="Description"
                  value={sermonForm.description}
                  onChange={(e) =>
                    setSermonForm({
                      ...sermonForm,
                      description: e.target.value,
                    })
                  }
                  className="border rounded-lg px-4 py-3 md:col-span-2"
                  rows="4"
                />
              </div>

              <button className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg">
                {editing ? "Update Sermon" : "Add Sermon"}
              </button>
            </form>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">
                  Sermon List
                </h2>
              </div>

              {loading ? (
                <div className="p-6">Loading...</div>
              ) : sermons.length === 0 ? (
                <div className="p-6 text-gray-500">
                  No sermons found.
                </div>
              ) : (
                <div className="divide-y">
                  {sermons.map((sermon) => (
                    <div
                      key={sermon.id}
                      className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div>
                        <h3 className="font-bold text-lg">
                          {sermon.title}
                        </h3>

                        <p className="text-gray-500">
                          {sermon.speaker}
                        </p>

                        <p className="text-gray-400 text-sm mt-1">
                          {sermon.date}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => editSermon(sermon)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDeleteSermon(sermon.id)
                          }
                          className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "blogs" && (
          <div className="space-y-8">
            <form
              onSubmit={handleBlogSubmit}
              className="bg-white rounded-xl shadow p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">
                  {editing ? "Edit Blog" : "Add Blog"}
                </h2>

                {editing && (
                  <button
                    type="button"
                    onClick={resetBlogForm}
                    className="text-gray-500"
                  >
                    Cancel
                  </button>
                )}
              </div>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Blog title"
                  value={blogForm.title}
                  onChange={(e) =>
                    setBlogForm({
                      ...blogForm,
                      title: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                  required
                />

                <input
                  type="text"
                  placeholder="Short description"
                  value={blogForm.description}
                  onChange={(e) =>
                    setBlogForm({
                      ...blogForm,
                      description: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                />

                <input
                  type="url"
                  placeholder="Image URL"
                  value={blogForm.image}
                  onChange={(e) =>
                    setBlogForm({
                      ...blogForm,
                      image: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                />

                <textarea
                  placeholder="Blog content"
                  value={blogForm.content}
                  onChange={(e) =>
                    setBlogForm({
                      ...blogForm,
                      content: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                  rows="8"
                />
              </div>

              <button className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg">
                {editing ? "Update Blog" : "Add Blog"}
              </button>
            </form>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">
                  Blog List
                </h2>
              </div>

              {blogs.length === 0 ? (
                <div className="p-6 text-gray-500">
                  No blogs found.
                </div>
              ) : (
                <div className="divide-y">
                  {blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div>
                        <h3 className="font-bold text-lg">
                          {blog.title}
                        </h3>

                        <p className="text-gray-500">
                          {blog.description}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => editBlog(blog)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDeleteBlog(blog.id)
                          }
                          className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "leaders" && (
          <div className="space-y-8">
            <form
              onSubmit={handleLeaderSubmit}
              className="bg-white rounded-xl shadow p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">
                  {editing ? "Edit Leader" : "Add Leader"}
                </h2>

                {editing && (
                  <button
                    type="button"
                    onClick={resetLeaderForm}
                    className="text-gray-500"
                  >
                    Cancel
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Leader name"
                  value={leaderForm.name}
                  onChange={(e) =>
                    setLeaderForm({
                      ...leaderForm,
                      name: e.target.value,
                    })
                  }
                  className="border rounded-lg px-4 py-3"
                  required
                />

                <input
                  type="text"
                  placeholder="Position"
                  value={leaderForm.position}
                  onChange={(e) =>
                    setLeaderForm({
                      ...leaderForm,
                      position: e.target.value,
                    })
                  }
                  className="border rounded-lg px-4 py-3"
                />

                <input
                  type="url"
                  placeholder="Image URL"
                  value={leaderForm.image}
                  onChange={(e) =>
                    setLeaderForm({
                      ...leaderForm,
                      image: e.target.value,
                    })
                  }
                  className="border rounded-lg px-4 py-3 md:col-span-2"
                />

                <textarea
                  placeholder="Description"
                  value={leaderForm.description}
                  onChange={(e) =>
                    setLeaderForm({
                      ...leaderForm,
                      description: e.target.value,
                    })
                  }
                  className="border rounded-lg px-4 py-3 md:col-span-2"
                  rows="5"
                />
              </div>

              <button className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg">
                {editing ? "Update Leader" : "Add Leader"}
              </button>
            </form>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">
                  Leader List
                </h2>
              </div>

              {leaders.length === 0 ? (
                <div className="p-6 text-gray-500">
                  No leaders found.
                </div>
              ) : (
                <div className="divide-y">
                  {leaders.map((leader) => (
                    <div
                      key={leader.id}
                      className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        {leader.image && (
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        )}

                        <div>
                          <h3 className="font-bold text-lg">
                            {leader.name}
                          </h3>

                          <p className="text-gray-500">
                            {leader.position}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => editLeader(leader)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDeleteLeader(leader.id)
                          }
                          className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;