<template>
    <loadingOverlay v-if="loading"></loadingOverlay>
    <div class="landingPages-page">
        <addNewLandingPage @success="getLandingPages()"></addNewLandingPage>
        <DataTable :value="landingPages" tableStyle="min-width: 50rem;">
            <Column field="id" header="#"></Column>
            <Column field="title" header="Title"></Column>
            <Column header="Category">
                <template #body="{ data }"> {{ data.category.title }} </template>
            </Column>
            <Column field="today_leads" header="Today Leads"></Column>
            <Column field="total_leads" header="Total Leads"></Column>
            <Column header="Ads Status">
                <template #body="{ data }">
                    <Tag :severity="data.ads_status == 0 ? 'danger' : 'success'" :value="data.ads_status == 0 ? 'Off' : 'On'"></Tag>
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
                    <editLandingPage @success="getLandingPages()" :landingPageId="data.id"></editLandingPage>
                    <Button class="ms-2" icon="pi pi-replay" severity="primary" rounded size="small" @click="handelToggleStatus(data.id)" />
                    <Button class="ms-2" icon="pi pi-trash" severity="danger" rounded size="small" @click="handelDeleteLandingPage(data.id)" />
                </template>
            </Column>
        </DataTable>
        <Paginator @page="getLandingPages({ page: $event.page + 1 })" class="mt-3" :rows="pagination.rows" :totalRecords="pagination.total"></Paginator>
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
import Tag from 'primevue/tag'
import Paginator from 'primevue/paginator'
import landingPagesApi from '@/controllers/landingPages'

import addNewLandingPage from '@/components/landing-pages/addNewLandingPage.vue'
import editLandingPage from '@/components/landing-pages/editLandingPage.vue'

const toast = useToast()
const loading = ref(false)
const landingPages = ref([])

const getLandingPages = (filters = {}) => {
    loading.value = true
    landingPagesApi
        .getLandingPages(filters)
        .then((response) => {
            console.log(response)
            store.commit('SET_LANDING_PAGES', response.data.data)
            landingPages.value = response.data.data
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

// Handel Delete Landing Page
const handelDeleteLandingPage = (landingPageId) => {
    if (confirm('Are You Sure ?')) {
        landingPagesApi.deleteLandingPage(landingPageId).then((response) => {
            toast.add({
                severity: 'success',
                detail: response.message,
                life: 3000,
            })
            getLandingPages()
        })
    }
}

// Handel Toggle Landing Page Ads Status
const handelToggleStatus = (landingPageId) => {
    if (confirm('Are You Sure ?')) {
        landingPagesApi.toggleAdsStatus(landingPageId).then((response) => {
            toast.add({
                severity: 'success',
                detail: response.message,
                life: 3000,
            })
            getLandingPages()
        })
    }
}
onMounted(() => {
    getLandingPages()

    landingPagesApi.getCategories().then((response) => {
        store.commit('SET_LANDING_PAGE_CATEGORIES', response.data)
    })
})
</script>
