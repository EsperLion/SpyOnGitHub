import { connect } from 'react-redux';
import { UsersListPresenter } from './users-list.presenter';
import {
  selectUsers,
  requestUsers,
  selectLastSinceId,
  addPreviousSinceId,
  deletePreviousSinceId,
  clearAllIds,
} from '../../store';

const mapStateToProps = (state) => ({
  usersList: selectUsers(state),
  lastSinceId: selectLastSinceId(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadUsers: (since, perPage) => dispatch(requestUsers({ since, perPage })),
  addPrevId: (id) => dispatch(addPreviousSinceId(id)),
  deletePrevId: () => dispatch(deletePreviousSinceId()),
  clear: () => dispatch(clearAllIds()),
});

export const UsersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListPresenter);

