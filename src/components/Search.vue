<template>
  <div class="container">
    <input
      class="form-control"
      v-model="title"
      type="text" 
      @keyup.enter="apply"
      placeholder="Search for Mivoes, Series & more" />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            title: '',
            type: 'movie',
            number: 10,
            year: '',
            filters: [
                {
                    name: 'type',
                    items: ['movie', 'series', 'episode']
                },
                {
                    name: 'number',
                    items: [10, 20, 30]
                },
                {
                    name: 'year',
                    items: (() => {
                        const years = []
                        const thisYear = new Date().getFullYear()
                        for (let i = thisYear; i >= 1985; i -= 1) {
                            years.push(i)
                        }

                        return years
                    })()
                }
            ],
        }
    },
    methods: {
        async apply() {
            const OMDB_API_KEY = '1451733a'
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`)
            console.log(res)
        }
    }
}
</script>

<style>
.container {
    display: flex;
    > * {
        margin-right: 10px;
        font-size: 15px;
        &:last-child{
            margin-right: 0;;
        }
    }
    .selects {
        display: flex;
        select {
            width: 120px;
            margin-right: 10px;
            &:last-child{
                margin-right: 0;
            }
        }
    }
    .btn {
        width: 120px;
        height: 50px;
        font-weight: 700;
        flex-shrink: 0;
    }
}
</style>