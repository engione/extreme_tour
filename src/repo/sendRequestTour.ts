import supabase from "../utils/supabase";

export async function sendRequestTour(
  id: number,
  idUser: string,
  idTour: number,
  date: string
) {
  const { data, error } = await supabase
    .from("history")
    .insert([{ id: id, idUser: idUser, idTour: idTour, date: date }])
    .select();

  if (error) {
    console.error("Ошибка при отправки заявки:", error);
  }

  return { data, error };
}
