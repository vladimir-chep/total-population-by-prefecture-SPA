import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import axiosConfig from '../apiConfig';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        prefectures: {},
        series: [],
    },
    mutations: {
        fetchPrefectures(state, payload) {
            state.prefectures = payload;
        },
        updatePrefectures(state, payload) {
            state.prefectures[payload.id].data = payload.data;
        },
        updateSeries(state, payload) {
            state.series = payload;
        },
    },
    actions: {
        fetchPrefectures({ commit }) {
            axios
                .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', axiosConfig)
                .then((response) => {
                    const prefectures = {};
                    response.data.result.forEach((el) => {
                        prefectures[el.prefCode] = {
                            name: el.prefName,
                            data: [],
                        };
                    });
                    commit('fetchPrefectures', prefectures);
                });
        },
        updatePrefData({ commit }, prefId) {
            console.log('updatePrefData');

            return new Promise((resolve) => {
                const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefId}`;

                axios
                    .get(url, axiosConfig)
                    .then((response) => {
                        const populationByYear = response.data.result.data[0].data;
                        const prefData = [];
                        populationByYear.forEach((el) => {
                            prefData.push(el.value);
                        });
                        commit('updatePrefectures', { id: prefId, data: prefData });
                        resolve();
                    });
            });
        },
        updateSeries({state, commit }, checkedPrefectures) {
            const series = [];
            Object.keys(checkedPrefectures).forEach((el) => {
                if (checkedPrefectures[el]) {
                    series.push(state.prefectures[el]);
                }
            });
            commit('updateSeries', series);
        },
    },
});
