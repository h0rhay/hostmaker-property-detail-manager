import React from 'react'

const evtNames = [
  'click',
  'dblclick',
  'dragend',
  'mousedown',
  'mouseout',
  'mouseover',
  'mouseup',
  'recenter',
]

const wrappedPromise = () => {
  const wrappedPromise = {}
  const promise = new Promise((resolve, reject) => {
    wrappedPromise.resolve = resolve
    wrappedPromise.reject = reject
  })
  wrappedPromise.then = promise.then.bind(promise)
  wrappedPromise.catch = promise.catch.bind(promise)
  wrappedPromise.promise = promise

  return wrappedPromise
}

export class Circle extends React.Component {

  componentDidMount () {
    this.circlePromise = wrappedPromise()
    this.renderCircle()
  }

  componentDidUpdate (prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position) ||
      (this.props.icon !== prevProps.icon)) {
      if (this.circle) {
        this.circle.setMap(null)
      }
      this.renderCircle()
    }
  }

  componentWillUnmount () {
    if (this.circle) {
      this.circle.setMap(null)
    }
  }

  renderCircle () {
    let {
      map, google, position, mapCenter, icon, label, draggable, title, options, radius
    } = this.props
    if (!google) {
      return null
    }

    let pos = position || mapCenter
    if (!(pos instanceof google.maps.LatLng)) {
      position = new google.maps.LatLng(pos.lat, pos.lng)
    }

    const pref = {
      map: map,
      position: position,
      icon: icon,
      label: label,
      title: title,
      draggable: draggable,
      options: options,
      radius: radius,
    }
    this.circle = new google.maps.Circle(pref)

    evtNames.forEach(e => {
      this.circle.addListener(e, this.handleEvent(e))
    })

    this.circlePromise.resolve(this.circle)
  }

  getMarker () {
    return this.circlePromise
  }

  handleEvent (evt) {
    return e => {
      const evtName = evt
      if (this.props[evtName]) {
        this.props[evtName](this.props, this.circle, e)
      }
    }
  }

  render () {
    return null
  }
}

export default Circle
