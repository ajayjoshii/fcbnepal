import React from "react";

function CrudForm({
  fields,
  formData,
  setFormData,
  onSubmit,
  onCancel,
  editing,
}) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-xl shadow p-6 mb-6"
    >

      <div className="grid md:grid-cols-2 gap-5">

        {fields.map((field) => (

          <div
            key={field.name}
            className={field.full ? "md:col-span-2" : ""}
          >

            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {field.label}
            </label>

            {field.type === "textarea" ? (

              <textarea
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                rows={5}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            ) : (

              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            )}

          </div>

        ))}

      </div>

      <div className="flex gap-3 mt-6">

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold"
        >
          {editing ? "Update" : "Create"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="bg-slate-200 hover:bg-slate-300 px-6 py-3 rounded-lg font-semibold"
        >
          Cancel
        </button>

      </div>

    </form>
  );
}

export default CrudForm;