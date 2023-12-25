const Notification = (props) => {
  const { text, paraClass,imgClass,icon } = props;
  return (
    <img src={icon} className={imgClass} />
    <p className={paraClass}>{text}</p>
  );
};
const element = (
  <div className="bgContainer">
    <h1 className="head">Notifications</h1>
    <div className="card-1">
      <div className="row">
        <Notification text="Information Message" paraClass="para" 
            icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" imgClass="image"
        />
      </div>
    </div>
    <div className="card-2">
      <div className="row">
        <Notification text="Success Message" paraClass="para" 
            icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" imgClass="image"
        />
      </div>
    </div>
    <div className="card-3">
      <div className="row">
        <Notification text="Warning Message" paraClass="para" 
            icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" imgClass="image"
        />
      </div>
    </div>
    <div className="card-4">
      <div className="row">
        <Notification text="Error Message" paraClass="para" 
            icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" imgClass="image"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
