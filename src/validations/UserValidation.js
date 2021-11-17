const UserValidation = (values) => {
  const errors = {};

  if (!values.nama || values.nama === "") {
    errors.nama = "Nama harus diisi";
  }

  if (!values.category || values.category === "") {
    errors.category = "Category harus diisi";
  }

  if (!values.amount || values.amount === "") {
    errors.amount = "Amount harus diisi";
  }

  return errors;
};

export default UserValidation;
