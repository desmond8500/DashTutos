# [API](readme.md)

## Description

::: code-group

```ts [services/api.ts]
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://test.com/api/v1', // URL de ton API Laravel
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default api
```

```vue [Demo.vue]
<script setup lang="ts">
import api from '@/services/api'
import { onMounted } from 'vue'

const fetchData = async () => {
  try {
    const response = await api.get('/items')
    console.log('Données récupérées:', response.data)
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error)
  }
}

onMounted(() => {
  fetchData()
})
</script>


```

:::
