import "rc-calendar/assets/index.css";
import React from "react";
import ReactDOM from "react-dom";
import Calendar from "rc-calendar";
import DatePicker from "rc-calendar/lib/Picker";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";

import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/en-gb";

const format = "YYYY-MM-DD";
const cn = window.location.search.indexOf("cn") !== -1;

const now = moment();
if (cn) {
  now.locale("zh-cn").utcOffset(8);
} else {
  now.locale("en-gb").utcOffset(0);
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, "month");

class Demo extends React.Component {
  state = {
    open: false,
    destroy: false
  };

  getCalendarContainer() {
    return this.d || document.getElementById("d");
  }

  setVisible(open) {
    this.setState({
      open
    });
  }

  open = () => {
    this.setVisible(true);
  };

  close = () => {
    this.setVisible(false);
  };

  render() {
    return (
      <div>
        &nbsp;
        <div id="d" style={{ width: "200px" }} ref={n => (this.d = n)} />
        <div style={{ marginTop: 20 }}>
          <DatePicker
            getCalendarContainer={this.getCalendarContainer}
            calendar={<Calendar locale={cn ? zhCN : enUS} />}
          >
            {({ value }) => {
              return (
                <span>
                  <input
                    style={{ width: 250 }}
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

export default Demo;
