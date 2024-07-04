import {
  Link,
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Uh oh! We've got a problem.</h1>
      <p>
        {isRouteErrorResponse(error)
          ? error.data.message || error.statusText
          : "Unknown error message."}
      </p>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};
export default Error;
