import { Form, NavLink } from "react-router-dom";

interface NavProps {
  userName: string;
}

const Nav = ({ userName }: NavProps) => {
  return (
    <nav>
      <div>
        <NavLink to="/" aria-label="Go to home">
          HomeBudget
        </NavLink>
      </div>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit">
            <span>Delete User</span>
          </button>
        </Form>
      )}
    </nav>
  );
};
export default Nav;
