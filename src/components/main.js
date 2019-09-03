import Hammer from 'hammerjs'

export default {
  name: 'hi-lib',
  props: {
    debug: {
      type: Boolean,
      default: function () {
        return this.$options.defaultProperty.debug
      }
    }
  },
  created: function () {
    // debug logger
    if (!this.debug) {
      console.info = () => {}
    }
  },
  mounted () {
    this.$nextTick(function () {
      let hammer = new Hammer(this.$el)
      hammer.get('pan').set({
        direction: Hammer.DIRECTION_ALL,
        threshold: 0 // 识别前需要最小的平移距离
      })
      hammer.on('panstart panend panmove', (event) => {
        if (event.type === 'panmove') {
          console.info('event', event)
        }
      })
    })
  }
}
