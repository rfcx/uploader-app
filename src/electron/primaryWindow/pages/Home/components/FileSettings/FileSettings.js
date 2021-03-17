import { FileFormat } from '../../../../../utils/FileFormat'
export default {
  computed: {
    fileNameFormatOptions () {
      return Object.values(FileFormat)
    }
  },
  methods: {
    importFiles (e) {
      this.$emit('onImportFiles', e.target.files)
    }
  }
}
