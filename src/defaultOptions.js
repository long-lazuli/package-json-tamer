module.exports = Object.freeze({
  useTabs: false,
  tabWidth: 2,
  expandUsers: false,
  interpretBackslashes: true,
  keyOrder: [
    /**
     * Details
     */
    'private',
    'name',
    'description',
    'license',
    'author',
    'maintainers',
    'contributors',
    'homepage',
    'repository',
    'bugs',
    'version',

    /**
     * Yarn specific
     */
    'workspaces',

    /**
     * Configuration
     */
    'main',
    'module',
    'browser',
    'man',
    'preferGlobal',
    'bin',
    'files',
    'directories',
    'scripts',
    'config',
    'bundlesize',
    'husky',
    /**
     * Dependencies
     */
    'optionalDependencies',
    'dependencies',
    'bundleDependencies',
    'bundledDependencies',
    'peerDependencies',
    'devDependencies',

    /**
     * Used for npm search
     */
    'keywords',

    /**
     * Constraints
     */
    'engines',
    'engine-strict',
    'engineStrict',
    'os',
    'cpu',

    /**
     * Package publishing configuration
     */
    'publishConfig'
  ],
  scriptsKeyOrder: [
    /**
     * Comments first:
     */
    '#'
  ]

});
