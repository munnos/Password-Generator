# password-generator

In this project, I created a password generator using Javascript. The user is asked both the number and type of characters they desire. For example, the user can select whether they want
lower case letters, upper case letters, numbers and special characters through a series of prompts that start when the user presses the 'Generate Password' button. If the user selects cancel, they are met with an alert stating "you exited the password generator!".

In order to generate the password, I used a series of arrays for each character type and then utilised a for loop to iterate through the elements in the seperate array generated with the user's
choices and put these in yet another array. This was to ensure the password was truly random and also corresponded to the number of characters the user had initially requested.

This final array was then converted to a string so the browser would render the final password.

## Screenshots

![image](https://user-images.githubusercontent.com/88617634/180163728-67c3ba42-be20-4523-aef6-286d943b84f4.png)

![image](https://user-images.githubusercontent.com/88617634/180163904-fbf7ec71-b6c6-4ff0-8e3d-46fb610d2459.png)


## Deployment

https://munnos.github.io/password-generator/
