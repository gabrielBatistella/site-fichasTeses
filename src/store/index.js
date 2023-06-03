import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function normalizeString(str) {
  return str.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, '');
}
function getNameCurso(curso) {
  switch (curso) {
    case 'ME':
      return 'Mestrado';
    case 'DO':
      return 'Doutorado';
    case 'DD':
      return 'Doutorado Direto';
    default:
      return 'Inválido';
  }
}

export default new Vuex.Store({
  state: {
    loading: true,

    // Itens carregados da API, e itens organizados para exibição
    entries: [],
    entriesToShow: [],

    // Variáveis usadas para exibir os filtros
    cursos: [],
    programas: [],
    anoInicial: 0,
    anoFinal: 0,

    // Variáveis de controle do filtro
    nameSearch: '',
    yearRange: [0, 0],
    selectedCurso: 0,
    selectedPrograma: 0,

    // Variáveis de controle da ordenação
    ordering: 0,
    inverted: false,
  },

  getters: {
    loading(state) {
      return state.loading;
    },

    entriesToShow(state) {
      return state.entriesToShow;
    },

    cursos(state) {
      return state.cursos;
    },
    programas(state) {
      return state.programas;
    },
    anoInicial(state) {
      return state.anoInicial;
    },
    anoFinal(state) {
      return state.anoFinal;
    },

    nameSearch(state) {
      return state.nameSearch;
    },
    yearRange(state) {
      return state.yearRange;
    },
    selectedCurso(state) {
      return state.selectedCurso;
    },
    selectedPrograma(state) {
      return state.selectedPrograma;
    },

    ordering(state) {
      return state.ordering;
    },
    inverted(state) {
      return state.inverted;
    },

    nameCurso() {
      return getNameCurso;
    },
  },

  mutations: {
    setNameSearch(state, data) {
      state.nameSearch = data.trim();
      this.dispatch('updateEntries');
    },
    setYearRange(state, data) {
      const yearRange = data;
      yearRange[0] = Math.max(data[0], state.anoInicial);
      yearRange[1] = Math.min(data[1], state.anoFinal);
      state.yearRange = yearRange;
      this.dispatch('updateEntries');
    },
    setSelectedCurso(state, data) {
      let curso = data;
      if (data > state.cursos.length) curso = 0;
      state.selectedCurso = curso;
      this.dispatch('updateEntries');
    },
    setSelectedPrograma(state, data) {
      let programa = data;
      if (data > state.programas.length) programa = 0;
      state.selectedPrograma = programa;
      this.dispatch('updateEntries');
    },

    setOrdering(state, data) {
      let ordering = data;
      if (data > 4) ordering = 0;
      state.ordering = ordering;
      this.dispatch('updateEntries');
    },
    setInverted(state, data) {
      state.inverted = data;
      this.dispatch('updateEntries');
    },
  },

  actions: {
    loadDataset({ dispatch }) {
      fetch('http://thanos.icmc.usp.br:4567/api/v1/defesas')
        .then((data) => (data.json()))
        .then((data) => dispatch('receiveData', data.items));
    },

    receiveData({ dispatch, state }, dataReceived) {
      state.entries = dataReceived;
      dispatch('definirCursos');
      dispatch('definirProgramas');
      dispatch('definirDatas');
      dispatch('updateEntries');
      state.loading = false;
    },

    definirCursos({ state }) {
      const cursos = [];
      state.entries.forEach((entry) => {
        if (!cursos.includes(entry.Curso)) cursos.push(entry.Curso);
      });
      state.cursos = cursos;
    },

    definirProgramas({ state }) {
      const programas = [];
      state.entries.forEach((entry) => {
        if (!programas.includes(entry.Programa)) programas.push(entry.Programa);
      });
      state.programas = programas;
    },

    definirDatas({ state }) {
      let dataInicial = parseInt(state.entries.at(0).Data.split('/').slice(-1), 10);
      let dataFinal = dataInicial;
      state.entries.forEach((entry) => {
        const data = parseInt(entry.Data.split('/').slice(-1), 10);
        if (data < dataInicial) {
          dataInicial = data;
        } else if (data > dataFinal) {
          dataFinal = data;
        }
      });
      state.anoInicial = dataInicial;
      state.anoFinal = dataFinal;
      state.yearRange = [dataInicial, dataFinal];
    },

    updateEntries({ state }) {
      // Define função de filtro
      const filterFunction = ((entry) => {
        const entryName = normalizeString(entry.Nome);
        const entryYear = parseInt(entry.Data.split('/').slice(-1), 10);
        return (entryName.includes(normalizeString(state.nameSearch)))
        && (entryYear >= state.yearRange[0] && entryYear <= state.yearRange[1])
        && (state.selectedCurso === 0
          || state.selectedCurso
            === state.cursos.findIndex((curso) => curso === entry.Curso) + 1)
        && (state.selectedPrograma === 0
          || state.selectedPrograma
            === state.programas.findIndex((programa) => programa === entry.Programa) + 1);
      });

      // Define função de ordenação
      let comparisonFunction;
      const paramInverted = (state.inverted) ? -1 : 1;
      switch (state.ordering) {
        case 0:
          comparisonFunction = ((entry1, entry2) => {
            const nome1 = entry1.Nome.trim();
            const nome2 = entry2.Nome.trim();
            return paramInverted * nome1.localeCompare(nome2);
          });
          break;
        case 1:
          comparisonFunction = ((entry1, entry2) => {
            const sobrenome1 = entry1.Nome.trim().split(' ').slice(-1)[0];
            const sobrenome2 = entry2.Nome.trim().split(' ').slice(-1)[0];
            return paramInverted * sobrenome1.localeCompare(sobrenome2);
          });
          break;
        case 2:
          comparisonFunction = ((entry1, entry2) => {
            const data1 = entry1.Data.split('/').reverse().join('');
            const data2 = entry2.Data.split('/').reverse().join('');
            return paramInverted * data1.localeCompare(data2);
          });
          break;
        case 3:
          comparisonFunction = ((entry1, entry2) => {
            const curso1 = entry1.Curso;
            const curso2 = entry2.Curso;
            return paramInverted * curso1.localeCompare(curso2);
          });
          break;
        case 4:
          comparisonFunction = ((entry1, entry2) => {
            const programa1 = entry1.Programa;
            const programa2 = entry2.Programa;
            return paramInverted * programa1.localeCompare(programa2);
          });
          break;
        default:
          throw new Error('Ordenação deu xabu!!');
      }

      // Define função de agrupamento
      let groupFeatureFunction;
      switch (state.ordering) {
        case 0:
          groupFeatureFunction = ((entry) => normalizeString(entry.Nome).trim()[0].toUpperCase());
          break;
        case 1:
          groupFeatureFunction = ((entry) => normalizeString(entry.Nome).trim().split(' ').slice(-1)[0][0].toUpperCase());
          break;
        case 2:
          groupFeatureFunction = ((entry) => entry.Data.split('/').slice(-1)[0]);
          break;
        case 3:
          groupFeatureFunction = ((entry) => entry.Curso);
          break;
        case 4:
          groupFeatureFunction = ((entry) => entry.Programa);
          break;
        default:
          throw new Error('Agrupamento deu xabu!!');
      }

      const organizedEntries = [];
      let aux = [...state.entries];
      aux = aux.filter(filterFunction);
      aux = aux.sort(comparisonFunction);
      aux.forEach((entry) => {
        const feature = groupFeatureFunction(entry);
        let newGroup = true;
        if (organizedEntries.length > 0) {
          newGroup = (feature !== organizedEntries.slice(-1)[0].title);
        }
        if (newGroup) {
          organizedEntries.push({ title: feature, entries: [] });
        }
        organizedEntries[organizedEntries.length - 1].entries.push(entry);
      });

      state.entriesToShow = organizedEntries;
    },
  },

  modules: {

  },
});
