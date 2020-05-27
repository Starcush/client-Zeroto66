import React from 'react';

class HabitInfo extends React.Component {
  checkboxClick() {
    this.props.recordComplete(this.props.id);
    this.props.getMainCalendarInfo();
  }

  eachHabitClick() {
    this.props.showHabitDetail(
      this.props.id,
      this.props.habitId,
      this.props.info,
      this.props.check,
      this.props.unit,
      this.props.goal,
      this.props.progress
    );
    this.props.getHabitCalendarInfo(
      this.props.habitId,
      this.props.detailyear,
      this.props.detailMonth
    );
  }

  remove() {
    this.props.deleteHabit(this.props.id, this.props.habitId);
  }

  render() {
    return (
      <div>
        <div className='existingHabit'>
          -{' '}
          <span
            onClick={this.eachHabitClick.bind(this)}
            className={
              this.props.check ? 'eachHabit completedHabit' : 'eachHabit'
            }
          >
            {this.props.info}
          </span>
          {!this.props.deleting && this.props.unit === 'check' ? (
            <input
              type='checkbox'
              className='checkbox'
              onClick={this.checkboxClick.bind(this)}
              defaultChecked={this.props.check}
            ></input>
          ) : (
            ''
          )}
          {this.props.deleting ? (
            <button className='delete' onClick={this.remove.bind(this)}>
              삭제
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
export default HabitInfo;
