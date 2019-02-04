import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    traningProgram: [
      {
        sheet: 1,
        name: 'Palestra',
        exercises: [
          // bastone
          {
            list: [
              {
                title: 'Squat',
                subtitle: 'con bastone allineamento colonna',
                sets: 15,
                recovery: '30s',
              },
              {
                title: 'Stacco',
                subtitle: 'con bastone allineamento colonna',
                sets: 15,
                recovery: '30s',
              },
            ],
            reps: 3
          },
          // cuban press
          {
            list: [
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
                title: 'Distensione',
                subtitle: 'girata',
                sets: [15],
                recovery: '30s',
              },
            ],
            reps: 3
          },
          {
            list: [
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
            list: [
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
                title: 'Salite su step 2 manubri',
                subtitle: '',
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
                title: 'Lateral machine avanti',
                subtitle: '',
                sets: [8],
                load: 20,
                recovery: '0s',
              },
              {
                title: 'Corsa',
                subtitle: '',
                sets: [15],
                recovery: '3min',
              },
            ],
            reps: 3
          },
        ]
      },
      {
        sheet: 2,
        name: 'Casa',
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
})
