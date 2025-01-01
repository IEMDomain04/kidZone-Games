// React Version of the Booking Form
import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim() || !/.+@.+\..+/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.date.trim()) newErrors.date = 'Date is required.';
    if (!formData.time.trim()) newErrors.time = 'Time is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Booking successful!');
      setFormData({ name: '', email: '', date: '', time: '' });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <img src="data:image/jpeg;base64,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" alt="" />
        <h1 className="text-2xl font-bold mb-4 text-center">Booking Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Booking Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              aria-required="true"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.date && <span className="text-red-500 text-sm">{errors.date}</span>}
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              aria-required="true"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
            {errors.time && <span className="text-red-500 text-sm">{errors.time}</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
