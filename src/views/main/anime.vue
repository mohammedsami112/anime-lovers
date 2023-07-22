<template>
    <loadingOverlay v-if="loading"></loadingOverlay>
    <addNewAnime @success="getAnime()"></addNewAnime>
    <div class="categories-page">
        <DataTable :value="anime" tableStyle="min-width: 50rem;">
            <Column field="id" header="#"></Column>
            <Column field="title" header="Title"></Column>
            <Column field="count_episodes" header="Episodes"></Column>
            <Column header="Categories">
                <template #body="{ data }">
                    {{ data.anime_categories.map((category) => category.category.title).join(',') }}
                </template>
            </Column>
            <Column field="created_at" header="Created At">
                <template #body="{ data }">
                    {{ moment(data.create_at).format('YYYY-MM-DD h:m:s') }}
                </template>
            </Column>
            <Column field="updated_at" header="Last Update At">
                <template #body="{ data }">
                    {{ moment(data.updated_at).format('YYYY-MM-DD h:m:s') }}
                </template>
            </Column>
            <Column header="Actions">
                <template #body="{ data }">
                    <addNewEpisode :animeId="data.id" @success="getAnime()"></addNewEpisode>
                    <Button class="mx-2" icon="pi pi-trash" severity="danger" rounded size="small" @click="handelDeleteCategory(data.id)" />
                </template>
            </Column>
        </DataTable>
        <Paginator @page="getAnime({ page: $event.page + 1 })" class="mt-3" :rows="pagination.rows" :totalRecords="pagination.total"></Paginator>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import store from '@/store'
import moment from 'moment'
import { useToast } from 'primevue/usetoast'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import animeApi from '@/controllers/anime'
import Paginator from 'primevue/paginator'

import addNewAnime from '@/components/anime/addNewAnime.vue'
import addNewEpisode from '@/components/anime/addNewEpisode.vue'

const toast = useToast()
const loading = ref(false)
const anime = ref([])

const getAnime = (filters = {}) => {
    loading.value = true
    animeApi
        .getAnime(filters)
        .then((response) => {
            console.log(response)
            store.commit('SET_ANIME', response.data.data)
            anime.value = response.data.data
            pagination.total = response.data.total
            pagination.rows = response.data.per_page
        })
        .finally(() => {
            loading.value = false
        })
}

// Handel Pagination
const pagination = reactive({
    total: 0,
    rows: 0,
})

// Handel Delete Category
const handelDeleteCategory = (userId) => {
    if (confirm('Are You Sure ?')) {
        categoriesApi.deleteCategory(userId).then((response) => {
            toast.add({
                severity: 'success',
                detail: response.message,
                life: 3000,
            })
            getCategories()
        })
    }
}

onMounted(() => {
    getAnime()
})
</script>
