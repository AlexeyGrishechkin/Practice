export const checkInputLength = (input, params) => {
  if (input.length === 0) return `Field "${params.name}" must not be empty`;
  return (
    input.length < params.length && `Field "${params.name}" must be more ${params.length} characters`
  );
};
