import { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
// import { NEXT_URL } from '../config/index';

type User = {
  isLogin: boolean;
  [key: string]: any
};

interface AppContextInterface {
  user: User | null;
  error: string | null;
  register(): void;
  login(): void;
  logout(): void;
};

export const AuthContext = createContext<AppContextInterface|null>(null);

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User|null>(null);
  const [error, setError] = useState<string|null>(null)

  const router = useRouter()

  // This useEffect is executed everytime the website is opened or refreshed
  useEffect(()=>checkUserLoggedIn(), [])

  // Register
  const register = async() => {
    // Sign up here
    console.log('Sign up');
    const res = {
      ok: true,
      data: {
        name: "userName",
        id: "userId",
        message: "message"
      }
    }

    if (res) {
        setUser({isLogin: true, ...res.data});
        router.push('/');
    } else {
        setError("Failed to register");
    }
  }

  // Login
  const login = async () => {
    console.log('Login');
    // Login here
    const res = {
      ok: true,
      data: {
        name: "userName",
        id: "userId",
        message: "message"
      }
    }

    if (res) {
      setUser({ isLogin: true, ...res.data });
      router.push('/');
    } else {
      setError("Failed to login");
    }
  }

  // Logout
  const logout = async () => {
    console.log('Logout');
    const res = {
      ok: true
    };

    if(res.ok) {
      setUser(null);
      router.push('/');
    }
  }

  const checkUserLoggedIn = () => {
    // Check login status
    // If the token is stored in the localStrage, check  the storage
    // If the token is stored in the http only cookie, call a status check API endpoint(that is not developed yet.)
    const res = {
      ok: true,
      data: {
        name: "userName",
        id: "userId",
        message: "message"
      }
    }

    if (res) {
      setUser({ isLogin: true, ...res.data });
      router.push('/');
    } else {
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;