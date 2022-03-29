import { useState } from "react";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "This field is required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "Invalid Email format";
  }

  if (!values.password) {
    errors.password = "This field is required";
  } else if (values.password.length < 8) {
    errors.password = "Password should be more than 8 chars";
  }
  return errors;
};

function Login() {

  const [show, setShow] = useState(true);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <div id="emailelp" className="form-text text-danger">
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div className="mb-3 ">
        <label htmlFor="password" className="form-label">
          password
        </label>
        <div className="input-group">
          <input
            type={show?"text":"password"}
            className="form-control"
            id="password"
            aria-describedby="passwordHelp"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div class="input-group-append">
            <button onClick={()=>setShow(!show)} class="btn btn-outline-secondary" type="button">
              Show/Hide
            </button>
          </div>
        </div>

        {formik.errors.password && formik.touched.password ? (
          <div id="passwordHelp" className="form-text text-danger">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;
