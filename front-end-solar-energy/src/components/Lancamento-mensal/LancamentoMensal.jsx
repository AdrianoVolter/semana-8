import { useState, useEffect } from "react";
import Api from "../../api/Api";
import styles from "./Lancamento-mensal.module.css";

export const LancamentoGeracaoMensal = () => {
  const [unidades, setUnidades] = useState([]);
  const [unidadeGeradora, setUnidadeGeradora] = useState("");
  const [data, setData] = useState("");
  const [total, setTotal] = useState("");
  const [formulario, setFormulario] = useState(false);
  const [token , setToken] = useState("");
  const lancamento = {
    unidade_id: unidadeGeradora,
    reference_date: data,
    total_generated: total,
  };
  useEffect(() => {
    // Obtenha o token do localStorage
    const storedToken = localStorage.getItem("token");
    setToken(storedToken); // Defina o token no estado
  }, []);

  useEffect(() => {
    // Verifique se o token está presente
    if (token) {
      // Faça a chamada à API com o token
      Api.get("/unidades", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use "Bearer" antes do token
        },
      })
        .then((response) => {
          setUnidades([...response.data.unidades]);
        })
        .catch((error) => {
          console.error(error);
        });
        
    }
  }, [token]);
  const validar = () => {
    if (unidadeGeradora && data && total) {
      setFormulario(true);
    } else {
      setFormulario(false);
    }
  };

  useEffect(() => {
    validar();
  }, [unidadeGeradora, data, total]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formulario && token) {
      Api.post("/geracao", lancamento, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use "Bearer" antes do token
        },
        })
        .then((response) => {
          alert(`Lançamento cadastrado com sucesso! ${response.data.message}`);
          limparCampos();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Preencha todos os campos!");
    }
  };

  function limparCampos() {
    setUnidadeGeradora("");
    setData("");
    setTotal("");
  }

  return (
    <div className={styles.formulario}>
      <form onSubmit={handleSubmit}>
        <div className={styles.gridContainer}>
          <div className={styles.unidade}>
            <label>Unidade Geradora</label>
            <select
              name=""
              id=""
              value={unidadeGeradora}
              onChange={(e) => setUnidadeGeradora(e.target.value)}
            >
              <option value="">Escolha a unidade</option>
              {unidades.map((unidade) => (
                <option key={unidade.id} value={unidade.id}>
                  {unidade.nickname}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.data}>
            <label htmlFor="">Mês/ano</label>
            <input
              type="month"
              name="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className={styles.total}>
            <label htmlFor="">Total kw gerado</label>
            <input
              type="number"
              name="kw"
              value={total}
              onChange={(e) => setTotal(e.target.valueAsNumber)}
            />
          </div>
          <div className={styles.botao}>
            <button type="submit" className="btn btn-primary">
              Cadastro
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
