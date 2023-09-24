import Api from "../api/Api";
import { useEffect, useState } from "react";

export default function dadosUnidades() {
  const [unidades, setUnidades] = useState([]);
  const [unidadesAtivas, setUnidadesAtivas] = useState([]);
  const [unidadeInativa, setUnidadeInativa] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUnidades() {
      try {
        const response = await Api.get("/unidades", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setUnidades(response.data.unidades);
        setCarregando(false);
        setUnidadesAtivas(
          
          response.data.unidades.filter((unidades) => unidades.active === false)
        );

        setUnidadeInativa(
          response.data.unidades.filter((unidades) => unidades.active === true)
        );
      } catch (error) {
        console.log(error);
      }
    }

    fetchUnidades();
  }, []);

  return { unidades, unidadesAtivas, unidadeInativa };
}
