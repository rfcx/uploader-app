import Tab from './components/Tab'

export default {
  name: 'Home',
  data () {
    return {
      files: []
    }
  },
  components: {
    Tab
  },
  computed: {
    isPreparedTab () {
      return true // TODO: fix this
    }
  }
}