# End-to-end testing (E2E)

End-to-end testing, or E2E, is a software testing methodology to test an application flow from start to finish. It is used to validate the system under test and its components. End-to-end testing is performed from the user's perspective to ensure that the application behaves as expected. The term `end-to-end` refers to the entire process, from the user input to the output, where the frontend application interacts with the backend services.

This kind of testing methdology is often used to test web applications, where the user interacts with the application through a web browser. The purpose is to simulate real user scenarios and ensure that the application works as expected. For example, we can write test case to validate that a form can be filled, submitted and then the results can be displayed on the screen.

End-to-end testing can be performed manually or automated. Automated end-to-end testing is preferred because it is faster, more reliable, and can be run multiple times. There are many tools available to automate end-to-end testing, such as Selenium, Playwright, Puppeteer, and Cypress. We will focus on Playwright.

At first end-to-end testing, or any kind of testing, might seem like a waste of time and an activity which slows down the development process. However, testing is an essential part of software development. It helps to catch bugs early, ensure that the application works as expected, and provides confidence to developers to make changes without breaking the application. How many times have you made some changes to only realise that they break something else? Or that someone else broke your code? Automated testing can help to catch these issues early and prevent them from happening.


## End-to-end testing automation

Automated end-to-end testing is the process of writing scripts to test the application automatically. These scripts simulate user interactions with the application, such as clicking buttons, filling forms, and validating the results. The scripts are written to test the application flow and ensure that the application works as expected.

The tests script can be executed manually, or automatically by listening to file changes, git commits (git hooks), or in a CI/CD pipeline after code has been pushed to a remote repository. Usually all of these steps are used within a single project to ensure that the application is tested at every stage of development.

Automation can utilise multiple different project configurations, such as different user roles, working vs non-working databases etc. Also different client configurations, such as different browsers, devices, and screen sizes and their combinations. This way the application can be tested in multiple different scenarios to ensure that it works as expected.

These tests can be executed in parallel, to further save time.

## End-to-end testing manually

End-to-end testing can be performed manually by following the steps of the application flow. This is a time-consuming process and can be error-prone. Manual testing is usually performed by a tester or a quality assurance engineer. The tester follows the steps of the application flow, interacts with the application, and validates the results. The tester can use a checklist to ensure that all the steps are covered and the application behaves as expected.

However, manual testing is not scalable. It is difficult to test the application flow multiple times, and it is hard to catch all the edge cases. Automated testing is preferred because it is faster, more reliable, and can be run multiple times, with multiple different devices, configurations etc.

Imaging that after each larger change you would manually test the application flow in multiple browsers, devices, and configurations. Human intervention is always prone to errors. Testing the changes on a laptop, couple different mobile devices, and different browsers is a tedious task manually, which will result in forgotten steps. Also the cost increases as the number of devices and configurations increases. Automation can simulate different devices, or some services, such as browserstack, provides an array or real devices with different settings.

Manual testing often can not be executed in parallel.

Note that manual testing is still part of daily programming activities, to make sure that the thing (function, form, db query, etc) works as expected. Each time you preview your changes in browser for example, a manual test is performed.


## End-to-end testing vs integration testing

End-to-end testing and integration testing are two different types of software testing methodologies. End-to-end testing is used to test the entire application flow from start to finish, while integration testing is used to test the interaction between different components of the application. End-to-end testing is performed after integration testing.

End-to-end testing is performed from the user's perspective to ensure that the application behaves as expected. It is used to simulate real user scenarios and ensure that the application works as expected.

Integration testing is used to test the interaction between different components of the application. Integration testing is used to test the interaction between different modules, services, or systems, and that the components work together as expected


## Common test terminology

- **Test case**: A test case is a set of steps to be executed to verify the expected behavior of the application.
- **Test suite**: A test suite is a collection of test cases that are used to test a software application.
- **Passing test**: A passing test is a test that meets the expected result.
- **Failings test**: A failing test is a test that does not pass. Test might fail because of a bug in the application, a bug in the test, misimplementation of the test, or a change in the application.
- **Flaky test**: A flaky test is a test that sometimes passes and sometimes fails. Flaky tests are unreliable and should be fixed.
- **Skip test**: A skip test is a test that is not executed and is not included in the test suite.
- **Test report**: A test report is a document that contains the results of the test cases that are used to test a software application.
- **Test runner**: A test runner is a tool that runs the test cases.
- **Assertion**: An assertion is a statement that checks if the expected result is equal to the actual result.
- **Mocking**: Mocking is a technique used to replace a real object with a fake object. Mocking is used to isolate the code under test and to test the code in isolation.


These terms are used in the context of software testing and are used to describe the different aspects of testing. Understanding these terms helps with the testing process and with communication with other testers and developers. These will become familiar as time goes on and (if) you start writing tests. The list is incomplete, but is transferrable to other testing methodologies.


Now read the [Playwright](playwright.md) material to get started on with automating end-to-end testing with Playwright.


