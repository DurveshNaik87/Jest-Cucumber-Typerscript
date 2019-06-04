# typescript-jest

## Jest and Jest-Cucumber with Typescript

#### Jest Setup
Install the following dependencies

 	jest
 	
 	@types/jest
 	
 	typescript
 	
 	ts-jest
 
 ts-jest : Typescript preprocessor which allows jest to transpile Typescript on the fly and have source-map support built-in.
	

Generate the tsconfig with default configuration

	tsc --init

Generate the jest config file with default configuration

	jest --init
	
A file named jest.config.js will be created.

	1. Uncomment and Modify the testMatch object to point to your test folder
	2. Uncomment the transform object and add the following
		transform: {
			"^.+\\.tsx?$": "ts-jest"
		}
		This tells jest to use ts-jest for files with .ts or .tsx extension
		
Add script to run test in package.json

	{
		"test":"jest"
	}
this allows you to run you test by executing 'npm test'.

For generating coverage

	jest --coverage
	
To initiate watch mode

	jest --watch
	
#### Mocking Tutorials

	https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
	https://jestjs.io/docs/en/mock-functions
	https://jestjs.io/docs/en/manual-mocks
	https://jestjs.io/docs/en/timer-mocks
	https://jestjs.io/docs/en/es6-class-mocks

##### Reporters and Logging(in progress)

	jest-stare
	jest-html-reporter
	jest-html-reporters
	jest-junit
		junit viewer
	jest-xunit
		xunit viewer

		
## Jest-Cucumber Typescript Setup

Dependencies : 

	npm install --save jest-cucumber
	
Update jest.config.js file with the following

	1.
		"testMatch":[
			"**/*.steps.ts"
		]
	
	2.
		transform: {
			"^.+\\.tsx?$": "ts-jest"
		}

Generate tsconfig.js with default configuration

Add the test script in package.json

	i.e. scripts:{
			test:"jest"
		}

Folder structure

	typescript-jest
	   cucumber
	      features
	         demo.feature
	      step-definitions
	         demo.steps.ts
			
Create a feature file eg. demo.feature and add a scenario in it 
	
	eg. 
		Feature: Demo Feature

		To check if Jest cucumber works with typescript
	
		Scenario: Demo Scenario
			Given To check if given step is called and print something
			When To check if When step is called and print something
			Then To check if Then step is called and print something

			
Create a step file named "demo.steps.ts" and add the following 

	import { loadFeature, defineFeature } from "jest-cucumber";
	
	const feature = loadFeature("./cucumber/features/demo.feature");
	
	* loadFeature methods loads the feature file
	* defineFeature creates the tests identified by the loadFeature in jest format
	
To auto generate the steps, run npm test or npx jest.

This will generate the steps code in console output, copy and paste in the steps file i.e. demo.steps.ts

It should look like the below code

	defineFeature(feature, (test) => {

    		test("Demo Scenario", ({ given, when, then }) => {
		
    		    given(/^To check if given step is called and print something$/, () => {
    		    });
		
    		    when(/^To check if When step is called and print something$/, () => {
    		    });
		
    		    then(/^To check if Then step is called and print something$/, () => {
    		    });
    		});
	});

To run your tests execute 

	npm test
	
Note : 

	1. The order of given, when, and & then should be the same as specified in the feature file.
