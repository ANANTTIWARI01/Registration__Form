import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const PasswordChangeForm = () => {
  // State to store the values of the input fields
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // State to track any error messages
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');  // Clear any previous errors

    // Basic validation to ensure passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      setError('New password and confirm password do not match.');
      return;
    }

    // Assuming password change is successful
    console.log('Password changed:', formData);
    alert('Password successfully changed!');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Change Password</h2>

      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        {/* Old Password Field */}
        <div className="form-group">
          <label htmlFor="oldPassword">Old Password</label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* New Password Field */}
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Confirm Password Field */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-danger text-center">{error}</p>}

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PasswordChangeForm;
