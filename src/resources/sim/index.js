import attrs from "./attrs";
import SimCreate from "./components/SimCreate";

export default {
  ...attrs.identities,
  create: SimCreate
};
