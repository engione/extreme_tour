import supabase from "../utils/supabase";

export async function getHistory(idUser: string) {
  let { data, error } = await supabase
    .from("history")
    .select("id, idUser, idTour, date, tours(id, name, price, img)")
    .eq("idUser", idUser);

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

  return data;
}
