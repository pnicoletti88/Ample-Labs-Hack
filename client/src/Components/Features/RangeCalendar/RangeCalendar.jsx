import "rc-calendar/assets/index.css";
import React from "react";
import Calendar from "rc-calendar";
import DatePicker from "rc-calendar/lib/Picker";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";

import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/en-gb";

import styles from "./RangeCalendar.module.css";

const format = "LL";
const cn = window.location.search.indexOf("cn") !== -1;

const now = moment();
if (cn) {
  now.locale("zh-cn").utcOffset(8);
} else {
  now.locale("en-gb").utcOffset(0);
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, "month");

class RangeCalendar extends React.Component {
  getCalendarContainer() {
    return this.d || document.getElementById("d");
  }

  render() {
    const { onChange, dateValue } = this.props;
    return (
      <div className={styles.main}>
        <div id="d" ref={n => (this.d = n)} />
        <div>
          <DatePicker
            getCalendarContainer={this.getCalendarContainer}
            calendar={
              <Calendar locale={cn ? zhCN : enUS} style={{ width: 200 }} />
            }
            value={dateValue}
            onChange={onChange}
          >
            {({ value }) => {
              return (
                <span>
                  <input
                    className={styles.input}
                    readOnly
                    value={(value && value.format(format)) || ""}
                  />
                </span>
              );
            }}
          </DatePicker>
        </div>
      </div>
    );
  }
}

RangeCalendar.propTypes = {
  onChange: PropTypes.func.isRequired,
  dateValue: momentPropTypes.momentObj.isRequired
};

export default RangeCalendar;
