<template>
    <Button
        @click="
            addNewEpisodeCommentModel = true;
            $store.dispatch('setCurrentAnime', props.animeId)
        "
        class="mx-2"
        icon="pi pi-comments"
        severity="warning"
        rounded
        size="small"
    />

    <Dialog v-model:visible="addNewEpisodeCommentModel" modal header="Add Episode Comment" :style="{ width: '30vw' }">
        <form @submit.prevent="addNewEpisode">
            <div class="mb-3">
                <CFormInput type="text" label="Comment" v-model="inputs.mainForm.comment" />
            </div>
            <div class="mb-3">
                <CFormSelect label="Episode" v-model="inputs.mainForm.episode">
                    <option value="">Select Episode</option>
                    <option v-for="(episode, index) in $store.state.anime.current.anime_episodes" :key="index" :value="episode.id">
                        {{ episode.title }} {{ episode.comment != null ? '( Commented )' : '' }}
                    </option>
                </CFormSelect>
                <template v-if="validate.mainForm.episode.$errors">
                    <div v-for="(error, index) in validate.mainForm.episode.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>
            <CButton color="primary" type="submit" :disabled="loading">{{ loading ? 'loading...' : 'Add Comment' }}</CButton>
        </form>
    </Dialog>
</template>

<script setup>
import { ref, reactive, computed, defineEmits, watch } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, sameAs, email } from '@vuelidate/validators'
import { useToast } from 'primevue/usetoast'
import animeApi from '@/controllers/anime'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import store from '@/store'

const props = defineProps(['animeId'])
const emit = defineEmits(['success'])
const loading = ref(false)
const toast = useToast()
const addNewEpisodeCommentModel = ref(false)

const inputs = reactive({
    mainForm: {
        comment: null,
        episode: null,
    },
})

const $externalResults = reactive({
    mainForm: {},
})

const rules = computed(() => ({
    mainForm: {
        episode: {
            required: helpers.withMessage('Episode Is Required', required),
        },
    },
}))

const validate = useVuelidate(rules, inputs, { $externalResults })

watch(
    () => inputs.mainForm.episode,
    (episodeData) => {
        inputs.mainForm.comment = episodeData == '' || episodeData == null ? null : store.state.anime.current.anime_episodes.filter((episode) => episode.id == episodeData)[0].comment
    },
)

const addNewEpisode = () => {
    validate.value.$clearExternalResults()
    validate.value.mainForm.$touch()
    if (!validate.value.mainForm.$error) {
        loading.value = true
        animeApi
            .addEpisodeComment(inputs.mainForm)
            .then((response) => {
                emit('success')
                console.log(response)
                toast.add({
                    severity: 'success',
                    detail: response.message,
                    life: 3000,
                })
                inputs.mainForm.title = inputs.mainForm.episode = null
                validate.value.$reset()
                addNewEpisodeCommentModel.value = false
            })
            .catch((error) => {
                console.log(error.response)
            })
            .finally(() => {
                loading.value = false
            })
    }
}
</script>
