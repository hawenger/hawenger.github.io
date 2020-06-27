# hawenger.github.io
A personal website designed to showcase & track html, css and javascript progress whilst documenting personal growth as a web developer.

I've always enjoyed writing and have kept journals since I was a little kid. As a teen and adult, I've written informally for college magazines and on Facebook, documenting the often amusing interactions ecountered whilst riding a bus or your losing keys in Home Depot. With the goal of ocntinuing to grow as a fullstack web developer, I thought that combining my passions would be an excellent way to showcase the unique sset of skills I offer to future employers.

RESPONSIVE WEB DESIGN

    >Approach

        One of the main goals of this assignment was to make our website responsive.  Originally I believed that to mean we had to use Bootstrap to do so, however, when I learned from our instructor that we didn't have to use Bootstrap for the assignment, I opted into learning how to use css grid and flexbox instead.  I saw this as a wonderful opportunity to learn a new skill and to dive in deeper to css while creating something that would be more manageable and customizable in the long run.

    >HEAD
        
        I used  <meta name="viewport" content="width=device-width, initial-scale=1.0"> on all my pages to set the VW to be flexible across devices

    >CSS Grid & Flex

        I set all my webpages to the css grid, an example would be on my homepage, index.html and gridstyle.css:
        
![CSS Grid on index.html](../READMEASSETS/cssgrid.png)
Format: ![div element showing nested div elements in HTML document](url)
        
        ![CSS Grid on gridstyle.css](../READMEASSETS/cssgridcss.png)
        Format: ![css grid container styling with columns, rows and ](url)

        Flex was often used to style inside of grid
        
![CSS flex on gridstyle.css](../READMEASSETS/flex.png)
Format: ![css grid-item with display:flex and relevant content modifications](url)

        I have a number of grid-items empty on my homepage as I have plans for future use of space and derailed from my original sketch.  While the empty boxes are okay with me as the serve a purpose for future use, I currently have alphabetically inserted grid-items in between the numerical grid-item system I orginally implemented and plan on going back into the program, once I rebuild, to reorganize this.

    >MediaQuery & Navbar
        
        I used the same mediaquerys for each webpage in the following sizes:
            *43em
            *62em
            *82em
        
![@mediaquery sizes](../READMEASSETS/mediasqsizes.png)
Format: ![css media queries](url)
        
        I picked em over pixel size as it functions better and more consistently across platforms.

        On all pages, the navbar funtions the same, staying sticky at the bottom of the screen for better mobile use with an expandable menu and floating to the top once the browser reaches 62em.  I kept styling and size consistent across all pages, checking to make sure that all elements of navigation were accesible across devices.

    >Margins

        I was cautious to adjust elemnts sizing appropriatley as well as margins for each page.  My first consideration was readability, aesthetics being second.  I kept no margins on my smallest mediaqueries and opted into margins on sizes 62-82em.  As for the 82 and up, I took mostly aesthetics into consideration, understanding that larger monitors are used for either work or by people who want to enjoy the aesthetic experience of a large screen.  Those who do work on large screens typically split screen, thus making the typical viewport fall into the 62-82 range anyway.  I opted out of margins for a number of my 82em and larger sizes, instead prioritzing aesthetics over readability, if only slightly, due to this reasoning. I hope to offer the user a pleasing visual experience and plan on desinging my website on this basis in the future.  I think this will be especially beneficial when integrating javascript animations.

    >Text & MISC.

    I used ems instead of px for font and sizing options for better, responsive design as well as percentages when applicaple.  I chose VW units when approprpriate.


ACCESIBILITY

    >I used HTML5 semantic tags, header, main, footer, img etc.

![Semantic Tags](../READMEASSETS/semantichtml5.png)
Format: ![semantic html on index.html](url)

    >I used aria-hidden="true" & role="none and aria-label="" when applicable for screen reader accesibility.

![Aria Labels](../READMEASSETS/arialabels.png)
Format: ![semantic html on index.html](url)

    >I kept the navbar minimalistic and used high contrast colors to make text more readable, I chose Verdana and Arrial Narrow for similar reasons.

    >I kept the navbar menu on the right hand side of the screen and made sure navigation options appeared blockstyle above navbar for one-handed navigation on sizes under 62em.

    >For smaller screens I added portoflio and contact buttons outside of block style nav for easier navigation across the site.


VALIDATION SERVICE USED : 

![Validation Service](../READMEASSETS/validation.png)
Format: ![semantic html on index.html](url)
