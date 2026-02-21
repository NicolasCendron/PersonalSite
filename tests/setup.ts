import '@testing-library/jest-dom'

// Suppress i18next promotional log in tests
jest.spyOn(console, 'info').mockImplementation(() => {})
