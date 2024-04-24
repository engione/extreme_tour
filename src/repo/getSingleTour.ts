import supabase from "../utils/supabase";

export async function getSingleTour(id: number) {
  let { data, error } = await supabase.from("tours").select("*").eq('id', id);
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
