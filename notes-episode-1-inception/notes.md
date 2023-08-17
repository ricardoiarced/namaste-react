# What is CDN?
CDN stands for content delivery network, and it is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

Related to react, CDN is a place where the react library is hosted. We're just fetching the react library and put it in out code using CDN links

# Why do we use CDN?


# What happens when we insert the CDN links in our code?
Well, now our browser understands React. And now if we head over to our index.html file and open it in our web browser, go to dev tools, and open the console, and write React, we can see a huge object called React (and inside, a lot of methods we can use now).

# What is the attribute crossorigin inside the script element of the CDN?

# When we go to the source inside the CDN link with the description of react, what does the link take us to?
Well, the link take us to a page where there is a lot of code written. Basically, JavaScript code, and that's because, React is a JavaScript library (The source code of React, all code of React in one file). When we put the CDN links we now got React to our project.

# Who is writing the code of React?
Some Facebook (Meta) developers like you and me.

# Now, the other link from the other CDN link with the description of react-dom, what does the link take us to?
This take us to the React library which is useful for DOM operations, so, to modify the DOM (builds the bridge between React and the DOM).

# Why do we have two links that take us to two separate files?
That's because React does not only work in browsers. It works in phones as React Native, and other things as well. Therefore there are different types of functions or methods which are being used in different places like phones, browsers, and so on. That's why we have two files.

