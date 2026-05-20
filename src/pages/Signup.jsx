import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // localStorage me save hoga
    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/account");
  };

  return (
    <div className="page">
      <div className="form-wrapper signup-wrapper">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name*</label>

            <input
              type="text"
              placeholder="Enter full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone number*</label>

            <input
              type="text"
              placeholder="Enter phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email address*</label>

            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password *</label>

            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Company name</label>

            <input
              type="text"
              placeholder="Enter company name"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="radio-group">
            <p>Are you an Agency?*</p>

            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="primary-btn create-account-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
