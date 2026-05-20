export default function Account() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="page">
      <div className="account-header">
        <h2>Account Settings</h2>
      </div>

      <div className="account-content">
        <div className="profile-section">
          <div className="profile-wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF02Jj8T2t7PdkytAw42HDuuSz7yXguKn8Lg&s"
              alt="profile"
              className="profile-image"
            />

            <div className="camera-icon">📷</div>
          </div>

          <div>
            <h3>{user?.fullName}</h3>
            <p>{user?.email}</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}
