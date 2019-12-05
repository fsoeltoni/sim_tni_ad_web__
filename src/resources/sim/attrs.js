const identities = {
  name: "sim",
  options: {
    label: "SIM"
  }
};

const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  berlaku_hingga: {
    source: "berlaku_hingga",
    label: "Berlaku Hingga"
  },
  created: {
    source: "created",
    label: "Dibuat Pada"
  },
  updated: {
    source: "updated",
    label: "Diubah Pada"
  }
};

const components = {
  list: {
    title: "Ubah " + identities.options.label,
    sort: {
      field: fields.created.source,
      order: "DESC"
    }
  },
  create: {
    title: "Tambah " + identities.options.label
  }
};

export default {
  identities,
  fields,
  components
};
