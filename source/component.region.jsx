
class RegionDropdown extends React.Component {
  render () {
    return (
      <select style={{color: this.context.color}}>
        <option>REGION</option>
      </select>
    );
  }
}
RegionDropdown.contextTypes = {
  color: React.PropTypes.string
};
