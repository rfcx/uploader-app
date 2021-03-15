export default {
  data () {
    return {
      tabGroups: ['Prepared', 'Queued', 'Completed'],
      selectedTab: null || this.getDefaultSelectedTab()
    }
  },
  props: {
    preparingGroup: Object,
    queuedGroup: Object,
    completedGroup: Object
  },
  methods: {
    getDefaultSelectedTab () {
      // TODO: uncomment below code
      // if (this.selectedStream.isUploading) return 'Queued'
      // if (this.selectedStream.isCompleted) return 'Completed'
      return 'Prepared'
    },
    getNumberOfFiles (tab) {
      switch (tab) {
        case 'Prepared': return this.preparingGroup.numberOfFiles
        case 'Queued': return this.queuedGroup.numberOfFiles
        case 'Completed': return this.completedGroup.numberOfFiles
      }
    },
    hasFailedFiles (tab) {
      switch (tab) {
        case 'Prepared': return this.preparingGroup.hasErrorFiles
        case 'Queued': return this.queuedGroup.hasErrorFiles
        case 'Completed': return this.completedGroup.hasErrorFiles
      }
    },
    async setActive (tab) {
      this.selectedTab = tab
    }
  }
}