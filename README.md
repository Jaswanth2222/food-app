# food-app
Developing a food delivery app

### Developing a food delivery app ##

### Commands and step by step procedure to oush code from working durectory to remote repository.

1. Firdt create a reposittiry in github with a name related to your project.
2. open cmd prompt and type a cmd "git clone <remote repository code>"
3. now the repo folder will get stored in to your working directory , open this in your vs code and intially there will be only one branch called <master> and we are not allowed to make any changes in it
4. so now we need to create an branch called <develop> which we need to push this to our remote with file README.md, commands to push our file

creating a branch git checkout -b <branch name>

git add . ==> to add multiple files, git add <file name> to add a single file to staging area.
git  commit -m "commit message" moving file from staging area to local directory
git push -u origin develop moving files from local directory to remote repo

this is done, now write code what ever you want to and move to remote by following the above steps

creating new branch

git checkout -b feature/task-1

git add .
git commit -m "commit message"
git push -u origin feature/task-1

now goto github, raise pr from feature/task-1 to develop and merge the code

now come to cmd and sync the code which is in develop in remote to working directory

git pull

and if there are other branches merge the code from develop to these branches, switch to branch by entering cmd git checkout <branch name>

merge the code from develop

git merge develop


### About unique key in react ###
1. The use of unique key in react is if there are multiple children rendnered from an array using map, react will kepp track of these children when we provide an unique key and if there are new children rendered react wont re-render the children as it is tracking the children which are rendered intially and it will render only the children which are updated.

### Functional component is a simply a javascript function which consits of jsx 

1. JSX is a html like syntax but actually not an html which help dvelopers to wrote html and js logic in the same file

2. Parcel is a bundler which bundles our code and removes the un wanted code, not only these two parcel will do lot of things HMR and etc..

3. Node modules is a folder which consists of dependencies that we have installed from npm, actually npm doesn't have any name, it is managin packages so people are use to call it as node package manager

4. Transistive dependency means we need parcticular package for our project, so we simply download it by npm i <package name>, this pakage is dependent on some other package which we dont know and this will get automatically installed with out any external command.

5. component composition means importing a component inside another component

eg, we import <Header /> in <App />

6. 