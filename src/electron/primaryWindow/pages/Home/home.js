import Tab from './components/Tab'
import FileSettings from './components/FileSettings'

export default {
  name: 'Home',
  data () {
    return {
      files: []
    }
  },
  components: {
    Tab, FileSettings
  },
  computed: {
    isPreparedTab () {
      return true // TODO: fix this
    }
  },
  methods: {
    handleFiles (files) {
      if (!files) { return }
      console.log(files)
      // TODO: pass to file manager to handle it
    }
  }
}