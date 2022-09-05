## Welcome!

Welcome to the Community Recipe Book, brought to you courtesy of Front-End Foxes, a nonprofit organization dedicated to providing educational opportunities for women.

This recipe book is a great way to practice your GitHub skills.

1. Create a GitHub account for yourself at https://www.github.com. Login and look around if you aren't familiar with GitHub.
2. Go through this tutorial on how to use Git: https://guides.github.com/activities/hello-world/
3. Download Visual Studio Code, a free code editor: https://aka.ms/vscode
4. Once your computer is configured for Git, which might need to be installed separately, visit this GitHub repo while logged in and click 'fork' in the upper right hand corner. A copy of the repo will appear in your account.
5. Add a recipe by creating a new file in `/src/recipes/`. Give it a descriptive name like 'classic-chocolate-chip-cookies.md`. This is a markdown file and you will edit it to add a recipe.
6. Follow this format for your recipe, including appropriate tags:

```

---
tags: ["tag1", "tag2"]
title: "title of recipe"
---

<TagLinks />

# Title of recipe

any notes

## Ingredients

list of ingredients in a bulleted list like this:

- 1 cup flour
- 2 teaspoons milk 

## Tools

list of tools, also bulleted

- Mix the things
- Stir the pot

## Method

Cooking method, added on separate lines as paragraphs like this;

And this, and then do this, and the other things.

And finally you're done!

## Tips

special tips, bulleted

## Author

give yourself credit! You can link to your social media too.
```

7. Add your recipe to the sidebar by editing this file: `src/.vuepress/config.js`. Add a 'child' to the sidebar on line 36: `children: ["", "roasted-brussels-sprouts","your-recipe-here"]`. Keep the same name as your file.
8. Create a PR from your repo to the main branch of this repo
9. Once approved, you'll see your recipe live if all is well!