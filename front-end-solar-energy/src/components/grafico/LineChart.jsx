import "./LineChart.css";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Api from "../../api/Api";

export const LineChart = () => {
  const [listaUnidades, setListaUnidades] = useState([]);
  const [listaLancamentos, setListaLancamentos] = useState([]);
  const token = localStorage.getItem("token");

  // Realiza a busca dos dados ao carregar a página
  useEffect(() => {
    buscaUnidades();
    buscaListaLancamentos();
  }, []);

  // Faz a busca de informações no endpoint unidades
  const buscaUnidades = () => {
    Api.get("/unidades", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => setListaUnidades(response.data.unidades))
      .catch((error) => alert(error));
  };
  // Faz a busca de informações no endpoint lancamentos
  const buscaListaLancamentos = () => {
    Api.get("/geracao", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => setListaLancamentos(response.data))
      .catch((error) => alert(error));
  };
  // Lógica para cálculo dos dados do gráfico
  const unidadesAtivas = listaUnidades.filter(
    (unidades) => unidades.active == true
  );

  // Passa os dados do array para o objeto que vai conter os dados do gráfico
  let somaLancamentos = {};
  listaLancamentos.forEach((element) => {
    let estaAtiva = false;
    Object.values(unidadesAtivas).forEach((unidades) => {
      if (unidades.id === element.unidade_id) {
        estaAtiva = true;
      }
    });
    //
    if (estaAtiva) {
      if (somaLancamentos[element.reference_date]) {
        somaLancamentos[element.reference_date] += element.total_generated;
      } else {
        somaLancamentos[element.reference_date] = element.total_generated;
      }
    }

    // Caso o tamanho do objeto seja maior que 12 retira o mês mais antigo
    if (Object.keys(somaLancamentos).length > 12) {
      delete somaLancamentos[Object.keys(somaLancamentos)[0]];
    }
  });

  // Criação do Gráfico
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Title,
    Tooltip,
    Filler
  );

  // Declaração dos dados usados e configurações visuais do gráfico
  const labels = Object.keys(somaLancamentos).map((key) => key);
  const data = {
    labels,
    datasets: [
      {
        label: "Total de energia gerada por mês",
        data: Object.values(somaLancamentos).map((value) => value),
        backgroundColor: "white",
        borderColor: "aqua",
        tension: 0.4,
        fill: true,
      },
    ],
  };
  // Configurações do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        onClick: false,
        align: "start",
        labels: {
          boxWidth: 0,
          font: {
            size: 30,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Isso garante que o eixo Y comece em zero
        position: "left", // Posição do eixo Y (pode ser "left" ou "right" dependendo do layout desejado)
      },
    },
  };
  return (
    <div id="lineChart">
      <Line options={options} data={data} />
    </div>
  );
};
