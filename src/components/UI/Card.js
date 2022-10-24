import "./Card.css";

// Reusable Wrapper Component
function Card(props) {
  // So now anything we receive as a class name from outside  ** <Card className='.ExpenseItem'> .... </Card>

  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;

  // Children is a reserved word in React and the value of this special children prop
  // will always be whatever is between the opening and closing tags of your custom component.
}
export default Card;
