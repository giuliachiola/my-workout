import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuActive: false,
    rep: 1,
    sheets: [
      {
        id: 1,
        name: 'Palestra',
        circuits: [
          // bastone
          {
            exercises: [
              {
                title: 'Squat',
                subtitle: 'con bastone allineamento colonna',
                sets: [15],
                recovery: '30s',
              },
              {
                title: 'Stacco',
                subtitle: 'con bastone allineamento colonna',
                sets: [15],
                recovery: '30s',
              },
            ],
            reps: 3
          },
          // cuban press
          {
            exercises: [
              {
                title: 'Cuban press',
                subtitle: 'tirata',
                sets: [15],
                recovery: '30s',
              },
              {
                title: 'Cuban press',
                subtitle: 'girata',
                sets: [15],
                recovery: '30s',
              },
              {
                title: 'Cuban press',
                subtitle: 'distensione',
                sets: [15],
                recovery: '30s',
              },
            ],
            reps: 3
          },
          {
            exercises: [
              {
                title: 'Cuban press',
                subtitle: 'completa',
                sets: [10],
                recovery: '30s',
              },
            ],
            reps: 2
          },
          // circuito
          {
            exercises: [
              {
                title: 'Squot sumo',
                subtitle: 'vuoto',
                sets: [15],
                load: 2,
                recovery: '0s',
              },
              {
                title: 'Abductor machine',
                subtitle: 'seduta avanti',
                sets: [15],
                load: 35,
                recovery: '0s',
              },
              {
                title: 'Fly 2 manubri',
                subtitle: 'in appoggio swissball',
                sets: [8, 8],
                load: 2,
                recovery: '0s',
              },
              {
                title: 'Salite su step',
                subtitle: '2 manubri',
                sets: [10, 10],
                load: 0,
                recovery: '0s',
              },
              {
                title: 'Distensione 2 manubri',
                subtitle: 'panca 30°',
                sets: [8],
                load: 2,
                recovery: '0s',
              },
              {
                title: 'Pulley stretto',
                subtitle: '',
                sets: [8],
                load: 20,
                recovery: '0s',
              },
              {
                title: 'Lateral machine',
                subtitle: 'avanti',
                sets: [8],
                load: 20,
                recovery: '0s',
              },
              {
                title: 'Run',
                subtitle: '',
                sets: ['8min'],
                recovery: '3min',
              },
            ],
            reps: 3
          },
        ]
      },
      {
        id: 2,
        name: 'Casa',
        circuits: [
          // bastone
          {
            exercises: [
              {
                title: 'Squat',
                subtitle: 'con bastone allineamento colonna',
                sets: [15],
                recovery: '30s',
              },
              {
                title: 'Stacco',
                subtitle: 'con bastone allineamento colonna',
                sets: [15],
                recovery: '30s',
              },
            ],
            reps: 3
          },
          // cuban press
          {
            exercises: [
              {
                title: 'Cuban press',
                subtitle: 'tirata',
                sets: [15],
                recovery: '30s',
              },
              {
                title: 'Cuban press',
                subtitle: 'girata',
                sets: [15],
                recovery: '30s',
              },
              {
                title: 'Cuban press',
                subtitle: 'distensione',
                sets: [15],
                recovery: '30s',
              },
            ],
            reps: 3
          },
          {
            exercises: [
              {
                title: 'Cuban press',
                subtitle: 'completa',
                sets: [10],
                recovery: '30s',
              },
            ],
            reps: 2
          },
          // finale
          {
            exercises: [
              {
                title: 'Squot sumo',
                subtitle: 'vuoto',
                sets: [20],
                load: 2,
                recovery: '0s',
              },
              {
                title: 'Rematore 2 manubri',
                subtitle: 'busto a 90°',
                sets: [10],
                load: 4,
                recovery: '0s',
              },
              {
                title: 'Affondi',
                subtitle: 'mani ai fianchi',
                sets: [10, 10],
                load: 0,
                recovery: '0s',
              },
              {
                title: 'Girata e distensione',
                subtitle: '1 manubrio',
                sets: [8, 8],
                load: 2,
                recovery: '0s',
              },
              {
                title: 'Hipthrust',
                subtitle: '',
                sets: [10],
                load: 5,
                recovery: '0s',
              },
              {
                title: 'Turkish get up',
                subtitle: '1 kettlebell',
                sets: [8,8],
                load: 20,
                recovery: '0s',
              },
              {
                title: 'Plank',
                subtitle: 'gomiti',
                sets: ['30s'],
                recovery: '0s',
              },
              {
                title: 'Side plank',
                subtitle: 'dx',
                sets: ['30s'],
                recovery: '0s',
              },
              {
                title: 'Side plank',
                subtitle: 'sx',
                sets: ['30s'],
                recovery: '1m30s',
              },
            ],
            reps: 3
          },
        ]
      },
    ]
  },
  mutations: {
    toggleMenu (state) {
      state.isMenuActive = !state.isMenuActive
    },

    updateRep (state, value) {
      state.rep = value
    },
  },
  actions: {

  },
})
