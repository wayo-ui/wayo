// mock require.context
global.requireContext = jest.fn().mockImplementation(() => {
  return jest.fn()
});