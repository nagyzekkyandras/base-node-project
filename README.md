Dependencies:
```sh
# if not installed
npm install -g grunt-cli

# downloads dependencies
npm install
```

Usage:
```sh
# patch version update
grunt
# or
grunt bump:patch

# minor version update
grunt bump:minor

# minor version update
grunt bump:major

# define version
grunt bump --setversion=0.1.0
```