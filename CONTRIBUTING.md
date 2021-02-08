# Contributing

:wave: Hello there!
Welcome to **jsonsummarizer**! This document is about the guidelines for this repository. These are not necessarily rules. If you think this document needs some changes, feel free to propose a pull request to this document!

#### Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Simple Details On What Should You Know](#simple-details-on-what-should-you-know)
3. [Ways To Contribute](#ways-to-contribute)
  1. [Issues](#issues)
    1. [Reporting Bugs](#reporting-bugs)
    2. [Requesting Features](#requesting-features)
  2. [Pull Requests](#pull-requests)
    1. [Your First Code Contribution](#your-first-code-contribution)
      1. [Local code development](#local-code-development)
    2. [Creating Pull Requests](#creating-pull-requests)
4. [Additional Notes](#additional-notes)
  1. [Issue Labels](#issue-labels)
  2. [Pull Request Labels](#pull-request-labels)

# Code of Conduct

This repository and everyone participating in it is governed by the Code of Conduct. When you participate, people will expect you to show behavior according to this code. If you find unacceptable behavior, report these kind of behavior to [the owner](mailto:kaangaming.gamejolt@gmail.com) or the repository's maintainers or collaborators.

# Simple Details On What Should You Know

**jsonsummarizer** is a repository/project that's simple enough, it serves simple functions. The project might expand to other great functionalities, and it should be simple to contribute to the project. E.g. if there is any issue in the Issue Tracker requesting a feature, you can attempt to provide requested feature by creating a pull request.

It's also a new project, so it might not contain enough functions to your needs.

# Ways To Contribute

## Issues

### Reporting Bugs

When you encounter a bug, you should report it as an issue in this repository! This section should help you on creating an issue for a bug!

Just make sure the issue you are creating is non-existent. You should check [this list](https://github.com/KaanGaming/jsonsummarizer/issues) before creating a new issue, because you might find a similar issue to the one you might be creating. Make sure your issue is descriptive enough. You can use [this bug template](https://github.com/KaanGaming/jsonsummarizer/issues/new?assignees=&labels=&template=bug_report.md&title=%5BBUG%5D) if you think you can't write one from scratch.

> **Note**: This repository provides small amount of functions, but don't let this note hesitate you from anything!

> **Also**, if you find a closed issue that seems like the issue creator is experiencing the same thing as what you are experiencing, make sure to open a new issue then link the closed issue.

**On creating a (good) bug report, you should...**

* **Provide a good and descriptive title** for your issue to clarify the problem you're experiencing.
* **Give the exact steps on reproducing the problem**. Give the JSON code that has caused this issue. *If the JSON itself has a syntax error, it's not a bug.* Make sure to explain how you did it, too.
* **Provide an explanation on what strange things you observed after the reproduction steps, if there are any.**

Also, if there is any other additional detail that isn't provided here, make sure to include these in your issue too. If the reproduction and other details can't help, the additional details can be the last resort. 

### Requesting Features

Is there any missing functions that would have helped you if they existed? Requesting features are welcome here! First, check if someone [already requested your feature](https://github.com/KaanGaming/jsonsummarizer/labels/feature%20request), or if someone has [already proposed a PR to your request](https://github.com/KaanGaming/jsonsummarizer/labels/feature).

**On creating a (good) feature request...**

* **Provide a good and descriptive title** for your issue to clarify the problem you're experiencing.
* **Provide steps of the requested feature** in as many details as possible.
* **Provide media to demonstrate the feature**. This can be anything related to your concept/feature.
* **Explain why this feature would be useful** to other users of jsonsummarizer.
* **Provide extra details if there is any.**

## Pull Requests

Do you want to expand the functionality in this project? Or do you want to fix some stuff? Either way, great! PRs are always welcome in this repository! This section aims to help you on some topics.

### Your First Code Contribution

Not sure how you can start contributing to jsonsummarizer? You can take a look at these issues:

* **[Good First Issues](https://github.com/KaanGaming/jsonsummarizer/labels/good%20first%20issue)**: These issues are for beginners who want to contribute to Express.js applications! These issues should be easy to fix. Recommended issues.
* [Help wanted issues](https://github.com/KaanGaming/jsonsummarizer/labels/help%20wanted): These issues should be a lot more involved than **good first issue**s.

#### Local code development

The repository can be cloned and be coded in your OS without visiting GitHub. Here are the steps you should follow:

1. (Optional but recommended) Fork the repository. If you fork the repository, you can edit the code locally then upload it to your fork hosted on GitHub! You can still code offline without any forks using `git clone`.
2. **Install the dependencies** by using `npm install`. It should download all dependencies. (`node_modules` isn't included when cloning the repository.)
3. **Run the server** using either `nodemon` or `node .`. The difference between `nodemon` and `node .` is the `nodemon` command restarts the code when it detects any changes in JavaScript or JSON files, and not the HTML files. HTML files and other static files found in `www/` change automatically regardless of what command you are using.
4. **Commit changes once you are done** coding in your local directory and commit changes by first adding all (or only specific files) by using either `git add *` (adds all changed files to commit) or `git add [INSERT FILENAME]` to add only one single file in one command. Then use `git commit`, which launchs the Vim editor. If you don't have Vim installed, it will simply display an error relating to Vim not being installed. You can install Vim by doing `pkg install vim`. If you don't want to install Vim, you can use `git commit -m "insert message"` to commit without entering Vim editor. To use Vim editor, push the `INSERT` key to start editing the file. Then `ESC` to use commands in Vim and then type `:w` to save, `:wq` to save and quit, or `:q` to simply quit. You can leave the commit message empty in Vim editor to cancel the commit.
5. **Push the changes to your fork** using `git push`. If you have cloned using SSH, enter your passphrase, if you cloned using HTTPS, enter your username and password.

Also, when there are any changes in your fork from GitHub, simply use `git pull` to get all changes from the fork. If you are committing to the original repository itself, it's more likely to see those changes. Use `git pull` to pull changes from original repository.

### Creating Pull Requests

You finished your coding session and you are about to push some changes to the original repository. That's great! Here are some things you should watch out for.

**You should either...**

* Fix problems that are described in issues
* Add features that are either described in issues or features that you added and the features you thought would be useful

**Additionally, pull requests...**

* Should include what is the PR adding OR fixing
* Should link related issues if there are any
* Should provide media about what the PR is adding if there are any available
* Should maintain jsonsummarizer's quality

Reviewers may also suggest changes or ask you to complete anything else before your pull request can be accepted.

# Additional Notes

## Issue Labels

| Name | Description | Explanation |
| ----- | ----- | ----- |
| **bug** | Faulty behavior | --- |
| **feature request** | Suggestion of a feature | --- |
| **good first issue** | Good first issue for first time contributors | --- |
| **help wanted** | Extra attention required | --- |
| **invalid** | Bad issue or bad pull request | Most likely issue ending up being irrelevant |
| **question** | Incomplete information found in issue and needs more information | --- |
| **wontfix** | Issue mentioning about intended feature or something else | --- |

## Pull Request Labels

| Name | Description | Explanation |
| ----- | ----- | ----- |
| **feature** | Adds a feature | --- |
| **documentation** | Fixes a documentation or adds a new documentation | Most likely fixes about CONTRIBUTING.md or other documentation files |