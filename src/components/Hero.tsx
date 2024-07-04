import { Form } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <h1>
        Take Control of <span>Your Money</span>
      </h1>
      <p>
        Personal budgeting is the secret to financial freedom. Start your
        journey today.
      </p>
      <Form method="post">
        <input
          type="text"
          name="userName"
          required
          placeholder="What is your name?"
          aria-label="Your Name"
        />
        <button type="submit">
          <span>Create Account</span>
        </button>
      </Form>
    </div>
  );
};
export default Hero;
