import { compose } from 'redux'
import { connect } from 'react-redux'
import loader from 'hoc-react-loader/build/core'
import forRoute from 'hoc-little-router'

import { getEventFromRouterParam } from 'redux/data/events'
import LoadingIndicator from 'components/loading'
import EventEdit from './eventEdit'

const mapState = (state) => {
  const event = getEventFromRouterParam(state)
  return { loaded: !!event }
}

const mapDispatch = dispatch => ({
  load: () => dispatch({ type: 'FETCH_EVENT_FROM_ROUTER_PARAMS' }),
})

export default compose(
  forRoute('EDIT_EVENT'),
  connect(mapState, mapDispatch),
  loader({ print: ['loaded'], LoadingIndicator }),
)(EventEdit)
