<template>
    <loadingOverlay v-if="loading"></loadingOverlay>
    <addNewAd @success="getAds()"></addNewAd>
    <div class="categories-page">
        <DataTable :value="ads" tableStyle="min-width: 50rem;">
            <Column field="id" header="#"></Column>
            <Column field="title" header="Title"></Column>
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
            <Column header="Actions" class="text-center">
                <template #body="{ data }">
                    <Button class="mx-2" icon="pi pi-trash" severity="danger" rounded size="small" @click="handelDeleteAds(data.id)" />
                </template>
            </Column>
        </DataTable>
        <Paginator @page="getAds({ page: $event.page + 1 })" class="mt-3" :rows="pagination.rows" :totalRecords="pagination.total"></Paginator>
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
import adsApi from '@/controllers/ads'
import Paginator from 'primevue/paginator'

import addNewAd from '@/components/ads/addNewAd.vue'

const toast = useToast()
const loading = ref(false)
const ads = ref([])

const getAds = (filters = {}) => {
    loading.value = true
    adsApi
        .getAds(filters)
        .then((response) => {
            console.log(response)
            store.commit('SET_ADS', response.data.data)
            ads.value = response.data.data
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

// Handel Delete Anime
const handelDeleteAds = (adId) => {
    if (confirm('Are You Sure ?')) {
        adsApi.deleteAds(adId).then((response) => {
            toast.add({
                severity: 'success',
                detail: response.message,
                life: 3000,
            })
            getAds()
        })
    }
}

onMounted(() => {
    getAds()
})
</script>
