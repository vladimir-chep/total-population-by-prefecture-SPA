<template>
    <div>
        <h2>都道府県</h2>
        <ul class="prefList">
            <li
                v-for="(prefecture, index, key) in prefectures"
                :key="key"
                class="prefList__item"
            >
                <input
                    type="checkbox"
                    :id="`pref-${index}`"
                    :name="prefecture.name"
                    value="prefId"
                    v-model="checkedPrefectures[index]"
                    @click="update(index)"
                />
                <label :for="`pref-${index}`">{{ prefecture.name }}</label>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PrefList',
    data() {
        return {
            checkedPrefectures: {},
        };
    },
    computed: {
        ...mapState(['prefectures', 'prefecturesMap', 'errorPrefectures']),
    },
    beforeCreate() {
        this.$store.dispatch('fetchPrefectures');
    },
    methods: {
        update(prefId) {
            this.$store.dispatch('updatePrefData', prefId).then(() => {
                this.$store.dispatch('updateSeries', this.checkedPrefectures);
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.prefList {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;

    &__item {
        width: calc(100% / 12 * 3);
        margin: 3px 0;
    }

    input {
        margin-right: 6px;
    }
}
</style>