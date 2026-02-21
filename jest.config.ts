import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/tests/__mocks__/fileMock.ts',
    '\\.(svg|png|jpg)$': '<rootDir>/tests/__mocks__/fileMock.ts',
  },
}

export default config
