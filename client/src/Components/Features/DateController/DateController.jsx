import React, { Component } from "react";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";

import styles from "./DateController.module.css";
import RangeCalendar from "../RangeCalendar/RangeCalendar";

class DateController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDatesPresent: false
    };
  }

  applyChangeButton = () => {
    const { updateData } = this.props;
    updateData();
    this.setState({
      newDatesPresent: false
    });
  };

  startDateChange = data => {
    const { onStartDateChange } = this.props;
    const { newDatesPresent } = this.state;
    if (!newDatesPresent) {
      this.setState({ newDatesPresent: true });
    }
    onStartDateChange(data);
  };

  endDateChange = data => {
    const { onEndDateChange } = this.props;
    const { newDatesPresent } = this.state;
    if (!newDatesPresent) {
      this.setState({ newDatesPresent: true });
    }
    onEndDateChange(data);
  };

  render() {
    const { startDate, endDate } = this.props;
    const { newDatesPresent } = this.state;
    return (
      <div className={styles.main}>
        <div className={styles.dates}>
          <div>
            <p className={styles.dateDescriptor}>Start day:</p>
            <RangeCalendar
              dateValue={startDate}
              onChange={this.startDateChange}
            />
          </div>
          <p className={styles.text}>to</p>
          <div>
            <p className={styles.dateDescriptor}>End day:</p>
            <RangeCalendar dateValue={endDate} onChange={this.endDateChange} />
          </div>
        </div>
        {newDatesPresent && (
          <button
            className={styles.applyButton}
            onClick={this.applyChangeButton}
            type="button"
          >
            Apply Changes
          </button>
        )}
      </div>
    );
  }
}

DateController.propTypes = {
  startDate: momentPropTypes.momentObj.isRequired,
  endDate: momentPropTypes.momentObj.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired
};

export default DateController;
