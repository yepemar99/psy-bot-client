import { routes } from "@/routes";
import authService from "@/services/auth.services";
import type { IUser } from "@/types/auth.interface";
import { useState } from "react";
import { toast } from "sonner";

interface UseUserReturn {
  user: IUser | null;
  loading: boolean;
  error: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (
    email: string,
    password: string,
    name: string,
    lastname: string
  ) => Promise<void>;
  logout: () => void;
}

export function useUser(): UseUserReturn {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (
    email: string,
    password: string,
    name: string,
    lastname: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      await authService.register(name, lastname, email, password);
      toast.success("Registro exitoso");
      window.location.href = routes.auth.login;
    } catch {
      toast.error("Error en el registro");
      setError("Error en el registro");
    } finally {
      setLoading(false);
    }
  };

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.login(email, password);
      if (response?.user && response?.token) {
        setUser({
          id: response.user.id,
          name: response.user.name,
          lastname: response.user.lastname,
          email: response.user.email,
        } as IUser);
        localStorage.setItem("token", response.token);
      }
      //comentario
      console.log("response");
      toast.success("Inicio de sesión exitoso");
      window.location.href = routes.home;
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Error en el inicio de sesión";
      toast.error(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, error, register, login, logout };
}
