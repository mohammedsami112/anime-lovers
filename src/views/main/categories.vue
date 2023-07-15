<template>
    <loadingOverlay v-if="loading"></loadingOverlay>
    <div class="categories-page">
        <addNewCategories @success="getCategories()"></addNewCategories>
        <DataTable :value="categories" tableStyle="min-width: 50rem;">
            <Column field="id" header="#"></Column>
            <Column field="title" header="Title"></Column>
            <Column header="Parent">
                <template #body="{ data }">
                    {{ data.parent_category == null ? 'null' : data.parent_category.title }}
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
                    <editCategory @success="getCategories()" :categoryId="data.id"></editCategory>
                    <Button class="mx-2" icon="pi pi-trash" severity="danger" rounded size="small" @click="handelDeleteCategory(data.id)" />
                </template>
            </Column>
        </DataTable>
        <Paginator @page="getCategories({ page: $event.page + 1 })" class="mt-3" :rows="pagination.rows" :totalRecords="pagination.total"></Paginator>
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
import categoriesApi from '@/controllers/categories'
import Paginator from 'primevue/paginator'

import addNewCategories from '@/components/categories/addNewCategories.vue'
import editCategory from '@/components/categories/editCategory.vue'

const toast = useToast()
const loading = ref(false)
const categories = ref([])

const getCategories = (filters = {}) => {
    loading.value = true
    categoriesApi
        .getCategories(filters)
        .then((response) => {
            console.log(response)
            store.commit('SET_CATEGORIES', response.data.data)
            categories.value = response.data.data
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
    getCategories()
    categoriesApi.getCategoriesParent().then((response) => {
        store.commit('SET_CATEGORIES_PARENTS', response.data.data)
    })
})
</script>
