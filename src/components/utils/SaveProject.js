//input: liked : boolean
//output : onClick :
//simple dom component

//converted to stateless func comp from class comp
const SaveProject = (props) => {
  let iconName = "fa fa-2x fa-bookmark";
  if (!props.save) iconName += "fa fa-2x fa-bookmark-o";
  // const liked = status ? iconName : `${iconName}-o`;

  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={iconName}
    ></i>
  );
};

export default SaveProject;
