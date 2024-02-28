module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json'], // Files to bump version in
        updateConfigs: [], // Array of config properties to update (not needed for package.json)
        commit: false,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'], // Files to commit after bumping
        createTag: false,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // Options to use with '$ git describe'
      }
    }
  });

  // Load the plugin that provides the "bump" task
  grunt.loadNpmTasks('grunt-bump');

  // Default task(s)
  grunt.registerTask('default', ['bump']);
};
