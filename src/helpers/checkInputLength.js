export const checkInputLength = (name, params) => {
  if (name.length === 0) return `Field "${params.name}" must not be empty`;
  return (
    name.length < params.length && `Field "${params.name}" must be more ${params.length} characters`
  );
};
