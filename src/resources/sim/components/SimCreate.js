import React from "react";
import attrs from "../attrs";
import { Create, SimpleForm } from "react-admin";
import moment from "moment";
import CameraComponent from "../../../helpers/components/CameraComponent";

const created = moment();
const updated = created;
const berlaku_hingga = moment(created).add(5, "years");

const SimCreate = ({ ...rest }) => {
  const initialValues = {
    created,
    updated,
    berlaku_hingga
  };

  return (
    <Create {...rest} {...attrs.components.create}>
      <SimpleForm initialValues={initialValues}>
        <CameraComponent />
      </SimpleForm>
    </Create>
  );
};

export default SimCreate;
