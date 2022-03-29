import { useState } from "react";

function Register() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [userFormErrs, setUserFormErrs] = useState({
    nameErr: null,
    emailErr: null,
    usernameErr: null,
    passwordErr: null,
    confirmpasswordErr: null,
  });

  const handleFormChange = (event) => {
    // console.log(event.target.id, event.target.value);
    if (event.target.id === "name") {
      setUserForm({
        ...userForm,
        name: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        nameErr:
          event.target.value.length === 0 ? "This field is required" : null,
      });
    } else if (event.target.id === "email") {
      setUserForm({
        ...userForm,
        email: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        emailErr:
          event.target.value.length === 0
            ? "This field is required"
            : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value) == false
            ? "Please enter a valid email"
            : null,
      });
    } else if (event.target.id === "username") {
      setUserForm({
        ...userForm,
        username: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        usernameErr:
          event.target.value.length === 0
            ? "This field is required"
            : /[\s]/.test(event.target.value)
            ? "Username shouldn't contain a space"
            : null,
      });
    } else if (event.target.id === "password") {
      setUserForm({
        ...userForm,
        password: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        passwordErr:
          event.target.value.length === 0
            ? "This field is required"
            : /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(event.target.value) == false
            ? "Weak Password"
            : null,
      });
    } else if (event.target.id === "confirmpassword") {
      setUserForm({
        ...userForm,
        confirmpassword: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        confirmpasswordErr:
        event.target.value.length === 0
          ? "This field is required"
          : event.target.value != userForm.password
          ? "Password doesn't match"
          : null,
      });
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !userFormErrs.usernameErr &&
      !userFormErrs.ageErr &&
      !userFormErrs.positionErr
    ) {
      console.log(userForm);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className={`form-control ${
            userFormErrs.usernameErr ? "border-danger" : ""
          }`}
          id="name"
          aria-describedby="nameHelp"
          value={userForm.name}
          onChange={handleFormChange}
        />
        <div id="nameHelp" className="form-text text-danger">
          {userFormErrs.nameErr}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={userForm.email}
          onChange={handleFormChange}
        />
        <div id="emailelp" className="form-text text-danger">
          {userFormErrs.emailErr}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          aria-describedby="usernameHelp"
          value={userForm.username}
          onChange={handleFormChange}
        />
        <div id="usernameHelp" className="form-text text-danger">
          {userFormErrs.usernameErr}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          password
        </label>
        <input
          type="text"
          className="form-control"
          id="password"
          aria-describedby="passwordHelp"
          value={userForm.password}
          onChange={handleFormChange}
        />
        <div id="passwordHelp" className="form-text text-danger">
          {userFormErrs.passwordErr}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="confirmpassword" className="form-label">
          confirmpassword
        </label>
        <input
          type="text"
          className="form-control"
          id="confirmpassword"
          aria-describedby="confirmpasswordHelp"
          value={userForm.confirmpassword}
          onChange={handleFormChange}
        />
        <div id="confirmpasswordHelp" className="form-text text-danger">
          {userFormErrs.confirmpasswordErr}
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Register;
