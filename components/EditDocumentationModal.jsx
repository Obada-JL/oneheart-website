"use client";
import { useState, useRef } from "react";

export default function EditDocumentationModal({ doc, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: doc.title,
    description: doc.description,
    detailsLink: doc.detailsLink,
  });
  const fileRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("detailsLink", formData.detailsLink);

    const files = fileRef.current.files;
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        form.append("images", files[i]);
      }
    }

    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Documentation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full border rounded p-2"
              rows={4}
            />
          </div>
          <div>
            <label className="block mb-1">Details Link</label>
            <input
              type="text"
              value={formData.detailsLink}
              onChange={(e) =>
                setFormData({ ...formData, detailsLink: e.target.value })
              }
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1">Images (optional)</label>
            <input
              type="file"
              ref={fileRef}
              multiple
              accept="image/*"
              className="w-full border rounded p-2"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#47a896] text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
