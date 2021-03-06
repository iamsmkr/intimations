import { connect } from 'react-redux';

import Update from './Update';
import { commitToActiveIntimation } from '../../../../../../store/stage-intimation/actions';
import { updateEmployeeLeaveDetails } from '../../../../../../store/employee-details/actions';
import { setToast } from '../../../../../../store/toast/actions';

const mapStateToProps = ({ employeeDetails, stageIntimation, stageIntimationIncompleteRequest }) => {
    return { employeeDetails, stageIntimation, stageIntimationIncompleteRequest };
};

export default connect(mapStateToProps, { commitToActiveIntimation, updateEmployeeLeaveDetails, setToast })(Update);
