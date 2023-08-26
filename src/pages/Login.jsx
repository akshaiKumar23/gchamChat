import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { currentUser, signInWithGoogle } = UserAuth();
  const navigate = useNavigate();
  console.log(currentUser);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello There👋</h1>
          <p className="py-6">
            Join this Chatroom to get consultanted by our experts
          </p>
          <button onClick={handleLogin} className="btn btn-primary">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
