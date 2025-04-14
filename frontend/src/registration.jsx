import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const UserInfoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password:'',
    qualification: '',
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.mobileNumber || !formData.qualification) {
      setError('Please fill out all fields.');
      return;
    }

    console.log('Form submitted:', formData);
    alert('User information successfully submitted!');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Information Form</h2>

      <form onSubmit={handleSubmit} className="w-75 mx-auto">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

            {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Mobile Number Field */}
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Qualification Field */}
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Error message */}
        {error && <p className="text-danger text-center">{error}</p>}

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoForm;
