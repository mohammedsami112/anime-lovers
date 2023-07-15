<template>
    <loadingOverlay v-if="loading"></loadingOverlay>
    <div class="users-page">
        <addNewUsers @success="getUsers()"></addNewUsers>
        <DataTable :value="users" tableStyle="min-width: 50rem;">
            <Column field="id" header="#"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
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
                    <editUser @success="getUsers()" :userId="data.id"></editUser>
                    <Button :disabled="data.id == $store.state.user.data.id" class="mx-2" icon="pi pi-trash" severity="danger" rounded size="small" @click="handelDeleteUser(data.id)" />
                </template>
            </Column>
        </DataTable>
        <Paginator @page="getUsers({ page: $event.page + 1 })" class="mt-3" :rows="pagination.rows" :totalRecords="pagination.total"></Paginator>
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
import usersApi from '@/controllers/users'
import Paginator from 'primevue/paginator'

import addNewUsers from '@/components/users/addNewUsers.vue'
import editUser from '@/components/users/editUser.vue'

const toast = useToast()
const loading = ref(false)
const users = ref([])

const getUsers = (filters = {}) => {
    loading.value = true
    usersApi
        .getUsers(filters)
        .then((response) => {
            console.log(response)
            store.commit('SET_USERS', response.data.data)
            users.value = response.data.data
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

// Handel Delete User
const handelDeleteUser = (userId) => {
    if (confirm('Are You Sure ?')) {
        usersApi.deleteUsers(userId).then((response) => {
            toast.add({
                severity: 'success',
                detail: response.message,
                life: 3000,
            })
            getUsers()
        })
    }
}

onMounted(() => {
    getUsers()
})
</script>
