## Namaste React 🚀 Course by Akshay Saini

# _Episode 02 - Igniting App_

## Theory :

## Q: What is `NPM`?

A: Here's a corrected version:

## Q: What is `NPM`?

A: NPM, short for Node Package Manager, is a package manager for JavaScript programming language. It is primarily used to manage project dependencies and package versions. NPM allows developers to easily install, share, and manage third-party libraries and tools for their projects. Additionally, it provides commands for initializing a new project, installing packages, updating packages, and running scripts defined in the project's `package.json` file. NPM is widely used in the Node.js ecosystem and is an essential tool for JavaScript developers.

## Q: What is differecne betweeen library and depandancy.

## Q: what is `package.json`? and why do we need it?

A: It is a configuration for NPM.it keeps tracking the packages version.

## Q: What is Parcel?

A: it is a bundler it is of two types developamnet and production.

CMD:`npm install -D parcel` for development

## Q: - What is ~tilde and ^caret ?

A: when a package have minor or major upgrade ^Caret is automatically upgrade the package version while ~tilde is install major is updates

### Tilde (~) and Caret (^) in Version Numbers

- **Tilde (~)**: In npm (Node Package Manager), the tilde operator is used in version numbers to specify a range of acceptable versions. When you use a tilde in front of a version number in your `package.json` file, npm will allow installing any version that is greater than or equal to the specified version but less than the next significant release. For example, `~1.2.3` would allow any version in the `1.2.x` range but not versions `1.3.0` or higher.

- **Caret (^)**: Similarly, the caret operator is used to specify a range of acceptable versions in npm. However, the caret operator allows installing any version that is greater than or equal to the specified version but less than the next major release. For example, `^1.2.3` would allow any version in the `1.x.x` range but not versions `2.0.0` or higher.

### Example Usage:

- **Tilde (~)**: `"dependencies": { "package-name": "~1.2.3" }`

  - This would allow installing versions `1.2.3`, `1.2.4`, `1.2.5`, etc., but not `1.3.0` or higher.

- **Caret (^)**: `"dependencies": { "package-name": "^1.2.3" }`
  - This would allow installing versions `1.2.3`, `1.3.0`, `1.4.0`, etc., but not `2.0.0` or higher.

### Use Cases:

- Tilde (~) and caret (^) are useful for specifying version ranges in your `package.json` file to ensure that your project works with compatible versions of dependencies while allowing minor updates for bug fixes and new features.
- Tilde (~) is more restrictive than caret (^) as it allows only minor updates within the same major release, while caret (^) allows minor and patch updates within the same major release.
- Caret (^) is often preferred for dependencies in projects where you want to stay up-to-date with the latest features and bug fixes without risking compatibility issues due to major version updates.

## Q: What is package-lock json?

Ans: it keeps track that what is the exact version.and it kind of lock the verison and record of exact version.package.json can have a ^Caret and ~tilde.

## Q: What is integrity in parcel?

Ans:In Parcel, the integrity attribute is used for Subresource Integrity (SRI) checking. Subresource Integrity is a security feature that allows browsers to verify that resources (such as scripts or stylesheets) fetched from a server have not been tampered with.

## Q: What is node-modules?

Ans: The node_modules directory is a special directory in Node.js projects that contains all the dependencies installed for the project. When you use a package manager like npm (Node Package Manager) to install packages for your Node.js project, npm creates a node_modules directory and installs the packages into it.

## Q: What is transitive dependencies?

Ans: A dependency which have their own dependencies.
Transitive dependencies are dependencies that are required by another dependency of your project. In other words, when you install a package that your project depends on, that package may in turn depend on other packages.
