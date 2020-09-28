module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '^@assets(.*)$': '<rootDir>/src/@assets@$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@context(.*)$': '<rootDir>/src/context$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@layout(.*)$': '<rootDir>/src/layout/index.ts$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@tests(.*)$': '<rootDir>/src/tests$1',
    '^@typings(.*)$': '<rootDir>/src/typings$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@views(.*)$': '<rootDir>/src/views$1',
  },
};
