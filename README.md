# Hack Hour: Data Structures & Algorithms

## Overview

The challenges in this repository are designed to exercise your problem-solving skills through writing TypeScript implementations for a variety of common algorithms.

Make sure you read through and understand the challenge, then work through your approach. Often, the first attempt will be a brute force solution. Examine that solution to see if there's some time or space complexity that could be saved using a different approach. Other times, you may not get to the solution at all. It is still valuable time spent making the effort. Even if you don't solve the problem, you will benefit from the exercise. Just keep building that muscle so it's there when you need it!

## Getting Started

- [X] Fork and clone this repository. If you need a refresher, just follow the instructions found [here](https://github.com/CodesmithLLC/dev-environment-setup/blob/main/fork-clone.md)!

Next, follow these steps in order to link the cloned repository in your local dev environment with the original repository on CodesmithLLC's GitHub.

- [X] On GitHub, navigate back to the CodesmithLLC version of this repo, click the green `Code` button, and copy the URL in the dropdown.
- [X] In your terminal, type `git remote add upstream <CodesmithLLC github URL>`.
- [X] Verify that you have aliases for origin and upstream set by typing `git remote -v`. These aliases should look something like this:
  ```
  origin    git@github.com:USERNAME/hack-hour-campus-01.git (fetch)
  origin    git@github.com:USERNAME/hack-hour-campus-01.git (push)
  upstream  git@github.com:CodesmithLLC/hack-hour-campus-01.git (fetch)
  upstream  git@github.com:CodesmithLLC/hack-hour-campus-01.git (push)
  ```
- [X] Set your configuration for this repo by running `git config pull.rebase false`.

## How do I get new Hack Hours every day?

- [X] In your terminal, navigate to your hack hour directory.
- [X] Make sure you have added and committed your changes from previous hack hours. (If you're unsure, type `git status` to check!)
- [X] Type `git pull upstream main`. This will pull down the latest challenges & solutions.

NOTE: You shouldn't ever need to create additional files. The **only way** new files should be created is by pulling from upstream main.

- [X] Run `npm install` to install any dependencies
- [X] Run `npm test` to start the test runner

## Testing

Testing for all hack hour alogrithms are handled through Vitest, which provides both an assertion library and test runner built on top of Vite. You'll learn more about both these tools later on in the curriculum!

- To test all files in the `challenges` folder, run `npm test`

To test a specific file, the test script followed by the filename. For example:

- To test `challenges/merge-sort.ts`, run `npm test merge-sort`.
- To test `solutions/merge-sort.ts`, first change the import filepath in `__tests__/merge-sort.test.ts` to `'../solutions/merge-sort'`, then run `npm test merge-sort`.

NOTE: It's a great idea to keep Vitest running in the background while you're working on a particular challenge, ensuring that you get immediate feedback as you work towards a solution.

## Type Checking

A tsconfig.json file has been included in order to configure the TypeScript compiler for type checking. You should be able to monitor for type errors through your IDE without needing to explicitly run the compiler, but if you'd like to see the output in your terminal, run `npm run check`. If you'd like to type check a specific file, run `npm run check:file [FILEPATH]` passing in the filepath to the file you'd like to check.
