import Api from "../api/Api";
import { useEffect, useState } from "react";

export default function dadosLacamentos() {
  const [mediaConsumo, setMediaConsumo] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchLancamentos() {
      try {
        const response = await Api.get("/geracao", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setCarregando(false);
        setMediaConsumo(
          parseFloat(
            response.data
              .map((geracao) => geracao.total_generated)
              .reduce((a, b) => a + b, 0) / response.data.length
          ).toFixed(0)
        );
      } catch (error) {
        console.log(error);
      }
    }

    fetchLancamentos();
  }, []);
  return { mediaConsumo };
}
