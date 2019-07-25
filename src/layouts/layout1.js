import Navigation from '@/components/Navigation.vue'


export default h => h('div', { class: 'layout1' }, [
  h(Navigation),
  h('router-view', {
    props: {
      name: 'default',
    },
  }),
  h('router-view', {
    props: {
      name: 'other1',
    },
  }),
])
