# Sample Surveys with microbit
Today we are going to use microbits to collect data for our sample surveys. Follow the tutorial to set up your survey!

## Step 1

First we are going to create three variables ``||variables(total)||``, ``||variables(bitter)||``, and ``||variables(notbitter)||``
Place the three blocks in the ``||basic:onstart||``

```blocks
let notbitter = 0
let bitter = 0
let total = 0
total = 0
bitter = 0
notbitter = 0
```

## Step 2

Next, we are going to add a little string using ``||basic.showString()||`` to display what our program does

```blocks
let notbitter = 0
let bitter = 0
let total = 0
total = 0
bitter = 0
notbitter = 0
basic.showString("TRAIT COUNTER")

```

## Step 3

Now, we need to set up a way to collect information for our survey, using the buttons on the microbit. 
First, let's set up our ``||variables(bitter)||`` button using ``||input.onButtonPressed(Button.A)||``, 
and have it display how many people have selected bitter.

```blocks
input.onButtonPressed(Button.A, function () {
    bitter += 1
    basic.showNumber(bitter)
})
```

## Step 4

Now we need to do the same thing for our other survey answer, ``||variables(notbitter)||``.

```blocks
input.onButtonPressed(Button.B, function () {
    notbitter += 1
    basic.showNumber(notbitter)
})
```

## Step 5

Finally, let's use ``||input.onButtonPressed(Button.B)||`` to calculate and show the total number of survey respondents. 
To do this, we need to use a ``||math.plus||`` block.

```blocks
input.onButtonPressed(Button.AB, function () {
    total = bitter + notbitter
    basic.showString("BITTER")
    basic.showNumber(bitter)
    basic.showString("NOT BITTER")
    basic.showNumber(notbitter)
    basic.showString("TOTAL")
    basic.showNumber(total)
})
```

## Step 6

That's it! Your entire program should look like the below, and you're all set to load it onto your microbit, and start surveying people!

```blocks
let notbitter = 0
let bitter = 0
let total = 0
total = 0
bitter = 0
notbitter = 0
basic.showString("TRAIT COUNTER")

input.onButtonPressed(Button.A, function () {
    bitter += 1
    basic.showNumber(bitter)
})
input.onButtonPressed(Button.AB, function () {
    total = bitter + notbitter
    basic.showString("BITTER")
    basic.showNumber(bitter)
    basic.showString("NOT BITTER")
    basic.showNumber(notbitter)
    basic.showString("TOTAL")
    basic.showNumber(total)
})
input.onButtonPressed(Button.B, function () {
    notbitter += 1
    basic.showNumber(notbitter)
})

```
    
