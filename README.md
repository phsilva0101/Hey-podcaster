<h1 align="center">Hey Podcaster</h1>

<p align="center">Personal design of a podcast site, where all audios already posted is stored, a reproductive player and the possibility to add new </p>

<p align="center">

[![GitHub license](https://img.shields.io/github/license/phsilva0101/Widget-support-user?color=green&label=License)](https://github.com/phsilva0101/Widget-support-user/blob/master/LICENSE)

<a href="https://github.com/phsilva0101/Widget-support-user/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/phsilva0101/Widget-support-user"></a>

[![Made withReactJS](https://img.shields.io/badge/Made%20with-ReactJS-green?style=for-the-badge&logo=NodeJS)](https://nodejs.org/en/)
</p>


## Development environment

## Node and NPM
The first step is to install Node.js, which comes with NPM.

## Windows

For Windows we will use the package manager ** [Chocolatey] (https://chocolatey.org/) **, but before the installation steps we will talk briefly about which shell you should use.

- ** CMD **: also known as ** Command Prompt **, it is one of the oldest shells today (it was built to be compatible with ** MS-DOS **) and, despite its fame, today nowadays it has been used less and less.
- ** Powershell **: new shell introduced by Microsoft around 2005, it presents several improvements in relation to ** CMD **, making it popular today.

Choosing the shell, let's start the installation:

- Search the Windows search field for ** Windows Powershell **, right-click on the program and choose the option ** Run as administrator **.
- Powershell works with an authorization scheme (known as `Execution Policy`) for executing scripts and, therefore, we need to check if the present in the system is compatible with what Chocolatey needs. Run the following command:

```bash
Get-ExecutionPolicy
```

If it returns `Restricted`, run the command:

```bash
Set-ExecutionPolicy RemoteSigned
```

And choose the option [[A] Yes for Everyone`

If the above command has an error, try using:

`Set-ExecutionPolicy Bypass -Scope Process`

Verify that the permission change has occurred successfully by running the command again:

```bash
Get-ExecutionPolicy
```

Once the permission has been changed, just install ** Chocolatey ** with the command:

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager] :: SecurityProtocol = [System.Net.ServicePointManager] :: SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient) .DownloadString ('https://chocolatey.org/install.ps1'))
```

If the command above shows an error, check if your machine meets the minimum requirements

`Windows 7+ / Windows Server 2003+
PowerShell v3 +
.NET Framework 4.5 + `

If the error shown is `Exception when setting" SecurityProtocol ":" Cannot convert the value "3312" `, follow ** [this guide] (https://blog.chocolatey.org/2020/01/remove-support -for-old-tls-versions /).**

- After installation is complete, close and open powershell as an administrator again and run:

```bash
cuttlefish -v
```

If he returns the version of ** Chocolatey **, the installation was a success. To finish, just install the latest LTS version of Node with the following command:

```bash
cinst nodejs-lts
```

And choose the option [[A] ll - yes to all`

After installation is complete, close and open powershell as an administrator again and run:

```bash
node -v
npm -v
```

If you return the Node and npm versions, your installation was successful.
-------------------------------------------------- -------------------------------------------------- 
# Yarn 1

## Windows

To install Yarn 1 on Windows follow these steps, run the command in Powershell (as admin):

```bash
 cinst yarn
```

And choose the option [[A] ll - yes to all`.

Close and open the terminal again, then run the command:

```bash
 yarn --version
```

If the Yarn version is returned (above 1.0, below 2.0), the installation was successful.

### Possible problems

When using Yarn on Windows to install dependencies in your projects, make sure that your username does not have spaces, as in this case, some errors may occur during this process, such as: with the name "Diego Fernandes" , the path to the project folder (assuming it was in the * Documents * folder) would be something like `C: \ Users \ Diego Fernandes \ Documents \ NLW \ Project` and in this case, a solution would be to create the project already at the root of the project. ** Disc C **. Thus, the path to the folder would not pass through the user's name, leaving `C: \ NLW \ Project`.

## Getting Started

## Creating React Project with Next
`` `` bash
NPX Create-Next-App Name-of-Project
`` ``

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

------------------------------------------------------------------------------------------------------

## Configuring Typscript in Next

## Installing and Integrating Typscript with React and Node

```bash
yarn add typscript @ types / react @ types / node -D
```

## Installing library Sass for CSS

```bash
yarn add sass
```

## Installing Date Library for format dates

```bash
yarn add date-fns
```
----------------------------------------------------------------------------------------------------

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.