import React, { useContext, useState } from 'react';
import AdminContext from '../context/AdminContext';

export default function Login() {
  const {
    filterByNumericValues, setFilterByNumericValues,
    handleFilterByName, handleNumericValues,
  } = useContext(AdminContext);
  const dropDownPlanetOptions = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const [planetsOptions, setPlanetsOptions] = useState(dropDownPlanetOptions);
  const dropDownCompareOptions = ['maior que', 'menor que', 'igual a'];
  const [typeFilter, setTypeFilter] = useState('population');
  const [iqualFilter, setIqualFilter] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState(0);

  // function verification e setNumericComparison feito com ajuda do Jão victor da mesma turma.
  function optionsVerification() {
    const index = dropDownPlanetOptions.indexOf(typeFilter);
    const newOptions = [...planetsOptions];
    newOptions.splice(index, 1);
    setPlanetsOptions(newOptions);
  }
  function setNumericComparison() {
    const filterPlanets = {
      column: typeFilter,
      comparison: iqualFilter,
      value: numberFilter,
    };
    setFilterByNumericValues([...filterByNumericValues, filterPlanets]);
    handleNumericValues([...filterByNumericValues, filterPlanets]);
    optionsVerification();
  }
  const { dataFiltered } = useContext(AdminContext);
  function filterBar() {
    return (
      <>
        <label htmlFor="searchText">
          Pesquisar:
          <input
            type="text"
          // value={ filterByName }
            id="searchText"
            name="searchText"
            placeholder="Pesquisar por nome"
            data-testid="name-filter"
            onChange={handleFilterByName}
          />
        </label>
        <label htmlFor="typeFilter">
          Types:
          <select
            type="dropdown"
            name="typeFilter"
            id="typeFilter"
            data-testid="column-filter"
            onChange={({ target }) => { setTypeFilter(target.value); }}
          >
            {
            planetsOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))
          }
          </select>
        </label>
        <label htmlFor="iqualFilter">
          <select
            type="dropdown"
            name="iqualFilter"
            id="iqualFilter"
            data-testid="comparison-filter"
            onChange={({ target }) => { setIqualFilter(target.value); }}
          >
            {
            dropDownCompareOptions.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))
          }
          </select>
        </label>
        <label htmlFor="numberFilter">
          <input
            type="number"
            name="numberFilter"
            id="numberFilter"
            data-testid="value-filter"
            onChange={({ target }) => { setNumberFilter(target.value); }}
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={setNumericComparison}
        >
          Filtrar
        </button>

        { dataFiltered.map((planet) => (
          <tr key={planet.name}>

            <td>{ planet.name }</td>
          </tr>
        ))}
      </>
    );
  }

  // if (dataFiltered === undefined) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="container">
      {filterBar}
      <label htmlFor="addName">
        Nome:
        <input type="text" placeholder="Nome" />
      </label>

      <label htmlFor="addEmail">
        Email:
        <input type="email" placeholder="Email" />
      </label>
      <label htmlFor="addPassword">
        Senha:
        <input type="text" placeholder="Senha" />
      </label>
      <label htmlFor="addCpf">
        Cpf:
        <input type="number" placeholder="44498139798" />
      </label>
      <button type="submit" className="btn btn-primary">Adicionar</button>
    </div>
  );
}
