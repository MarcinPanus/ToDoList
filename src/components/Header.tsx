import React from "react";

const Header: React.FC = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">task list</h5>
      <p className="card-text">here&apos;s a list of all your tasks</p>
      <p>if you want to add a task, press the button below</p>
      <a href="#" className="btn btn-primary">
        add task
      </a>
    </div>
  );
};

export default Header;
