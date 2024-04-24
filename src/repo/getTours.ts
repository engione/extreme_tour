import supabase from "../utils/supabase";

export async function getTours() {
  let { data, error } = await supabase.from("tours").select();
  if (error) {
    console.error(
      "Ошибка при получении данных из базы данных Supabase:",
      error
    );
    return [];
  }

  if (!data) {
    console.log("Пустые данные");
    return [];
  }
  
  return data
}
