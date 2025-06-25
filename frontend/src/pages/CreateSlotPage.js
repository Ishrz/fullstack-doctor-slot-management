import React from "react";
import CreateSlotForm from "../components/CreateSlotForm";

const CreateSlotPage = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="mb-4 text-center">Create New Slots</h3>
              <CreateSlotForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSlotPage;