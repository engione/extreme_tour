import supabase from "../utils/supabase";

export const SignUp = async (email: string, password: string, fullName: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: { data: { fullName: fullName} }
  });

  return { data, error };
};
