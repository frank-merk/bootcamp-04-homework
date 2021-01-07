# JavaScript Password Generator Assignment

## Overview

This week's assignment was to create an application that would generate a password of random characters based on user specifications. When the user clicks "generate password", the application should ask how long the user would like the password to be, and if the user would like to use special characters, uppercase letters, lowercase letters, and/or numbers. Based on that criteria, the application generates a password and prints it to the browser.

## Approach

First, I had to build character set variables. I chose to build these as arrays, and duplicated the created the uppercase array from the lowercase one using a JS method. Then I made functions to grab random characters from each character set. The tricky part was getting the password to randomly assign those characters in a random order. I achieved this by using the filter method, which removes items from an array or object based on certain criteria, in this case, whether or not the user had selected the character set as an option for their password. Once the application has a "clean" array of true values, it can go through object array and grab a random character at a random index value. 

## Challenges and Other Thoughts

If I was doing this again, I don't think I would necessarily use arrays. After doing some more research, I found a different method, getCharAt, that would have worked just as well and eliminated some of the layers the application goes through to get the input it needs to create the random password. However, I do feel that this approach to building the password is more truly random, in that it's randomly assigned an array and randomly assigned an index of that array.

## Primary Source

I based my method primarily on this video from Traversy Media https://www.youtube.com/watch?v=duNmhKgtcsI, building it to fit my use case and troubleshooting some other issues in stack overflow.
