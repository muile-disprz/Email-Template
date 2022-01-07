# Research around advanced UI/UX functionality in Email Templates

## Support for horizontal scroll
Mostly Support for the overflow CSS property, we can apply for these email clients(representative):

**Apple mail**

![Screen Shot 2022-01-07 at 8 09 38 PM](https://user-images.githubusercontent.com/94039579/148549147-376af230-3520-486b-b10e-880741ac3608.png)

**Outlook web**

![Screen Shot 2022-01-07 at 8 09 25 PM](https://user-images.githubusercontent.com/94039579/148549209-9d965b2d-f111-4bd8-ab99-1046f7e0905d.png)

**Gmail web**

![Screen Shot 2022-01-07 at 8 16 58 PM](https://user-images.githubusercontent.com/94039579/148549464-482afda0-f74f-41f1-9d6b-1e81bb152bc4.png)


## Support for flip of a div on hover
Hover is works fine in some email clients, but `transform, transition` only works for specific email(Apple mail, IOS, Outlook on macOS)
  - Hover
  ![Screen Shot 2022-01-07 at 8 19 48 PM](https://user-images.githubusercontent.com/94039579/148549850-950a79b4-fb1d-4472-9899-9bcb89acba4b.png)
  - Transition, Transform
  ![Screen Shot 2022-01-07 at 8 23 52 PM](https://user-images.githubusercontent.com/94039579/148550545-63168662-a464-4b40-b765-b956e6dbf3a9.png)

**Apple mail** +

![flipdiv](https://user-images.githubusercontent.com/94039579/148551066-bf66518f-92a8-494d-a48c-975b862b4140.gif)


**Outlook web** -

![Screen Shot 2022-01-07 at 8 29 30 PM](https://user-images.githubusercontent.com/94039579/148550837-c463488c-8105-41ba-b0b7-a06ac834d8d8.png)

**Gmail web** - 

![google_div](https://user-images.githubusercontent.com/94039579/148551166-8fe596bd-46f1-49f7-b043-0b38fe156ca6.gif)


## Rendering a sentence with animation by displaying one character at a time.

Overview CSS animation is supported in webkit clients, such as Apple Mail, iOS mail apps, Outlook on Mac, and when viewing emails in a browser.

![Screen Shot 2022-01-07 at 7 57 21 PM](https://user-images.githubusercontent.com/94039579/148547179-ff060bbd-a6f6-4488-9f2e-905e74ab7964.png)

**Apple mail** +

![apple_animation](https://user-images.githubusercontent.com/94039579/148551755-43b26ce4-41dd-4a28-8227-2ea4d9c4be1f.gif)

**Outlook web** -

![Screen Shot 2022-01-07 at 8 36 05 PM](https://user-images.githubusercontent.com/94039579/148551696-667836d3-b58e-4470-b67e-a5383a615da2.png)


**Gmail web** -

![Screen Shot 2022-01-07 at 8 34 44 PM](https://user-images.githubusercontent.com/94039579/148551730-d5827511-f0a3-4614-a6ac-9049b1304568.png)

*Notes* I try to find docs and do a lot of examples, but I can't do the animation works fine to support multiple email clients, which seems like a challenge to me.

**Questions**
 - Have you any documents or examples for the section second and third of the research list?

Resource:
- https://www.campaignmonitor.com/css/
- http://freshinbox.com/resources/css.php
