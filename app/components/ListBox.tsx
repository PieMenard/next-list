'use client';

import { useState } from 'react';

const ListBox = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    //fetch API POST
    try {
      const apiResponse = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col item">
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
          type="text"
          name="title"
          className="text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
        />
        <label htmlFor="title">Description</label>
        <textarea
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          value={formData.description}
          name="description"
          className="h-24 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
        />
        <button
          type="submit"
          className="px-6 my-4 text-sm rounded-lg  focus:ring-blue-500 block w-full p-2.5 bg-gray-900 border-gray-600 placeholder-gray-400 text-white"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default ListBox;
