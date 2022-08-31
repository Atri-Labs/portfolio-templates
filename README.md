# Atri-Labs/portfolio-templates

## What is this repository for ?

This is a skeleton repositery for Software Developers or Machine Learning Engineers who want to put a nice portfolio on the web and showcase their projects to attract recruiters and have an edge above other candidates. 

It includes a custom testing workbench which will help you to present your model in an impressive and userfriendly way. 

## Do i need to know a lot of Web Development to use this project ?

Absolutely not! Just clone the repo by following the steps below and edit the microcopies and assets as per your need. 

Yes, thats all you need to do!

## How to use?

### Setup

```shell
git clone https://github.com/Atri-Labs/portfolio-template.git

cd portfolio-template

pipenv install
```

### Start the editor

```shell
pipenv shell

atri start
```

## How to make your portfolio responsive?

Evaluate each section at different breakpoints. If necessary, consider making one of the following changes in order:

1. Check if you need to display a particular component in smaller screen sizes. For example, images are sometimes removed in mobile view.
   a. This can be achieved by setting `display` to `none`.

2. If you wish to retain components, you can consider displaying them one below the other instead of displaying them side-by-side.
   a. This can be achieved by applying `flex wrap`.
   b. Usually, `flex-wrap` is set to `wrap`. Determine if you need `wrap` or `wrap-reverse`.