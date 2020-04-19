import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sheets: [
      {
        id: 1,
        name: 'Palestra',
        exercises: [
          // bastone
          {
<<<<<<< Updated upstream
            list: [
=======
            id: 1,
            exercises: [
>>>>>>> Stashed changes
              {
                id: 1,
                title: 'Squat',
                subtitle: 'con bastone allineamento colonna',
                sets: [15],
                recovery: '30s',
              },
              {
                id: 2,
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
<<<<<<< Updated upstream
            list: [
=======
            id: 2,
            exercises: [
>>>>>>> Stashed changes
              {
                id: 1,
                title: 'Cuban press',
                subtitle: 'tirata',
                sets: [15],
                recovery: '30s',
              },
              {
                id: 2,
                title: 'Cuban press',
                subtitle: 'girata',
                sets: [15],
                recovery: '30s',
              },
              {
                id: 3,
                title: 'Cuban press',
                subtitle: 'distensione',
                sets: [15],
                recovery: '30s',
              },
            ],
            reps: 3
          },
          {
<<<<<<< Updated upstream
            list: [
=======
            id: 3,
            exercises: [
>>>>>>> Stashed changes
              {
                id: 1,
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
<<<<<<< Updated upstream
            list: [
=======
            id: 4,
            exercises: [
>>>>>>> Stashed changes
              {
                id: 1,
                title: 'Squot sumo',
                subtitle: 'vuoto',
                sets: [15],
                load: 2,
                recovery: '0s',
              },
              {
                id: 2,
                title: 'Abductor machine',
                subtitle: 'seduta avanti',
                sets: [15],
                load: 35,
                recovery: '0s',
              },
              {
                id: 3,
                title: 'Fly 2 manubri',
                subtitle: 'in appoggio swissball',
                sets: [8, 8],
                load: 2,
                recovery: '0s',
              },
              {
                id: 4,
                title: 'Salite su step',
                subtitle: '2 manubri',
                sets: [10, 10],
                load: 0,
                recovery: '0s',
              },
              {
                id: 5,
                title: 'Distensione 2 manubri',
                subtitle: 'panca 30°',
                sets: [8],
                load: 2,
                recovery: '0s',
              },
              {
                id: 6,
                title: 'Pulley stretto',
                subtitle: '',
                sets: [8],
                load: 20,
                recovery: '0s',
              },
              {
                id: 7,
                title: 'Lateral machine',
                subtitle: 'avanti',
                sets: [8],
                load: 20,
                recovery: '0s',
              },
              {
                id: 8,
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
        exercises: [
          // bastone
          {
<<<<<<< Updated upstream
            list: [
=======
            id: 1,
            exercises: [
>>>>>>> Stashed changes
              {
                id: 1,
                title: 'Squat',
                subtitle: 'con bastone allineamento colonna',
                sets: [15],
                recovery: '30s',
              },
              {
                id: 2,
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
<<<<<<< Updated upstream
            list: [
=======
            id: 2,
            exercises: [
>>>>>>> Stashed changes
              {
                id: 1,
                title: 'Cuban press',
                subtitle: 'tirata',
                sets: [15],
                recovery: '30s',
              },
              {
                id: 2,
                title: 'Cuban press',
                subtitle: 'girata',
                sets: [15],
                recovery: '30s',
              },
              {
                id: 3,
                title: 'Cuban press',
                subtitle: 'distensione',
                sets: [15],
                recovery: '30s',
              },
            ],
            reps: 3
          },
          {
<<<<<<< Updated upstream
            list: [
=======
            id: 3,
            exercises: [
>>>>>>> Stashed changes
              {
                id: 1,
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
<<<<<<< Updated upstream
            list: [
=======
            id: 4,
            exercises: [
>>>>>>> Stashed changes
              {
                id: 1,
                title: 'Squot sumo',
                subtitle: 'vuoto',
                sets: [20],
                load: 2,
                recovery: '0s',
              },
              {
                id: 2,
                title: 'Rematore 2 manubri',
                subtitle: 'busto a 90°',
                sets: [10],
                load: 4,
                recovery: '0s',
              },
              {
                id: 3,
                title: 'Affondi',
                subtitle: 'mani ai fianchi',
                sets: [10, 10],
                load: 0,
                recovery: '0s',
              },
              {
                id: 4,
                title: 'Girata e distensione',
                subtitle: '1 manubrio',
                sets: [8, 8],
                load: 2,
                recovery: '0s',
              },
              {
                id: 5,
                title: 'Hipthrust',
                subtitle: '',
                sets: [10],
                load: 5,
                recovery: '0s',
              },
              {
                id: 6,
                title: 'Turkish get up',
                subtitle: '1 kettlebell',
                sets: [8,8],
                load: 20,
                recovery: '0s',
              },
              {
                id: 7,
                title: 'Plank',
                subtitle: 'gomiti',
                sets: ['30s'],
                recovery: '0s',
              },
              {
                id: 8,
                title: 'Side plank',
                subtitle: 'dx',
                sets: ['30s'],
                recovery: '0s',
              },
              {
                id: 9,
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

  },
  actions: {

  },
})
